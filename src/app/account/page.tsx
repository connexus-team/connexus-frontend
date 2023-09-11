"use client"

import Link from "next/link"
import Card from "@/components/Card"
import Header from "@/components/Header"
import NetworkCard from "@/components/NetworkCard"
import ModalTBA from "@/components/ModalTBA"
import useModalStore from "@/stores/modal"
import ModalBank from "@/components/ModalBank"
import ModalBankTba from "@/components/ModalBankTba"
import ModalSuccess from "@/components/ModalSuccess"
import ModalTranfer from "@/components/ModalTranfer"

export default function Account() {

    const {
        visibleTBA,
        toggleVisibleTBA,
        visibleBank,
        toggleVisibleBank,
        visibleBankTba,
        toggleVisibleBankTba,
        visibleSuccess,
        toggleVisibleSuccess,
        visibleTransfer,
        toggleVisibleTranfer
    } = useModalStore()

    return (
        <main>
            <Header />
            <section className="flex justify-between px-40 mt-2">
                <span className="font-semibold text-3xl">Account</span>
                <Link href="/score">
                    <button className="border-2 p-2 rounded">
                        Total score
                    </button>
                </Link>
            </section>
            <section className="flex gap-2 px-40">
                <div>
                    <Card
                        isActive={true}
                        balance="92.321,32"
                        balanceDREX="842"
                        tokenIcon="/bitfinity-icon.svg"
                        tokenName="BFT"
                        tranferAsset={toggleVisibleTranfer}
                    />
                    <div className="py-2"></div>
                    <Card
                        balance="2.312,00"
                        balanceDREX="842"
                        tokenIcon="/LAtoken-icon.svg"
                        tokenName="LAtoken"
                        tranferAsset={toggleVisibleTranfer}
                    />
                </div>
                <div></div>
                <div>
                    <Card
                        balance="10.921,00"
                        balanceDREX="842"
                        tokenIcon="/eth-icon.svg"
                        tokenName="ETH"
                        tranferAsset={toggleVisibleTranfer}
                    />
                    <div className="py-2"></div>
                    <Card
                        balance="421.321,12"
                        balanceDREX="124"
                        tokenIcon="/connexus-icon.svg"
                        tokenName="CNX"
                        tranferAsset={toggleVisibleTranfer}
                    />
                </div>
                <div className="">
                    <NetworkCard text="CREATE-TBACARD" onClick={toggleVisibleTBA} />
                    <div className="py-2"></div>
                    <NetworkCard text="OPENBANKING" onClick={toggleVisibleBank} />
                    <div className="py-2"></div>
                    <NetworkCard text="BANKTBACARD" onClick={toggleVisibleBankTba} />
                </div>
            </section>
            <ModalTBA visible={visibleTBA} />
            <ModalBank visible={visibleBank} />
            <ModalBankTba visible={visibleBankTba} />
            <ModalSuccess visible={visibleSuccess} />
            <ModalTranfer visible={visibleTransfer} />
        </main>
    )
}