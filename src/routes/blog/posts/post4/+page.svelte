<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Generating Legacy P2PKH Bitcoin Addresses | Paper Wallet Insights</title>
  <meta name="description" content="A technical breakdown of how the tool creates standard Bitcoin addresses starting with '1' using proven hashing algorithms." />
  <meta property="og:title" content="Generating Legacy P2PKH Bitcoin Addresses | Paper Wallet Insights" />
  <meta property="og:description" content="A technical breakdown of how the tool creates standard Bitcoin addresses starting with '1' using proven hashing algorithms." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Generating Legacy P2PKH Bitcoin Addresses</p>
  </div>

  <article class="prose">
    <h1>Generating Legacy P2PKH Bitcoin Addresses</h1>
   
    <p class="post-meta">Published: January 03, 2026</p>
   
    <p>Legacy Bitcoin addresses, also known as Pay-to-Public-Key-Hash or P2PKH addresses, remain the most widely recognized and supported format in the Bitcoin ecosystem. These addresses always begin with the number 1 and provide a reliable way to receive funds across virtually all wallets and services. The Simple Paper Wallet Generator produces exactly these addresses to ensure maximum compatibility.</p>
   
    <p>The process begins with a securely generated 256-bit private key. Using the secp256k1 elliptic curve, the corresponding public key is derived. This public key is then compressed to a 33-byte format, which is the standard for modern Bitcoin transactions. Compression reduces size while preserving all necessary information for verification.</p>
   
    <p>Next, the compressed public key undergoes a double hashing process. First, it is passed through the SHA-256 algorithm, producing a 32-byte hash. This output is then fed into the RIPEMD-160 hash function, resulting in a 20-byte hash known as the public key hash. This double-hash approach provides strong collision resistance and security properties established over years of cryptographic review.</p>
   
    <p>A version byte of 0x00 is prepended to the 20-byte hash, indicating a mainnet P2PKH address. To enable error detection, a 4-byte checksum is calculated by taking the first four bytes of the double SHA-256 hash of the versioned payload. This checksum is appended, creating a final 25-byte structure.</p>
   
    <p>The complete 25-byte payload is then encoded using Base58Check encoding. This format uses a specific alphabet that avoids visually similar characters, reducing transcription errors when addresses are written or typed manually. The result is the familiar address starting with 1, typically 26 to 35 characters long.</p>
   
    <p>Legacy addresses continue to offer excellent security and are fully supported by the Bitcoin network. While newer formats like Bech32 offer advantages in error correction and lower fees for certain transactions, P2PKH addresses remain the safest choice for long-term cold storage due to their universal acceptance across all wallet implementations.</p>
   
    <p>The tool displays both the full address string and a QR code encoding the same information. The QR code follows the standard bitcoin URI scheme when scanned by compatible wallets, allowing seamless receiving of funds. Users can verify the address format by confirming it begins with 1 and matches the expected length.</p>
   
    <p>This methodical process ensures that every address generated is valid, unique, and ready for immediate use. The combination of established cryptographic primitives and careful implementation provides confidence that funds sent to these addresses can be accessed only with the corresponding private key.</p>
   
    <p>Legacy P2PKH addresses strike an optimal balance between security, compatibility, and simplicity, making them ideal for paper wallet applications.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Why do addresses start with 1?</summary>
      <p>The leading 1 results from the version byte 0x00 in Base58Check encoding for mainnet P2PKH addresses.</p>
    </details>
    <details>
      <summary>Are legacy addresses still secure?</summary>
      <p>Yes, they use the same strong cryptography as newer formats and remain fully secure for holding funds.</p>
    </details>
    <details>
      <summary>Can I send to this address from any wallet?</summary>
      <p>Yes, all Bitcoin wallets and services support sending to legacy P2PKH addresses.</p>
    </details>
   
    <p class="italic-note">Always double-check the first and last characters when verifying addresses.</p>
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

  .prose details {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1.25rem;
    margin-bottom: 1.25rem;
    transition: all 0.3s ease;
  }

  .prose details[open] {
    background: rgba(85, 239, 196, 0.1);
    border-color: var(--color-accent);
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--color-accent);
    list-style: none;
    padding-right: 1.5rem;
    position: relative;
  }

  .prose summary::-webkit-details-marker {
    display: none;
  }

  .prose summary::before {
    content: '+';
    position: absolute;
    right: 0;
    top: 0;
    font-weight: bold;
    color: var(--color-accent);
    transition: transform 0.3s ease;
  }

  .prose details[open] summary::before {
    content: '−';
  }

  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 3px solid var(--color-accent);
    color: var(--color-text-muted);
    font-size: 0.95rem;
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .prose h1 {
      font-size: 2.2rem;
    }
    .prose h2 {
      font-size: 1.6rem;
    }
  }
</style>