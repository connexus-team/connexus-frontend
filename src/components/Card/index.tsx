import Image from "next/image"
import { ReactNode } from "react";

type CardProps = {
    isActive?: boolean;
    balance: string;
    balanceDREX: string;
    tokenIcon: string;
    tokenName: string;
    tranferAsset: () => void;
}

export default function Card({ isActive, balance, balanceDREX, tokenIcon, tokenName, tranferAsset }: CardProps) {
    return (
        <div className={`${isActive ? 'bg-darkGray' : 'bg-white'} ${isActive ? 'border-2 border-orange' : 'border-2'} p-6 rounded-2xl w-[518px] flex flex-col justify-between `}>
            <div className='flex justify-between'>
                <div className={`${isActive ? 'text-lightGray' : 'text-black/50'} font-semibold text-lg`}>
                    Total WDREXtr <br /> (Tokenized real)
                </div>
                <div className='flex items-center'>
                    <div className={`${isActive ? 'text-lightGray' : 'text-black/50'} ml-4`}>****3212</div>
                </div>
            </div>
            <div className={`${isActive ? 'text-white' : 'text-black'} font-semibold text-4xl`}>{balance}</div>
            <div className='flex items-center'>
                <div className={`${isActive ? 'text-lightGray' : 'text-black/50'} ml-2 font-semibold my-3 text-lg`}>Total Token/Crypto</div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex">
                    <Image src={"/brazil.svg"} width={32} height={32} alt='bitfinity-icon' />
                    <span className={`${isActive ? 'text-white' : 'text-black'} text-3xl font-semibold ml-1`}>{balanceDREX}</span>
                    <span className={`${isActive ? 'text-white' : 'text-black'} text-lg mt-2 ml-1`}>WDREXtr</span>
                </div>
                <div className="flex">
                    <Image src={`${tokenIcon}`} width={32} height={32} alt='bitfinity-icon' />
                    <span className={`${isActive ? 'text-white' : 'text-black'} text-3xl font-semibold ml-1`}>842</span>
                    <span className={`${isActive ? 'text-white' : 'text-black'} text-lg mt-2 ml-1`}>{tokenName}</span>
                </div>
            </div>
            <div className={`${isActive ? 'text-white' : 'text-black'} flex items-center gap-2 mt-5`}>
                <span className={`${isActive ? 'text-lightGray' : 'text-black/50'} font-semibold`}>RWAs:</span>
                <Image src={"/car.svg"} height={32} width={32} alt="car-icon" />
                <span className="font-medium text-xs">Toyota Corolla</span>
                <Image src={"/house.svg"} height={32} width={32} alt="house-icon" />
                <span className="font-medium text-xs">Sobrado</span>
            </div>
            <div className='flex justify-between mt-10'>
                <button className='bg-orange font-bold text-white rounded-sm px-12' onClick={tranferAsset}>Tranfer asset</button>
                <button className={`${isActive ? 'bg-inherit' : 'bg-white'} ${isActive ? 'border-none' : 'border-2'} ${isActive ? 'text-white' : 'text-black'} font-bold p-2 rounded-sm px-10`}>{isActive ? 'Change account' : 'Connect account'}</button>
            </div>
        </div>

    )
}