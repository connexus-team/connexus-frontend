"use client"

import useModalStore from "@/stores/modal"
import Image from "next/image";

type ModalTranferProps = {
    visible: boolean;
}

export default function ModalTranfer({ visible }: ModalTranferProps) {

    const { toggleVisibleTranfer } = useModalStore()

    if (visible) {
        return (
            <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/70 z-10">
                <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 bg-white rounded-2xl">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-2xl">Tranfer asset</span>
                        <button onClick={toggleVisibleTranfer}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <form action="">
                        <div className='flex items-center justify-between gap-3'>
                            <div>
                                <div className=' mb-3'>Choose your asset</div>
                                <div className="flex items-center gap-3">
                                    <Image className='' src={'/car.svg'} width={30} height={0} alt='car-icon' />
                                    <input type="radio" />
                                    <Image className='' src={'/house.svg'} width={30} height={0} alt='house-icon' />
                                    <input type="radio" />
                                </div>
                            </div>
                            <div>
                                <div className='my-2 text-black/50'>RWA IP</div>
                                <input className='p-2 bg-dropDown border-2 w-72' type="text" />
                            </div>
                        </div>

                        <div className='my-2 text-black/50'>Value</div>
                        <input className='p-2 bg-dropDown border-2 w-72' type="text" />

                        <div className='my-2 text-black/50'>Select asset</div>
                        <div className="flex gap-3">
                            <div className="flex items-center">
                                <Image src={'/brazil.svg'} width={24} height={0} alt="brazil-icon" />
                                <span className="font-semibold mx-2">WDREXtr</span>
                                <input type="radio" />
                            </div>
                            <div className="flex items-center">
                                <Image src={'/usd.svg'} width={24} height={0} alt="usd-icon" />
                                <span className="font-semibold mx-2">USD</span>
                                <input type="radio" />
                            </div>
                            <div className="flex items-center">
                                <Image src={'/eth-icon.svg'} width={24} height={0} alt="eth-icon" />
                                <span className="font-semibold mx-2">ETH</span>
                                <input type="radio" />
                            </div>
                        </div>

                        <div className="flex gap-3 mt-3">
                            <div className="flex items-center">
                                <Image src={'/Latoken-icon.svg'} width={24} height={0} alt="Latoken-icon" />
                                <span className="font-semibold mx-2">LAC</span>
                                <input type="radio" />
                            </div>
                            <div className="flex items-center">
                                <Image src={'/bitfinity-icon.svg'} width={24} height={0} alt="bitfinity-icon" />
                                <span className="font-semibold mx-2">BFT</span>
                                <input type="radio" />
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div>
                                <div className='my-2 text-black/50'>Address</div>
                                <input className='p-2 bg-dropDown border-2 w-72' type="text" />
                            </div>
                            <div>
                                <div className='my-2 text-black/50'>Address cardTBA</div>
                                <input className='p-2 bg-dropDown border-2 w-72' type="text" />
                            </div>
                        </div>

                        <div className='my-2 text-black/50'>ID</div>
                        <input className='p-2 bg-dropDown border-2 w-72' type="text" />

                        <div className='flex justify-end mt-2 gap-3'>
                            <button className='border-2 p-2 text-black/50' onClick={toggleVisibleTranfer}>Cancel</button>
                            <button className='bg-lightGray p-2 text-gray-300'>Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}