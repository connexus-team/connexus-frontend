"use client"

import useModalStore from "@/stores/modal"
import Image from "next/image";
import Dropdown from "../Dropdown";

type ModalProps = {
    visible: boolean;
}

export default function ModalBorrow({ visible }: ModalProps) {

    const { toggleVisibleBorrow } = useModalStore()

    if (visible) {
        return (
            <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/70 z-10">
                <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 bg-white rounded-2xl">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-2xl">Borrow</span>
                        <button onClick={toggleVisibleBorrow}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className='text-lg my-2'>Choose your asset</div>
                    <form action="">
                        <div className='flex items-center gap-3'>
                            <Image className='' src={'/car.svg'} width={30} height={0} alt='car-icon' />
                            <input type="radio" />
                            <Image className='' src={'/house.svg'} width={30} height={0} alt='house-icon' />
                            <input type="radio" />
                        </div>
                        <div className='my-2 text-black/50'>Borrow Value</div>
                        <div className="flex items-center gap-3">
                            <span className="text-black/50 font-semibold">U$ 1.000</span>
                            <input type="radio" />
                            <span className="text-black/50 font-semibold">U$ 5.000</span>
                            <input type="radio" />
                            <span className="text-black/50 font-semibold">U$ 10.000</span>
                            <input type="radio" />
                        </div>

                        <div className="flex gap-5">
                            <div>
                                <div className='my-2 text-black/50'>ID</div>
                                <input className='p-2 bg-dropDown border-2 w-72' type="text" />
                            </div>
                            <div>
                                <div className='my-2 text-black/50'>Address cardTBA</div>
                                <input className='p-2 bg-dropDown border-2 w-72' type="text" />
                            </div>
                        </div>

                        <div className="font-semibold text-xl my-5">Specifications</div>
                        <div className="text-black/50 mb-1">Select Network</div>
                        <Dropdown />

                        <div className="text-black/50 mt-5">Select asset</div>
                        <div className="flex gap-3 mt-4">
                            <div className="flex items-center">
                                <Image src={'/brazil.svg'} width={25} height={0} alt="brazil-icon" />
                                <span className="font-semibold mx-2">WDREXtr</span>
                                <input type="radio" />
                            </div>
                            <div className="flex items-center">
                                <Image src={'/usd.svg'} width={25} height={0} alt="usd-icon" />
                                <span className="font-semibold mx-2">USD</span>
                                <input type="radio" />
                            </div>
                        </div>
                        <div className='flex justify-end mt-2 gap-3'>
                            <button className='border-2 p-2 text-black/50' onClick={toggleVisibleBorrow}>Cancel</button>
                            <button className='bg-lightGray p-2 text-gray-300'>Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}