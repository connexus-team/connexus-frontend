"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export function Header() {
  const { address } = useAccount();
  const firstFour = address?.substring(0, 4);
  const lastFour = address?.slice(-4);
  const result = `${firstFour}...${lastFour}`;

  return (
    <div className="flex items-center justify-between">
      <div>
        <ConnectButton.Custom>
          {({ openConnectModal }) => {
            return (
              <div>
                <button
                  className="border-[#CCFF00] px-8"
                  onClick={openConnectModal}
                  disabled={!!address}
                >
                  {address ? result : "Connect Wallet"}
                </button>
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </div>
  );
}
