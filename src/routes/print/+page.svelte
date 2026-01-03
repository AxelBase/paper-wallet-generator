<script>
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { generateQR } from '$lib/walletLogic';
  import { base } from '$app/paths';

  let walletData = { mnemonic: '', privateKey: '', address: '' };
  let addressQR = '';
  let privateKeyQR = '';
  let loadError = '';

  onMount(async () => {
    try {
      if (!browser) return;
      const params = new URLSearchParams(window.location.search);
      const encodedData = params.get('data');

      if (!encodedData) throw new Error('No wallet data in URL');

      const decoded = decodeURIComponent(encodedData);
      const data = JSON.parse(atob(decoded));

      walletData = data;
      addressQR = await generateQR(data.address);
      privateKeyQR = await generateQR(data.privateKey);

      if (!addressQR || !privateKeyQR) throw new Error('QR generation failed');
    } catch (err) {
      console.error('[ERROR] print page load failed:', err);
      loadError = 'Invalid or corrupted wallet data.';
    }
  });

  function printPage() {
    window.print();
  }
</script>

<div class="container py-5 no-print" in:fade>
  {#if loadError}
    <div class="glass glass-card p-5 text-center">
        <i class="bi bi-x-circle text-danger display-1 mb-4"></i>
        <h2 class="fw-bold">{loadError}</h2>
        <a href="{base}/generator" class="btn btn-primary mt-3">Go Back</a>
    </div>
  {:else}
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
        <div>
            <h2 class="fw-bold mb-0">Print Your Wallet</h2>
            <p class="text-muted">Safe, offline, and ready for storage.</p>
        </div>
        <button class="btn btn-primary btn-lg px-5 shadow-lg" on:click={printPage}>
            <i class="bi bi-printer-fill me-2"></i> Print Paper Wallet
        </button>
    </div>
    
    <div class="alert glass rounded-4 border-0 p-3 mb-5 d-flex align-items-center">
        <i class="bi bi-shield-fill-check fs-3 text-success me-3"></i>
        <span class="small">After printing, fold along the <strong>dashed line</strong> to keep your private key physically hidden.</span>
    </div>
  {/if}
</div>

{#if !loadError}
  <div class="printable-wrapper">
    <div class="paper-wallet-part">
      <div class="section-label">PUBLIC ADDRESS (SHARE THIS)</div>
      <div class="p-3 text-center">
        {#if addressQR}
          <img src={addressQR} alt="Address QR" class="qr-code" />
        {/if}
        <div class="address-box mt-2">
            <code class="text-break">{walletData.address}</code>
        </div>
      </div>
    </div>

    <div class="fold-line">
        <span><i class="bi bi-scissors me-2"></i> FOLD HERE <i class="bi bi-scissors ms-2"></i></span>
    </div>

    <div class="paper-wallet-part">
      <div class="section-label private-label">PRIVATE KEY (KEEP SECRET)</div>
      <div class="p-3 text-center">
        {#if privateKeyQR}
          <img src={privateKeyQR} alt="Private Key QR" class="qr-code" />
        {/if}
        <div class="address-box key-text mt-2">
            <code class="text-break">{walletData.privateKey}</code>
        </div>
        <div class="mnemonic-area mt-3 text-start">
            <small class="fw-bold text-muted d-block mb-1">Backup Mnemonic Words:</small>
            <p class="mb-0 mnemonic-text">{walletData.mnemonic}</p>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Screen Styling */
  .printable-wrapper {
    max-width: 600px;
    margin: 0 auto 50px auto;
    background: white;
    padding: 20px;
    border-radius: 24px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .paper-wallet-part {
    background: white;
    border: 2px solid #2d3436;
    border-radius: 15px;
    overflow: hidden;
  }

  .section-label {
    background: #2d3436;
    color: white;
    font-weight: 700;
    font-size: 0.7rem;
    padding: 6px;
    text-align: center;
    letter-spacing: 1px;
  }

  .private-label { background: #d63031; }

  .qr-code {
    width: 160px;
    height: 160px;
    object-fit: contain;
  }

  .address-box {
    background: #f8f9fa;
    padding: 10px;
    border-radius: 8px;
    font-size: 0.85rem;
    border: 1px solid #eee;
  }

  .key-text code { color: #d63031; font-weight: bold; }

  .fold-line {
    border-top: 2px dashed #b2bec3;
    margin: 25px 0;
    text-align: center;
    position: relative;
  }

  .fold-line span {
    position: absolute;
    top: -11px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 0 10px;
    font-size: 0.65rem;
    font-weight: bold;
    color: #636e72;
  }

  .mnemonic-text {
    font-size: 0.7rem;
    line-height: 1.3;
    color: #444;
  }

  /* Print Logic - The Blank Page Fix */
  @media print {
    @page {
      size: portrait;
      margin: 0; /* Remove default browser margins */
    }

    /* Force background to be white and remove ghost heights */
    :global(html), :global(body) { 
        height: 100%;
        background: white !important; 
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important; /* Prevents scrolling/second page */
    }

    /* Remove everything except the wallet */
    :global(body::before), 
    :global(body::after), 
    :global(header), 
    :global(footer), 
    .no-print {
      display: none !important;
      height: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .printable-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: none;
      margin: 10mm auto !important; /* Centers within the print area */
      padding: 0;
      max-width: 100%;
      width: 180mm; /* Fixed width for standard paper */
      left: 15mm; /* Centering offset */
    }

    .paper-wallet-part {
      page-break-inside: avoid;
      break-inside: avoid;
      border: 1px solid #000;
    }

    .fold-line {
        margin: 20px 0;
    }

    .qr-code {
      width: 170px; 
      height: 170px;
    }
  }
</style>