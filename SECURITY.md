# Security Policy

## Reporting Vulnerabilities

If you discover a security vulnerability in Aeon Atlas, please report it responsibly by emailing the maintainers directly rather than using the public issue tracker.

### How to Report

1. Do not open a public GitHub issue for the vulnerability
2. Email the project maintainers with:
   - A clear description of the vulnerability
   - Steps to reproduce (if applicable)
   - Potential impact
   - Any suggested remediation

We will acknowledge your report within 48 hours and work with you to resolve the issue responsibly.

## Security Practices

### Code Review

All code changes undergo review by at least one maintainer before being merged:

- Pull requests must be reviewed and approved before merging
- Reviewers examine code for security issues, bugs, and adherence to standards
- Code that fails security review will not be merged

### Dependency Management

We take dependency security seriously:

- Dependencies are regularly updated to patch known vulnerabilities
- We use automated tools to identify and alert on vulnerable dependencies
- Critical security updates are released as soon as practical

### Cryptographic Standards

If Aeon Atlas uses cryptographic functions:

- We use well-established, peer-reviewed algorithms
- We rely on standard libraries rather than custom implementations
- Cryptographic practices are documented clearly

### Testing

- Unit tests cover security-relevant code paths
- Integration tests verify security properties
- Security-specific test cases are included for sensitive features

## Security Considerations for Users

### Using Aeon Atlas Securely

- Keep your version of Aeon Atlas up to date
- Follow the documentation's security recommendations
- Report any security concerns or misconfigurations promptly
- Review dependencies for their own security practices

## Supported Versions

Security updates are provided for:

- The current stable release
- The previous release (for critical security issues)

## Scope

This security policy applies to:

- The Aeon Atlas codebase on GitHub
- Official releases and distributions
- Documentation and examples

## Not in Scope

We are not responsible for:

- Security of third-party services or libraries
- Security of user applications built with Aeon Atlas
- Security of custom deployments or modifications

---

Thank you for helping us keep Aeon Atlas secure!