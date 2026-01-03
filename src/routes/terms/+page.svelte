<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Simple Paper Wallet Generator</title>
  <meta name="description" content="Review the terms of use for the Simple Paper Wallet Generator, including disclaimers about cryptocurrency risks and security responsibilities." />
  <meta property="og:title" content="Terms and Conditions | Simple Paper Wallet Generator" />
  <meta property="og:description" content="Review the terms of use for the Simple Paper Wallet Generator, including disclaimers about cryptocurrency risks and security responsibilities." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: January 03, 2026</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Simple Paper Wallet Generator</strong> ("the Tool"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Tool. The Tool is provided as a free, open-source utility for generating cryptocurrency paper wallets entirely in your browser.</p>

    <h2>2. Nature of the Tool</h2>
    <p>The Tool is a <strong>client-side application</strong> that performs all cryptographic operations locally on your device. No data is transmitted to any server. It generates private keys, public addresses, BIP39 mnemonic phrases, and QR codes using standard Bitcoin protocols. The Tool is provided "as is" without warranties of any kind.</p>

    <h2>3. User Responsibilities</h2>
    <p>You are solely responsible for:</p>
    <ul>
      <li><strong>Secure Generation</strong>: Using the Tool in a safe environment, preferably offline or air-gapped.</li>
      <li><strong>Verification</strong>: Confirming that printed QR codes and text match and scan correctly before funding any address.</li>
      <li><strong>Backup and Storage</strong>: Safely storing physical copies and any mnemonic phrases in secure locations.</li>
      <li><strong>Fund Management</strong>: Understanding that loss of private keys or mnemonics results in irreversible loss of associated funds.</li>
    </ul>

    <h2>4. No Warranties</h2>
    <p>The Tool is provided <strong>without warranty of any kind</strong>, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the Tool will be error-free, secure, or meet your requirements. Cryptographic implementations follow established standards, but users must independently verify correctness.</p>

    <h2>5. Limitation of Liability</h2>
    <p>In no event shall the developers or distributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages arising from use of the Tool, including but not limited to loss of cryptocurrency, data corruption, or security breaches. You use the Tool entirely at your own risk.</p>

    <h2>6. Cryptocurrency Risks</h2>
    <p>Cryptocurrency involves substantial risk. Values can fluctuate dramatically. Paper wallets provide cold storage but do not protect against physical theft, damage, or user error. You acknowledge that cryptocurrency transactions are irreversible and that proper backup procedures are essential.</p>

    <h2>7. Intellectual Property</h2>
    <p>The Tool is open-source software released under a permissive license. You may use, modify, and distribute it according to the license terms. Trademarks and branding remain property of their respective owners.</p>

    <h2>8. Modifications</h2>
    <p>We reserve the right to modify or discontinue the Tool at any time without notice. These Terms may be updated periodically.</p>

    <h2>9. Governing Law</h2>
    <p>These Terms shall be governed by general principles of law applicable to open-source software and online tools.</p>

    <h2>10. Contact</h2>
    <p>For questions about these Terms, please refer to the public repository.</p>

    <p class="italic-note">Use of this Tool constitutes acceptance of these Terms and acknowledgment of the inherent risks of cryptocurrency storage.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--color-text-muted);
  }

  .breadcrumbs a {
    color: var(--color-accent);
    text-decoration: none;
  }

  .breadcrumbs a:hover {
    text-decoration: underline;
  }

  .breadcrumbs p {
    margin: 0;
    color: var(--color-text-main);
  }

  .prose {
    line-height: 1.8;
    color: var(--color-text-main);
  }

  .prose .post-meta {
    color: var(--color-text-muted);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 1rem;
  }

  .prose h1,
  .prose h2 {
    color: var(--color-accent);
    font-weight: 700;
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    font-size: 1.8rem;
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 0.5rem;
  }

  .prose p {
    margin-bottom: 1.25rem;
    color: var(--color-text-main);
  }

  .prose ul {
    list-style-type: none;
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .prose ul li {
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 0.75rem;
    color: var(--color-text-main);
  }

  .prose ul li::before {
    content: '→';
    color: var(--color-accent);
    font-weight: bold;
    position: absolute;
    left: 0;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--color-text-muted);
    text-align: center;
    margin-top: 3.5rem;
    font-size: 1.1rem;
    padding: 1.5rem;
    background: var(--glass-bg);
    border-radius: 16px;
    border: 1px solid var(--glass-border);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .prose h1 {
      font-size: 2.2rem;
    }
    .prose h2 {
      font-size: 1.6rem;
    }
  }
</style>