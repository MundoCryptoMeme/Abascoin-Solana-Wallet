async function generateWallet() {
  const bip39 = await import('bip39');
  const { Keypair } = await import('@solana/web3.js');
  const { derivePath } = await import('ed25519-hd-key');
  const bs58 = await import('bs58');

  const mnemonic = bip39.default.generateMnemonic();
  const seed = bip39.default.mnemonicToSeedSync(mnemonic).slice(0, 32);
  const keypair = Keypair.fromSeed(derivePath("m/44'/501'/0'/0'", seed).key);

  document.getElementById('mnemonic').textContent = mnemonic;
  document.getElementById('publicKey').textContent = keypair.publicKey.toString();
  document.getElementById('privateKey').textContent = bs58.default.encode(keypair.secretKey);
  document.getElementById('wallet-info').classList.add('show');
}
