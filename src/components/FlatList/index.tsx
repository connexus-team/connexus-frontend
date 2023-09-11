import Image from 'next/image'
import Collaterized from '../Collaterized';
import Unsecured from '../Unsecured';
import { data } from "./data";
import useModalStore from '@/stores/modal';

export default function FlatList() {

    const { } = useModalStore()

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <div className='flex justify-between my-4'>
                        <div className='flex items-center'>
                            {item.icon ? (
                                <div className='flex'>
                                    <Image src={"/collaterized.svg"} height={24} width={24} alt='collaterized-icon' />
                                    <div className='ml-2'>{item.asset}</div>
                                </div>

                            ) : (
                                <div className='flex'>
                                    <Image src={"/unsecured.svg"} height={24} width={24} alt='unsecured-icon' />
                                    <div className='ml-2'>{item.asset}</div>
                                </div>
                            )}
                        </div>

                        <div className='flex items-center'>{item.amount}</div>
                        <div className='flex items-center'>{item.typer}</div>
                        <div className='flex items-center'>{item.date}</div>

                        <div>
                            {item.status ? (
                                <Collaterized />
                            ) : (
                                <Unsecured />
                            )}
                        </div>
                        <button><Image src={"/document.svg"} height={30} width={30} alt='document-icon' /></button>
                    </div>
                    {index < data.length - 1 && <div className="border-b my-2"></div>}
                </div>
            ))}
        </div>
    )
}
