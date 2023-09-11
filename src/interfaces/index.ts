export * from "./IContract";

export interface ITxData {
  to: `0x${string}`;
  data: string;
}

export interface IAuthContext {
  tbaAddress?: `0x${string}`;
  onSetTBA: (tbaAddress: `0x${string}`) => void;
  connectWallet: () => Promise<any>;
}
