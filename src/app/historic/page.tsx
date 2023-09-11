"use client"

import FlatList from "@/components/FlatList"
import Header from "@/components/Header"
import useModalStore from "@/stores/modal"

export default function Historic() {

    const { } = useModalStore()

    return (
        <main>
            <Header />
            <section className="px-40 pt-4">
                <div className="bg-white p-8 rounded-2xl border-2">
                    <div>Historic</div>
                    <div className='flex items-center justify-between'>
                        <div>Name</div>
                        <div>Ammount</div>
                        <div>Typer</div>
                        <div>Date</div>
                        <div>Status</div>
                        <div>Contract</div>
                    </div>
                    <FlatList />
                </div>
            </section>
        </main>
    )
}