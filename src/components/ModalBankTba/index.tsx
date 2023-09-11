import useModalStore from "@/stores/modal"
import OrangeButton from "../OrangeButton";

type ModalBankTbaProps = {
    visible: boolean;
}

export default function ModalBankTba({ visible }: ModalBankTbaProps) {

    const { toggleVisibleBankTba, toggleVisibleSuccess } = useModalStore()

    if (visible) {
        return (
            <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/70 z-10">
                <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 w-[680px] bg-white rounded-2xl">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-2xl">BANKTBACARD</span>
                        <button onClick={toggleVisibleBankTba}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex gap-5">
                        <div>
                            <div className='my-2 text-black/50'>ID</div>
                            <input className='p-2 bg-dropDown border-2 w-72' type="text" />
                        </div>
                        <div>
                            <div className='my-2 text-black/50'>Address Collection</div>
                            <input className='p-2 bg-dropDown border-2 w-72' type="text" />
                        </div>
                    </div>
                    <div className="flex justify-end mt-5 pr-5">
                        <OrangeButton text="Continue" onClick={toggleVisibleSuccess} />
                    </div>
                </div>
            </div>
        )
    }
}