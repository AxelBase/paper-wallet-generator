<script>
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { fade, fly, slide } from 'svelte/transition';
  import { generateMnemonic, generateRandomKeyPair } from '$lib/walletLogic';

  let passphrase = '';
  let generating = false;
  let errorMessage = '';

  async function generateWallet() {
    try {
      generating = true;
      errorMessage = '';
      console.log('[DEBUG] generateWallet started');

      const mnemonic = generateMnemonic(passphrase);
      const { privateKey, address } = await generateRandomKeyPair();

      const data = { mnemonic, privateKey, address };
      console.log('[DEBUG] Wallet data prepared:', { address, hasPrivateKey: !!privateKey });

      const encodedData = btoa(JSON.stringify(data));
      const url = `${base}/print?data=${encodeURIComponent(encodedData)}`;
      console.log('[DEBUG] Navigating to:', url);

      await goto(url);
    } catch (err) {
      console.error('[ERROR] generateWallet crashed:', err);
      errorMessage = 'Failed to generate wallet. Check console for details.';
    } finally {
      generating = false;
    }
  }
</script>

<div class="container py-5 mt-4" in:fade={{ duration: 600 }}>
  <div class="row justify-content-center">
    <div class="col-xl-6 col-lg-7 col-md-10">
      <div class="glass glass-card p-4 p-md-5 text-center" in:fly={{ y: 30, duration: 800 }}>
        <div class="mb-4">
          <div class="icon-bubble mx-auto mb-3">
            <i class="bi bi-shield-lock-fill fs-2 text-primary"></i>
          </div>
          <h2 class="fw-bold mb-2">Secure Wallet Creator</h2>
          <p class="text-muted small">Generate a cold-storage paper wallet locally.</p>
        </div>

        {#if errorMessage}
          <div class="alert alert-danger border-0 rounded-4 shadow-sm" in:slide>
            <i class="bi bi-exclamation-triangle-fill me-2"></i>{errorMessage}
          </div>
        {/if}

        <div class="alert glass border-0 rounded-4 text-start mb-4 small">
           <i class="bi bi-info-circle-fill me-2 text-primary"></i>
           Enter an optional passphrase for additional entropy. This will be converted into your mnemonic backup.
        </div>

        <form on:submit|preventDefault={generateWallet} class="text-start">
          <div class="mb-4">
            <label for="passphrase" class="form-label fw-bold ps-2">Optional Passphrase</label>
            <input 
              type="text" 
              class="form-control form-control-lg rounded-pill px-4" 
              id="passphrase" 
              bind:value={passphrase}
              placeholder="Leave empty for maximum randomness"
              autocomplete="off" 
            />
          </div>

          <button 
            type="submit" 
            class="btn btn-primary w-100 btn-lg py-3 shadow-lg d-flex align-items-center justify-content-center gap-2" 
            disabled={generating}
          >
            {#if generating}
              <span class="spinner-border spinner-border-sm" role="status"></span>
              <span>Encrypting...</span>
            {:else}
              <i class="bi bi-qr-code-scan"></i>
              <span>Generate and Print Wallet</span>
            {/if}
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

<style>
  .icon-bubble {
    width: 70px;
    height: 70px;
    background: var(--blob-color-1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input.form-control {
    background: var(--input-bg) !important;
    border: 1px solid var(--glass-border) !important;
    color: var(--color-text-main) !important;
    transition: all 0.3s ease;
  }

  input.form-control:focus {
    transform: scale(1.01);
    box-shadow: 0 0 0 0.25rem rgba(0, 184, 148, 0.15) !important;
  }
</style>