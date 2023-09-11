"use client"

import { useRouter, usePathname } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import OrangeButton from "../OrangeButton"
import useModalStore from '@/stores/modal'

export default function Header() {

    const pathname = usePathname()
    const { toggleVisibleBorrow, toggleVisibleRWA } = useModalStore()

    return (
        <header className='flex justify-between px-40 h-[80px] shadow-sm items-center'>
            <Image src={"/logo.svg"} height={24} width={191} alt='logo' />
            <div className='flex space-x-4 items-center'>
                <Link href="/home">
                    <div className={`hover:border-b-2 hover:border-orange hover:font-semibold h-[80px] flex items-center ${pathname === '/home' ? 'border-b-4 border-orange font-semibold' : ''}`}>
                        Home
                    </div>
                </Link>
                <Link href="/historic">
                    <div className={`hover:border-b-2 hover:border-orange hover:font-semibold h-[80px] flex items-center ${pathname === '/historic' ? 'border-b-4 border-orange font-semibold' : ''}`}>
                        Historic
                    </div>
                </Link>
                <Link href="/account">
                    <div className={`hover:border-b-2 hover:border-orange hover:font-semibold h-[80px] flex items-center ${pathname === '/account' ? 'border-b-4 border-orange font-semibold' : ''}`}>
                        Account
                    </div>
                </Link>
            </div>
            <div className='flex space-x-4'>
                <OrangeButton text='Token RWA' onClick={toggleVisibleRWA} />
                <OrangeButton text='Borrow' onClick={toggleVisibleBorrow} />
                <Image src={"/usa.svg"} width={70} height={70} alt='language' />
            </div>
        </header>
    )
}