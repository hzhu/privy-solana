"use client";

import { useConnectWallet, useSolanaWallets } from "@privy-io/react-auth";

export default function Home() {
  const { connectWallet } = useConnectWallet();
  const { wallets: solanaWallets } = useSolanaWallets();

  return (
    <div className="p-4">
      <button
        onClick={() => {
          connectWallet();
        }}
      >
        connect
      </button>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul>
          {solanaWallets.map((wallet) => (
            <li key={wallet.meta.id}>
              {wallet.meta.name} - {wallet.address}
              &nbsp;
              <button onClick={wallet.disconnect}>disconnect</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
