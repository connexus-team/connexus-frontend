"use client";
import Image from "next/image";
import Collaterized from "@/components/Collaterized";
import Unsecured from "@/components/Unsecured";
import FlatList from "@/components/FlatList";
import Header from "@/components/Header";
import ModalRWA from "@/components/ModalRWA";
import useModalStore from "@/stores/modal";
import ModalBorrow from "@/components/ModalBorrow";
import { useContractCardTBA } from "@/hooks";

export default function Home() {
  const { visibleRWA, visibleBorrow } = useModalStore();
  const { toggleVisibleRWA } = useModalStore();
  const { onExecute } = useContractCardTBA();

  return (
    <main>
      <Header />
      <section className="custom-grid px-40 pt-4">
        <div className="flex h-[376px] flex-col justify-between rounded-2xl border-2 bg-white p-8">
          <div className="flex justify-between">
            <div className="text-lg font-semibold text-black/50">
              Total WDREXtr <br /> (Wrapped tokenized real)
            </div>
            <div className="flex items-center">
              <Image
                src={"/bitfinity.svg"}
                width={82}
                height={16}
                alt="bitfinity"
              />
              <div className="ml-4 text-black/50">****3212</div>
            </div>
          </div>
          <div className="mt-4 text-4xl font-bold">92.321,32</div>
          <div className="flex items-center">
            <Image
              src={"/bitfinity-icon.svg"}
              width={26}
              height={0}
              alt="bitfinity-icon"
            />
            <div className="my-3 ml-2 text-lg font-semibold text-black/50">
              Total Token/Crypto
            </div>
          </div>
          <div>
            <span className="text-4xl font-semibold">842</span>
            <span className="ml-1 text-lg">BFT</span>
          </div>
          <div className="mt-10 flex justify-between">
            <button
              onClick={toggleVisibleRWA}
              className="rounded-sm bg-orange px-12 font-bold text-white"
            >
              Tokenize RWA
            </button>
            <button
              onClick={undefined}
              className="rounded-sm border-2 bg-white p-2 px-10 font-bold"
            >
              Change Account
            </button>
          </div>
        </div>

        <div className="custom-grid-2 h-[376px] rounded-2xl border-2 bg-white p-8">
          <div className="flex flex-col justify-between border-b-2 border-r-2">
            <div className="flex justify-between pr-4">
              <div className="text-lg font-semibold text-black/50">
                Loan on time
              </div>
              <div>
                <Image
                  src={"/income.svg"}
                  width={34}
                  height={34}
                  alt="icome-icon"
                />
              </div>
            </div>
            <div className="pt-5 text-4xl font-semibold">R$5.000</div>
            <div>
              <span className="text-lg font-semibold text-green-700">
                12/07/12
              </span>
              <span className="ml-2 text-lg text-black/50">Expiration</span>
            </div>
          </div>

          <div className="flex flex-col justify-between border-b-2 px-4 pb-3">
            <div className="text-lg font-semibold text-black/50">
              Credit Limit
            </div>
            <div className="pt-5">
              <span className="text-4xl font-semibold">R$5.000</span>
              <span className="ml-4 text-lg text-black/50">Used from</span>
              <span className="ml-1 text-lg font-bold text-black/50">
                R$10.000
              </span>
            </div>
            <div>
              <div className="rounded-full bg-gray-200">
                <div className="w-1/2 rounded-full bg-green-700 p-2"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between border-r-2 pt-4  ">
            <div className="flex justify-between pr-4">
              <div className="text-lg font-semibold text-black/50">
                Late Loan
              </div>
              <div>
                <Image
                  src={"/withdraw.svg"}
                  width={34}
                  height={34}
                  alt="icome-icon"
                />
              </div>
            </div>
            <div className="text-4xl font-semibold">R$2.821</div>
            <div>
              <span className="font-semibold text-red-700">12/07/12</span>
              <span className="ml-2 text-lg text-black/50">
                Overdue invoice
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between pl-4 pt-4">
            <div className="text-lg font-semibold text-black/50">APY rate</div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-4xl font-semibold">1,5 Mouth </span>{" "}
                <br />
                <span className="text-lg text-black/50">
                  APY, fixed rate 12 - 18%
                </span>
              </div>
              <div>
                <button className="rounded-sm border-2 bg-white p-2 text-sm text-black/50">
                  Calculate interest
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-[396px] flex-col rounded-2xl border-2 bg-white p-8">
          <div className="text-lg font-semibold text-black/50">Assets</div>
          <div className="rounded-2xl border-2 p-3">
            <div className="flex items-center">
              <div>
                {" "}
                <Image
                  src={"/car.svg"}
                  width={40}
                  height={40}
                  alt="car-icon"
                />{" "}
              </div>
              <div className="ml-2 flex flex-col">
                <span className="font-semibold">Toyota Corolla</span>
                <div>
                  <span className="text-sm text-black/50">
                    Loan interest rate:
                  </span>
                  <span className="text-sm font-semibold text-black/50">
                    {" "}
                    1,5%
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <span className="text-xl font-normal">R$</span>
                <span className="text-2xl font-semibold">152.200,00</span>
              </div>
              <Collaterized />
            </div>
          </div>

          <div className="mt-6 rounded-2xl border-2 p-3">
            <div className="flex items-center">
              <div>
                {" "}
                <Image
                  src={"/house.svg"}
                  width={40}
                  height={40}
                  alt="car-icon"
                />{" "}
              </div>
              <div className="ml-2 flex flex-col">
                <span className="font-semibold">Apartamento no centro</span>
                <div>
                  <span className="text-sm text-black/50">
                    Loan interest rate:
                  </span>
                  <span className="text-sm font-semibold text-black/50">
                    {" "}
                    1,0%
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <span className="text-xl font-normal">R$</span>
                <span className="text-2xl font-semibold">152.200,00</span>
              </div>
              <Unsecured />
            </div>
          </div>
        </div>

        <div className="h-[396px] rounded-2xl border-2 bg-white p-8">
          <div className="mb-5 text-lg font-semibold text-black/50">
            Historic
          </div>
          <div className="flex items-center justify-between">
            <div className="text-lg text-black/50">Name</div>
            <div className="text-lg text-black/50">Ammount</div>
            <div className="text-lg text-black/50">Typer</div>
            <div className="text-lg text-black/50">Date</div>
            <div className="text-lg text-black/50">Status</div>
            <div className="text-lg text-black/50">Contract</div>
          </div>
          <div>
            <FlatList />
          </div>
        </div>
      </section>
      <ModalRWA visible={visibleRWA} />
      <ModalBorrow visible={visibleBorrow} />
    </main>
  );
}
