<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'Introduction to Offline Paper Wallet Generation', description: 'Learn the basics of paper wallets and why generating them offline is essential for maximum security.' },
    { href: '/blog/posts/post2', title: 'How Client-Side Cryptography Ensures Security', description: 'Explore how all key generation happens in your browser, with no data ever leaving your device.' },
    { href: '/blog/posts/post3', title: 'Understanding BIP39 Mnemonics in This Tool', description: 'A guide to the 12-word backup phrases generated and how they enhance wallet recovery.' },
    { href: '/blog/posts/post4', title: 'Generating Legacy P2PKH Bitcoin Addresses', description: 'Details on creating standard Bitcoin addresses starting with "1" using secp256k1 curve.' },
    { href: '/blog/posts/post5', title: 'Private Keys in WIF Format Explained', description: 'What Wallet Import Format means and why compressed keys are used for better compatibility.' },
    { href: '/blog/posts/post6', title: 'QR Codes for Easy Scanning and Import', description: 'How the tool creates scannable QR codes for both addresses and private keys.' },
    { href: '/blog/posts/post7', title: 'Best Practices for Printing and Storing Paper Wallets', description: 'Tips on secure printing, folding, and long-term offline storage to protect your funds.' },
  ];
</script>

<svelte:head>
  <title>Blog | Simple Paper Wallet Insights</title>
  <meta name="description" content="Articles and guides on secure offline paper wallet generation, cryptography, and best practices." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: Paper Wallet Insights</h1>
    <p class="subtitle">
      In-depth articles on offline cryptocurrency wallet generation, security principles, and technical details behind the Simple Paper Wallet Generator.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: var(--color-text-main);
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--color-text-muted);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    box-shadow: var(--glass-shadow);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
  }

  .post-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }

  .post-card .card-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--color-accent);
    font-weight: 600;
    margin-bottom: 0.75rem;
    transition: color 0.3s ease;
  }

  .post-card:hover .post-title {
    color: var(--color-accent);
  }

  .post-description {
    color: var(--color-text-muted);
    flex-grow: 1;
    margin-bottom: 1.25rem;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .read-more {
    color: var(--color-accent);
    font-weight: 600;
    align-self: flex-start;
    transition: transform 0.3s ease;
    font-size: 0.95rem;
  }

  .post-card:hover .read-more {
    transform: translateX(8px);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .blog-header h1 {
      font-size: 2.4rem;
    }
    .posts-grid {
      grid-template-columns: 1fr;
    }
  }
</style>