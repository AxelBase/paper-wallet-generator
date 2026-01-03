<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { slide, fade } from 'svelte/transition';
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
        <button class="btn btn-coffee rounded-pill d-flex align-items-center gap-2" on:click={toggleDropdown}>
          <i class="bi bi-cup-hot-fill"></i>
          <span class="d-none d-md-inline">Support</span>
        </button>

        {#if isDropdownOpen}
          <div class="dropdown-menu-custom glass" transition:slide>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$3</span> <span>One Coffee</span>
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$5</span> <span>Two Coffees</span>
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$10</span> <span>Three Coffees</span>
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
              Custom Amount
            </a>
            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              on:click={closeDropdown}
              class="crypto-link"
            >
              <i class="bi bi-currency-bitcoin"></i> Buy via Crypto
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
    <span>&copy; {new Date().getFullYear()} AxelBase Markdown to HTML Converter</span>
    <div class="d-flex gap-4 mt-2 mt-sm-0">
      <a href="{base}/privacy" class="footer-link">Privacy</a>
      <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
  .logo-group:hover .logo-img { transform: rotate(15deg) scale(1.2); }
  
  .nav-link-custom {
    padding: 0.5rem 1rem;
    color: var(--color-text-muted);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s, transform 0.3s;
    display: inline-block;
  }
  .nav-link-custom:hover { color: var(--color-accent); transform: translateY(-2px); }

  .btn-coffee {
    background: #ffdd00;
    color: #000;
    border: none;
    font-weight: 700;
    font-size: 0.85rem;
    box-shadow: 0 4px 15px rgba(255, 221, 0, 0.2);
  }
  .btn-coffee:hover { transform: translateY(-2px) scale(1.05); background: #ffe44d; }

  .dropdown-menu-custom {
    position: absolute;
    top: 120%;
    left: 0;
    min-width: 220px;
    padding: 0.6rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    z-index: 1050;
  }

  .dropdown-menu-custom a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: var(--color-text-main);
    padding: 10px 14px;
    border-radius: 12px;
    font-size: 0.9rem;
    transition: all 0.2s ease;
  }

  .dropdown-menu-custom a:hover { 
    background: var(--color-accent); 
    color: white; 
    transform: translateX(4px);
  }

  .amount {
    font-weight: 800;
    color: var(--color-accent);
  }
  .dropdown-menu-custom a:hover .amount {
    color: white;
  }

  .custom-amount {
    border-top: 1px solid var(--glass-border);
    margin-top: 4px;
    padding-top: 12px !important;
    font-weight: 600;
    justify-content: center !important;
  }

  .crypto-link {
    justify-content: center !important;
    font-weight: 600;
    background: rgba(247, 147, 26, 0.1);
    color: #f7931a !important;
  }

  .crypto-link:hover {
    background: #f7931a !important;
    color: white !important;
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
  .btn-theme-toggle:hover { transform: rotate(20deg) scale(1.1); background: var(--color-accent); color: white; }

  .footer-link { color: var(--color-text-muted); text-decoration: none; }
  .footer-link:hover { color: var(--color-accent); }
</style>