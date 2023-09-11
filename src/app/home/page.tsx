'use client'

import Image from 'next/image'
import Collaterized from '@/components/Collaterized'
import Unsecured from '@/components/Unsecured'
import FlatList from '@/components/FlatList'
import Header from '@/components/Header'
import ModalRWA from '@/components/ModalRWA'
import useModalStore from '@/stores/modal'
import ModalBorrow from '@/components/ModalBorrow'

export default function Home() {

  const { visibleRWA, visibleBorrow } = useModalStore()

  return (
    <main>
      <Header />
      <section className='custom-grid px-40 pt-4'>
        <div className='bg-white p-8 rounded-2xl h-[376px] flex flex-col justify-between border-2'>
          <div className='flex justify-between'>
            <div className='text-black/50 font-semibold text-lg'>
              Total WDREXtr <br /> (Wrapped tokenized real)
            </div>
            <div className='flex items-center'>
              <Image src={"/bitfinity.svg"} width={82} height={16} alt='bitfinity' />
              <div className='text-black/50 ml-4'>****3212</div>
            </div>
          </div>
          <div className='font-bold text-4xl mt-4'>92.321,32</div>
          <div className='flex items-center'>
            <Image src={"/bitfinity-icon.svg"} width={26} height={0} alt='bitfinity-icon' />
            <div className='ml-2 text-black/50 font-semibold my-3 text-lg'>Total Token/Crypto</div>
          </div>
          <div>
            <span className='text-4xl font-semibold'>842</span>
            <span className='text-lg ml-1'>BFT</span>
          </div>
          <div className='flex justify-between mt-10'>
            <button className='bg-orange font-bold text-white rounded-sm px-12'>Tokenize RWA</button>
            <button className='bg-white font-bold p-2 rounded-sm border-2 px-10'>Change Account</button>
          </div>
        </div>

        <div className='bg-white rounded-2xl custom-grid-2 p-8 h-[376px] border-2'>
          <div className='border-r-2 border-b-2 flex flex-col justify-between'>
            <div className='flex justify-between pr-4'>
              <div className='text-black/50 font-semibold text-lg'>Loan on time</div>
              <div>
                <Image src={"/income.svg"} width={34} height={34} alt='icome-icon' />
              </div>
            </div>
            <div className='font-semibold text-4xl pt-5'>R$5.000</div>
            <div>
              <span className='text-green-700 font-semibold text-lg'>12/07/12</span>
              <span className='text-black/50 text-lg ml-2'>Expiration</span>
            </div>
          </div>

          <div className='border-b-2 px-4 pb-3 flex flex-col justify-between'>
            <div className='text-black/50 font-semibold text-lg'>Credit Limit</div>
            <div className='pt-5'>
              <span className='font-semibold text-4xl'>R$5.000</span>
              <span className='text-black/50 text-lg ml-4'>Used from</span>
              <span className='text-black/50 text-lg font-bold ml-1'>R$10.000</span>
            </div>
            <div>
              <div className='bg-gray-200 rounded-full'>
                <div className='bg-green-700 p-2 rounded-full w-1/2'></div>
              </div>
            </div>
          </div>

          <div className='border-r-2 flex flex-col justify-between pt-4  '>
            <div className='flex justify-between pr-4'>
              <div className='text-black/50 font-semibold text-lg'>Late Loan</div>
              <div>
                <Image src={"/withdraw.svg"} width={34} height={34} alt='icome-icon' />
              </div>
            </div>
            <div className='font-semibold text-4xl'>R$2.821</div>
            <div>
              <span className='text-red-700 font-semibold'>12/07/12</span>
              <span className='text-black/50 text-lg ml-2'>Overdue invoice</span>

            </div>
          </div>

          <div className='flex flex-col justify-between pl-4 pt-4'>
            <div className='text-black/50 font-semibold text-lg'>APY rate</div>
            <div className='flex items-center justify-between'>
              <div>
                <span className='text-4xl font-semibold'>1,5 Mouth </span> <br />
                <span className='text-black/50 text-lg'>APY, fixed rate 12 - 18%</span>
              </div>
              <div>
                <button className='bg-white text-sm text-black/50 p-2 rounded-sm border-2'>
                  Calculate interest
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className='bg-white rounded-2xl p-8 flex flex-col h-[396px] border-2'>
          <div className='text-black/50 text-lg font-semibold'>Assets</div>
          <div className='border-2 rounded-2xl p-3'>
            <div className='flex items-center'>
              <div> <Image src={"/car.svg"} width={40} height={40} alt='car-icon' /> </div>
              <div className='flex flex-col ml-2'>
                <span className='font-semibold'>Toyota Corolla</span>
                <div>
                  <span className='text-black/50 text-sm'>Loan interest rate:</span>
                  <span className='text-black/50 font-semibold text-sm'> 1,5%</span>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between mt-8'>
              <div>
                <span className='font-normal text-xl'>R$</span>
                <span className='font-semibold text-2xl'>152.200,00</span>
              </div>
              <Collaterized />
            </div>
          </div>

          <div className='border-2 rounded-2xl p-3 mt-6'>
            <div className='flex items-center'>
              <div> <Image src={"/house.svg"} width={40} height={40} alt='car-icon' /> </div>
              <div className='flex flex-col ml-2'>
                <span className='font-semibold'>Apartamento no centro</span>
                <div>
                  <span className='text-black/50 text-sm'>Loan interest rate:</span>
                  <span className='text-black/50 font-semibold text-sm'> 1,0%</span>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between mt-8'>
              <div>
                <span className='font-normal text-xl'>R$</span>
                <span className='font-semibold text-2xl'>152.200,00</span>
              </div>
              <Unsecured />
            </div>
          </div>
        </div>

        <div className='bg-white rounded-2xl p-8 h-[396px] border-2'>
          <div className='font-semibold text-lg text-black/50 mb-5'>Historic</div>
          <div className='flex items-center justify-between'>
            <div className='text-black/50 text-lg'>Name</div>
            <div className='text-black/50 text-lg'>Ammount</div>
            <div className='text-black/50 text-lg'>Typer</div>
            <div className='text-black/50 text-lg'>Date</div>
            <div className='text-black/50 text-lg'>Status</div>
            <div className='text-black/50 text-lg'>Contract</div>
          </div>
          <div>
            <FlatList />
          </div>
        </div>
      </section>
      <ModalRWA visible={visibleRWA} />
      <ModalBorrow visible={visibleBorrow} />
    </main >
  )
}
