import Header from "@/components/Header"
import Image from "next/image"

export default function Score() {
    return (
        <main>
            <Header />
            <section className="px-40 pt-4">
                <span className="font-semibold text-2xl">Total Score</span>

                <div className="flex justify-between">
                    <div className="bg-white h-[600px] w-[653px] border-2 rounded-2xl p-8 flex flex-col justify-between">
                        <div className="flex justify-center">
                            <Image src={"/chart.svg"} width={300} height={0} alt="chart" />
                        </div>
                        <div className="flex justify-center">
                            <span className="font-semibold text-3xl">Total patrimony: R$2.380.000</span>
                        </div>
                        <div className="flex justify-around">
                            <div className="flex items-center">
                                <div className="w-4 h-4 rounded-full bg-red-600"></div>
                                <span className="ml-2 text-black/50">Comprimised Limit</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 rounded-full bg-green-600"></div>
                                <span className="ml-2 text-black/50">Free Limit</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white h-[600px] w-[923px] border-2 rounded-2xl p-8">
                        <div className="text-black/50">Limit</div>
                        <div>
                            <span className="font-semibold text-3xl">R$580.000</span>
                            <span className="text-black">Used from</span>
                            <span>R$1.800.000</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <div className="w-3 h-3 rounded-full bg-green-600"></div>
                            <span className="ml-1 text-black/50 text-sm">Free Limit</span>
                        </div>

                        <div className="mt-5">
                            <div className="text-black/50 mt-2">Total Score</div>
                            <div className="font-semibold text-3xl">10 Points</div>
                            <div className="text-black/50">your score allows lower interest</div>
                            <div className="text-black/50">In the next step our platform will use On-Chain LLMs. An Internet Computer A.I to recommend the best investments according to your score and account balance.</div>
                            <a className="underline text-blue-500 mt-5" href="https://github.com/icppWorld/icpp-llm">https://github.com/icppWorld/icpp-llm</a>
                        </div>
                        <div className="mt-10">
                            <Image src={"/logo.svg"} width={200} height={0} alt="logo" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}