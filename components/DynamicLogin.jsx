'use client'
import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";

const DynamicLogin = () => (
  <>
    <DynamicContextProvider
      settings={{
        environmentId: "0a114d7d-bc27-42fb-a795-3560b92d2a89",
        walletConnectors: [
          EthereumWalletConnectors,
          ZeroDevSmartWalletConnectors
        ],
      }}
    >
      <DynamicWidget />
    </DynamicContextProvider>
  </>
)

export default DynamicLogin;
