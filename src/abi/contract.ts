
import { BigNumber, Contract, ethers, Overrides, Signer } from 'ethers';
import {Management, Management__factory} from "../contracts";

const GASLIMIT_DEFAULT = '500000';

export async function calculateGasLimit(contract: Contract, functionName: string, params: any[]): Promise<BigNumber> {
  try {
    const estimateGas = await contract.estimateGas[functionName](...params);
    return estimateGas;
  } catch (error) {
  return ethers.BigNumber.from(GASLIMIT_DEFAULT);
  }
}

type CreateConnexusCardParams = {
  to: `0x${string}`,
  overrides?: Overrides & { from?: string };
}

export class ManagmentContract {
  private contract: Management;
  private signer: Signer;


  constructor(contractAddress: string, provider: ethers.providers.Provider, signer: Signer) {
    const factory = new Management__factory(signer);
    this.contract = factory.attach(contractAddress);
    this.signer = signer;
  }

  public async createConnexusCard(params: CreateConnexusCardParams): Promise<string | undefined>{
    try {
      const { 
        to,
        overrides
      } = params;

      
      const gasLimitCalculated = await calculateGasLimit(this.contract, 'createConnexusCard', [
        to,
      ]);

      const overridesWithGasLimit = {
        ...overrides,
        gasLimit: gasLimitCalculated,
      };

      const transaction = await this.contract.createConnexusCard(
        to,
        overridesWithGasLimit
      );

      const receipt = await transaction.wait();

      const userAddress = receipt.events?.map((event: any) => {
        if (event.event === 'tbaAddr') {
          return event.args[0];
        }
      });

      return userAddress;
    } catch (error) {
      throw new Error(`Error executing createConnexusCard() of contract: ${error}`);
    }
  }
}