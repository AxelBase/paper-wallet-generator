<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Simple Paper Wallet Generator</title>
  <meta name="description" content="Read our privacy policy explaining how the Simple Paper Wallet Generator protects your privacy through fully client-side processing with no data collection." />
  <meta property="og:title" content="Privacy Policy | Simple Paper Wallet Generator" />
  <meta property="og:description" content="Read our privacy policy explaining how the Simple Paper Wallet Generator protects your privacy through fully client-side processing with no data collection." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: January 03, 2026</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Simple Paper Wallet Generator</strong>, a fully offline, client-side web utility designed to create secure cryptocurrency paper wallets. This Privacy Policy explains our approach to user privacy. We prioritize <strong>maximum privacy protection</strong> by ensuring that <strong>no personal data is ever collected, stored, or transmitted</strong>. All wallet generation—including private key creation, address derivation, mnemonic phrases, and QR code rendering—occurs entirely within your browser using local computational resources.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>The tool operates on a strict <strong>zero-data-collection principle</strong>. We do not gather any information, including:</p>
    <ul>
      <li><strong>Personal Identifiable Information</strong>: No names, email addresses, IP addresses, or device identifiers are recorded.</li>
      <li><strong>Generated Wallet Data</strong>: Private keys, public addresses, mnemonics, and any user-entered passphrases remain exclusively on your device.</li>
      <li><strong>Usage Analytics</strong>: No tracking of page views, session duration, click patterns, or browser details occurs.</li>
      <li><strong>Cookies or Local Storage Persistence</strong>: The application is completely stateless beyond temporary in-memory processing required for functionality.</li>
    </ul>
    <p>Because everything runs <strong>client-side</strong>, your sensitive cryptographic material never leaves your local environment.</p>

    <h2>3. How the Tool Operates</h2>
    <p>When you use the Simple Paper Wallet Generator:</p>
    <ul>
      <li><strong>Key Generation</strong>: Random entropy is sourced from your browser's secure cryptographic functions. Private keys are derived using the secp256k1 curve standard.</li>
      <li><strong>Processing</strong>: Public addresses are computed through SHA-256 and RIPEMD-160 hashing, WIF formatting, and Base58Check encoding—all performed locally.</li>
      <li><strong>Display and Export</strong>: QR codes and printable layouts are generated in-browser. Printing occurs through your device's native print dialog with no server involvement.</li>
    </ul>
    <p>No network requests are made during or after generation unless you manually navigate away.</p>

    <h2>4. Third-Party Services</h2>
    <p>We do not integrate any external analytics, advertising, or tracking services. All required cryptographic libraries are pure JavaScript implementations bundled with the application. Optional CDN usage for UI frameworks does not enable tracking.</p>

    <h2>5. Security Considerations</h2>
    <p>While we collect no data, user security depends on safe practices:</p>
    <ul>
      <li>Generate wallets on a trusted, malware-free device.</li>
      <li>Prefer offline/air-gapped environments for maximum protection.</li>
      <li>Verify printed QR codes scan correctly before funding.</li>
      <li>Store physical copies in secure, tamper-evident locations.</li>
    </ul>
    <p>We cannot protect data once it leaves the browser through user actions such as printing or manual sharing.</p>

    <h2>6. Children's Privacy</h2>
    <p>This tool is not directed at children under 13. We do not knowingly process data from minors.</p>

    <h2>7. International Compliance</h2>
    <p>By design, our no-collection approach aligns with global privacy regulations including <strong>GDPR</strong>, <strong>CCPA</strong>, and similar frameworks.</p>

    <h2>8. Policy Updates</h2>
    <p>Any changes to this Privacy Policy will be reflected here with an updated effective date.</p>

    <h2>9. Contact</h2>
    <p>For questions regarding this policy, please open an issue on our public repository.</p>

    <p class="italic-note">Your privacy is protected by design—<strong>nothing is collected, nothing is shared</strong>.</p>
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