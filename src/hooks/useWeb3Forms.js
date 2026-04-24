/**
 * useWeb3Forms — sends form data to Web3Forms and returns {loading, error, submit}.
 *
 * Setup:
 *   1. Go to https://web3forms.com, enter contact@evo.ma, copy your access key
 *   2. Add VITE_WEB3FORMS_KEY=your_key to .env
 *
 * Usage:
 *   const { loading, error, submit } = useWeb3Forms()
 *   await submit({ name, email, message, ... })  → returns true on success
 */
export function useWeb3Forms() {
  const send = async (data) => {
    const key = import.meta.env.VITE_WEB3FORMS_KEY

    if (!key) {
      console.warn('[Web3Forms] VITE_WEB3FORMS_KEY is not set in .env')
      // In dev without a key, simulate success so the UI can be tested
      if (import.meta.env.DEV) return true
      throw new Error('Missing Web3Forms access key')
    }

    const res = await fetch('https://api.web3forms.com/submit', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key:    key,
        from_name:     'EVO.MA Website',
        // Disable the default Web3Forms confirmation email to the sender
        // (we handle messaging in the UI instead)
        botcheck:      false,
        ...data,
      }),
    })

    const json = await res.json()

    if (!res.ok || json.success === false) {
      throw new Error(json.message || 'Web3Forms submission failed')
    }

    return true
  }

  return { submit: send }
}
