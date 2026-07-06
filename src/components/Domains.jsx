const DomainsMarkup = `<div class="container">
          <div class="section-header reveal">
            <div class="header-title-group">
              <span class="eyebrow">LEARNING TRACKS</span>
              <h2>Five tracks. One launch mindset.</h2>
            </div>
          </div>

          <div class="domains-layout">
            <article class="glass-card domain-card reveal">
              <div class="icon-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M18 10h1a4 4 0 0 1 0 8H7a5 5 0 1 1 1.7-9.7A6 6 0 0 1 18 10Z" />
                </svg></div>
              <h3>Cloud Core & Infra</h3>
              <p>Design high-availability cloud setups, understand storage classes, and configure secure network
                topologies.</p>
              <ul>
                <li>Compute & VPCs</li>
                <li>Storage & Databases</li>
                <li>Security Foundations</li>
              </ul>
              <div class="aws-tech-tag"><span class="tag-label">services:</span> EC2, S3, RDS, VPC</div>
            </article>
            <article class="glass-card domain-card reveal">
              <div class="icon-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M16 18 22 12 16 6M8 6 2 12l6 6" />
                </svg></div>
              <h3>DevOps & Pipelines</h3>
              <p>Automate deployments and build reliable continuous delivery pipelines that run code on demand.</p>
              <ul>
                <li>CI/CD Automation</li>
                <li>Containerized Services</li>
                <li>Infrastructure as Code</li>
              </ul>
              <div class="aws-tech-tag"><span class="tag-label">tools:</span> CodePipeline, ECS, CDK</div>
            </article>
            <article class="glass-card domain-card reveal">
              <div class="icon-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10" />
                  <path d="M12 8v8M8 12h8M20 2v6h-6" />
                </svg></div>
              <h3>Applied AI/ML</h3>
              <p>Deploy machine learning models, integrate translation/vision APIs, and manage data pipeline workflows.
              </p>
              <ul>
                <li>Model Deployments</li>
                <li>Data Engineering</li>
                <li>AI Services</li>
              </ul>
              <div class="aws-tech-tag"><span class="tag-label">models:</span> SageMaker, Bedrock, Rekognition</div>
            </article>
            <article class="glass-card domain-card reveal">
              <div class="icon-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m12 2 8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6l8-4Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg></div>
              <h3>Cloud Security</h3>
              <p>Protect workloads, audit user privileges, monitor logs, and secure data using industry standards.</p>
              <ul>
                <li>Identity & Access</li>
                <li>Threat Monitoring</li>
                <li>Audit & Compliance</li>
              </ul>
              <div class="aws-tech-tag"><span class="tag-label">security:</span> IAM, KMS, WAF, GuardDuty</div>
            </article>
            <article class="glass-card domain-card reveal">
              <div class="icon-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round">
                  <rect width="18" height="14" x="3" y="4" rx="2" />
                  <path d="M8 20h8M12 16v4" />
                </svg></div>
              <h3>Full Stack Cloud</h3>
              <p>Connect user interfaces to robust cloud backends, deploy static web assets, and scale serverless APIs.
              </p>
              <ul>
                <li>REST/GraphQL APIs</li>
                <li>Serverless Compute</li>
                <li>Web Hosting</li>
              </ul>
              <div class="aws-tech-tag"><span class="tag-label">stack:</span> Lambda, API Gateway, Amplify</div>
            </article>
          </div>
        </div>`;

export default function Domains() {
  return (
    <section
      className="section"
      id="domains"
      dangerouslySetInnerHTML={{ __html: DomainsMarkup }}
    />
  );
}
