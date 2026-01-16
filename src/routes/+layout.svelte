<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { slide, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let isDropdownOpen = false;
  let isDarkMode = false;

  function toggleDropdown() { isDropdownOpen = !isDropdownOpen; }
  function closeDropdown() { isDropdownOpen = false; }

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.dataset.bsTheme = isDarkMode ? 'dark' : 'light';
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
  }
</script>

<header class="fixed-top p-3 w-100" style="z-index: 1040;">
  <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-sm" style="max-width: 1200px;">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 logo-group text-decoration-none">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" style="height: 32px; transition: transform 0.3s;" class="logo-img" />
        <span class="fw-bold fs-5" style="color: var(--color-text-main);">AxelBase</span>
      </a>

      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-4 py-2 rounded-pill shadow-sm"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <i class="bi bi-cup-hot-fill"></i>
          <span class="d-none d-md-inline fw-semibold">Buy me a Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div 
            class="bmac-dropdown glass mt-2" 
            transition:fly={{ y: -10, duration: 250 }}
          >
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$3</span> One Coffee
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$5</span> Two Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$10</span> Three Coffees
            </a>

            <a 
              href="https://buymeacoffee.com/axelbase" 
              target="_blank" 
              rel="noopener" 
              on:click={closeDropdown} 
              class="custom-amount"
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              on:click={closeDropdown}
              class="custom-amount crypto-link"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <div class="d-flex align-items-center gap-2">
      <ul class="nav d-none d-lg-flex align-items-center gap-1 m-0">
        <li><a class="nav-link-custom" href="{base}/">Home</a></li>
        <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
        <li><a class="nav-link-custom" href="{base}/#how-to-use">How to Use</a></li>
        <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
        <li class="ms-2"><a class="btn btn-primary btn-sm rounded-pill px-3" href="{base}/blog">Blog</a></li>
      </ul>

      <div class="vr mx-2 d-none d-lg-block"></div>

      <button class="btn-theme-toggle" on:click={toggleTheme} aria-label="Toggle Dark Mode">
        <i class="bi bi-{isDarkMode ? 'sun-fill' : 'moon-stars-fill'}"></i>
      </button>
    </div>
  </nav>
</header>

<main class="pt-5 mt-5">
  <slot />
</main>

<footer class="glass border-top py-4 mt-5">
  <div class="container d-flex flex-column flex-sm-row justify-content-between align-items-center small text-muted">
    <span>© {new Date().getFullYear()} AxelBase Markdown to HTML Converter</span>
    <div class="d-flex gap-4 mt-2 mt-sm-0">
      <a href="{base}/privacy" class="footer-link">Privacy</a>
      <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* ── Buy Me a Coffee Button (inspired by File 1 but adapted) ── */
  .bmac-button {
    background: var(--color-accent);
    font-size: 0.92rem;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 184, 148, 0.25);
  }

  .bmac-button:hover {
    background: color-mix(in srgb, var(--color-accent) 85%, black);
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 8px 25px rgba(0, 184, 148, 0.35);
  }

  /* ── Dropdown (blend of both files) ── */
  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    border-radius: 16px;
    overflow: hidden;
    z-index: 1050;
    padding: 0.4rem 0;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 18px;
    color: var(--color-text-main);
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.22s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--color-accent);
    color: white;
    padding-left: 24px;
  }

  .bmac-dropdown .amount {
    font-weight: 800;
    color: var(--color-accent);
    font-size: 1.1rem;
    min-width: 48px;
  }

  .bmac-dropdown a:hover .amount {
    color: white;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--color-accent);
    border-top: 1px solid var(--glass-border);
    margin-top: 6px;
    padding-top: 14px !important;
    justify-content: center !important;
  }

  /* Crypto link specific style */
  .crypto-link {
    color: #f7931a !important;
    background: rgba(247, 147, 26, 0.08);
  }

  .crypto-link:hover {
    background: #f7931a !important;
    color: white !important;
  }

  /* Existing styles (kept + small adjustments) */
  .logo-group:hover .logo-img { transform: rotate(15deg) scale(1.2); }

  .nav-link-custom {
    padding: 0.5rem 1rem;
    color: var(--color-text-muted);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s, transform 0.3s;
    display: inline-block;
  }

  .nav-link-custom:hover { 
    color: var(--color-accent); 
    transform: translateY(-2px); 
  }

  .btn-theme-toggle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
    color: var(--color-text-main);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .btn-theme-toggle:hover { 
    transform: rotate(20deg) scale(1.1); 
    background: var(--color-accent); 
    color: white; 
  }

  .footer-link { color: var(--color-text-muted); text-decoration: none; }
  .footer-link:hover { color: var(--color-accent); }
</style>