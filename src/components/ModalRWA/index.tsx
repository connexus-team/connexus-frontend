"use client"

import useModalStore from "@/stores/modal"
import Image from "next/image";

type ModalProps = {
    visible: boolean;
}

export default function ModalRWA({ visible }: ModalProps) {

    const { toggleVisibleRWA } = useModalStore()

    if (visible) {
        return (
            <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/70 z-10">
                <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 bg-white rounded-2xl">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-2xl">Tokenize your asset</span>
                        <button onClick={toggleVisibleRWA}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className='text-lg my-2'>Choose the RWA</div>
                    <form action="">
                        <div className='flex items-center gap-3'>
                            <Image className='' src={'/car.svg'} width={30} height={0} alt='car-icon' />
                            <input type="radio" />
                            <Image className='' src={'/house.svg'} width={30} height={0} alt='house-icon' />
                            <input type="radio" />
                        </div>
                        <div className='my-2 text-black/50'>Asset Value</div>
                        <input className='p-2 bg-dropDown border-2 w-72' type="text" />
                        <div className='my-4 font-semibold text-lg'>Asset Information</div>

                        <div className='flex justify-between gap-5'>
                            <div>
                                <div className='my-2 text-black/50'>Car model Brand</div>
                                <input className='p-2 bg-dropDown border-2 w-72' type="text" />
                                <div className='my-2 text-black/50'>Mileage</div>
                                <input className='p-2 bg-dropDown border-2 w-72' type="text" />
                                <div className='my-2 text-black/50'>Registration certificate (CRLV)</div>
                                <input className='p-2 bg-dropDown border-2 w-72' type="text" />
                            </div>
                            <div>
                                <div className='my-2 text-black/50'>Year</div>
                                <input className='p-2 bg-dropDown border-2 w-72' type="text" />
                                <div className='my-2 text-black/50'>Chassis number</div>
                                <input className='p-2 bg-dropDown border-2 w-72' type="text" />
                            </div>
                        </div>
                        <div className='flex justify-end mt-2 gap-3'>
                            <button className='border-2 p-2 text-black/50' onClick={toggleVisibleRWA}>Cancel</button>
                            <button className='bg-lightGray p-2 text-gray-300'>Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}