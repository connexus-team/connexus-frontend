"use client"

import Image from 'next/image';
import { useState } from 'react';

type IconType = {
    [key: string]: JSX.Element;
}

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedNetwork, setSelectedNetwork] = useState('Select network');

    const networks = [
        'WDREXtr',
        'Bitfinity',
        'Lacoin',
        'Etherium'
    ]

    const icons: IconType = {
        WDREXtr: <Image src="/brazil.svg" width={20} height={20} alt="WDREXtr" />,
        Bitfinity: <Image src="/bitfinity-icon.svg" width={20} height={20} alt="Bitfinity" />,
        Lacoin: <Image src="/lacoin-icon.svg" width={20} height={20} alt="Lacoin" />,
        Etherium: <Image src="/eth-icon.svg" width={20} height={20} alt="Etherium" />,
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectNetwork = (network: string) => {
        setSelectedNetwork(network);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left px-30">
            <div>
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="bg-dropDown p-2 text-left w-72 rounded border-2"
                >
                    <div className='flex justify-between items-center font-semibold'>
                        <div className='flex items-center'>
                            {icons[selectedNetwork]}
                            <span className='ml-2'>{selectedNetwork}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 transition-transform transform ${isOpen ? 'rotate-90' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </button>
            </div>
            {isOpen && (
                <div className="origin-top-right absolute right-0 w-72 rounded-md shadow-lg bg-dropDown ring-1 ring-black ring-opacity-5">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {networks.map((network) => (
                            <button
                                key={network}
                                onClick={() => selectNetwork(network)}
                                className="block text-left p-2 text-base hover:bg-orange hover:text-white w-full border-b-2 font-semibold"
                                role="menuitem"
                            >
                                <div className="flex items-center">
                                    {icons[network]}
                                    <span className="ml-2">{network}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
