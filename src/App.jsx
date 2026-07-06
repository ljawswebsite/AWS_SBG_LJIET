import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Domains from './components/Domains.jsx';
import Impact from './components/Impact.jsx';
import Events from './components/Events.jsx';
import Team from './components/Team.jsx';
import Gallery from './components/Gallery.jsx';
import Join from './components/Join.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');
    const sections = [...document.querySelectorAll('main section[id]')];
    const navAnchors = [...document.querySelectorAll('.nav-links a')];
    const revealItems = [...document.querySelectorAll('.reveal')];
    const counters = [...document.querySelectorAll('.counter')];
    const contactForm = document.querySelector('.contact-form');

    if (!navbar || !navLinks || !menuToggle) return undefined;

    const setNavState = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 16);
    };

    const closeMenu = () => {
      document.body.classList.remove('menu-open');
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    };

    const handleMenuClick = () => {
      const isOpen = navLinks.classList.toggle('open');
      document.body.classList.toggle('menu-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    };

    const handleKeydown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };

    menuToggle.addEventListener('click', handleMenuClick);
    navAnchors.forEach((anchor) => anchor.addEventListener('click', closeMenu));
    document.addEventListener('keydown', handleKeydown);

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = String(Math.min(index % 3, 2) * 35) + 'ms';
      revealObserver.observe(item);
    });

    const animateCounter = (counter) => {
      const target = Number(counter.dataset.target || 0);
      const duration = 700;
      const startedAt = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = String(Math.floor(target * eased)) + '+';
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((counter) => counterObserver.observe(counter));

    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const active = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
        navAnchors.forEach((anchor) => anchor.classList.toggle('active', anchor === active));
      });
    }, { threshold: 0.38, rootMargin: '-22% 0px -50% 0px' });

    sections.forEach((section) => activeObserver.observe(section));

    const handleSubmit = (event) => {
      event.preventDefault();
      const button = event.currentTarget.querySelector('button[type="submit"]');
      const original = button.textContent;
      button.textContent = 'Message Queued';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = original;
        button.disabled = false;
        event.currentTarget.reset();
      }, 1600);
    };

    contactForm?.addEventListener('submit', handleSubmit);

    setNavState();
    window.addEventListener('scroll', setNavState, { passive: true });

    return () => {
      window.removeEventListener('scroll', setNavState);
      document.removeEventListener('keydown', handleKeydown);
      menuToggle.removeEventListener('click', handleMenuClick);
      navAnchors.forEach((anchor) => anchor.removeEventListener('click', closeMenu));
      contactForm?.removeEventListener('submit', handleSubmit);
      revealObserver.disconnect();
      counterObserver.disconnect();
      activeObserver.disconnect();
      document.body.classList.remove('menu-open');
    };
  }, []);

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Domains />
        <Impact />
        <Events />
        <Team />
        <Gallery />
        <Join />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
