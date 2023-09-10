import {
  BigNumber,
  Contract,
  ContractTransaction,
  ethers,
  Overrides,
  Signer,
} from "ethers";
import { Management, Management__factory } from "../contracts";

const GASLIMIT_DEFAULT = "500000";

export async function calculateGasLimit(
  contract: Contract,
  functionName: string,
  params: any[]
): Promise<BigNumber> {
  try {
    const estimateGas = await contract.estimateGas[functionName](...params);
    return estimateGas;
  } catch (error) {
    return ethers.BigNumber.from(GASLIMIT_DEFAULT);
  }
}

type CreateConnexusCardParams = {
  to: string;
  overrides?: Overrides & { from?: string };
};

export class CrowdFundWriteContract {
  private contract: Management;
  private signer: Signer;

  constructor(
    contractAddress: string,
    provider: ethers.providers.Provider,
    signer: Signer
  ) {
    const factory = new Management__factory(signer);
    this.contract = factory.attach(contractAddress);
    this.signer = signer;
  }

  public async createConnexusCard(
    params: CreateConnexusCardParams
  ): Promise<any> {
    try {
      const { to, overrides } = params;
      const gasLimitCalculated = await calculateGasLimit(
        this.contract,
        "createConnexusCard",
        [to]
      );
      const overridesWithGasLimit = {
        ...overrides,
        gasLimit: gasLimitCalculated,
      };
      const transaction = await this.contract.createConnexusCard(
        to,
        overridesWithGasLimit
      );
      console.log(transaction);
      return transaction;
    } catch (error) {
      throw new Error(
        `Error executing createConnexusCard() of contract: ${error}`
      );
    }
  }
}
