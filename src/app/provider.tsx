"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";

const solanaConnectors = toSolanaWalletConnectors({
  // By default, shouldAutoConnect is enabled
  shouldAutoConnect: true,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId="cm1k78nl101dtqj2bcs76kzab" // test app id
      config={{
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://your-logo-url",
          walletChainType: "solana-only",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
        externalWallets: { solana: { connectors: solanaConnectors } },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
