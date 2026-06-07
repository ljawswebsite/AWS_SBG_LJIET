# Contribution Guidelines

## 1. Branch Workflow

### 1.1 Rules

- Create and work only on your own branch.
- Direct commits or pushes to `main` are prohibited.
- All changes must be submitted through a Pull Request (PR).
- Only the Project Administrator may merge Pull Requests into `main`.

### 1.2 Branch Naming Convention

```text
member1
member2
member3
member4
```

Each contributor is expected to create and use a dedicated personal branch throughout the project lifecycle.

### 1.3 Before Pushing Code

Ensure that:

- The latest changes from `main` have been pulled.
- The project builds successfully.
- All changes have been tested.
- No merge conflicts exist.
- No sensitive information is included.
- Code follows project standards and structure.

---

## 2. Commit Message Standards

Commit messages must clearly describe the purpose of the change.

### 2.1 Acceptable Examples

```bash
git commit -m "Add event registration form"
git commit -m "Implement QR code generation"
git commit -m "Fix login validation issue"
```

### 2.2 Unacceptable Examples

```bash
git commit -m "update"
git commit -m "done"
git commit -m "changes"
```

---

## 3. Pull Request Requirements

Every Pull Request must include the following information.

### 3.1 Example Pull Request

```md
## Summary
Added event registration functionality.

## Changes Made
- Created registration form UI
- Added form validation
- Connected registration data to database

## Testing
- Registration form submits successfully
- Validation messages display correctly
- Data is stored in database

## Notes
- Email verification is pending implementation
```

---

## 4. Security Requirements

The following must never be committed to the repository:

```text
.env
API Keys
Access Tokens
Passwords
Database Credentials
Sensitive Configuration Files
```

All secrets and credentials must be stored securely and excluded from version control.

---

## 5. Repository Policies

- Pull Requests are mandatory.
- Squash merging is used for all merges.
- Auto-merge is disabled.
- Direct pushes to `main` are blocked.
- Force pushes are not allowed.
- Only the Project Administrator may approve and merge changes.

---

## 6. Development Standards

- Keep code clean, readable, and maintainable.
- Do not push untested code.
- Pull the latest changes before starting new work.
- Resolve merge conflicts before requesting review.
- Keep commits focused and limited to a single purpose whenever possible.
- Communicate significant changes with the team before implementation.
- Ensure the `main` branch remains stable and deployable at all times.

---

## 7. Compliance

Failure to follow these guidelines may result in Pull Request rejection until the required corrections are made.
