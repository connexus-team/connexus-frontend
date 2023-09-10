export interface ITokenizeCarPayload {
  tbaAddress: string;
  numberChassi: number;
  doclink: string;
}

export interface ITokenizeRealStatePayload extends ITokenizeCarPayload {
  fraction: number;
}
