import Image from "next/image";
import useModalStore from "@/stores/modal"
import OrangeButton from "../OrangeButton";

type ModalSuccessProps = {
    visible: boolean;
}

export default function ModalSuccess({ visible }: ModalSuccessProps) {

    const { toggleVisibleSuccess } = useModalStore()

    if (visible) {
        return (
            <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/70 z-10">
                <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 w-[690px] bg-white rounded-2xl">
                    <div className="flex items-center">
                        <Image src={'/check.svg'} width={24} height={0} alt="check-icon" />
                        <span className="font-semibold text-xl ml-1">Success! Your Openbanking Account is Ready to Use!</span>
                    </div>
                    <div className='text-black/50 font-semibold text-xl mt-5'>
                        Your Openbanking account has been successfully created. You now have secure access to a world of financial possibilities!
                    </div>
                    <div className="flex justify-end mt-5">
                        <OrangeButton text="Get Started" onClick={toggleVisibleSuccess} />
                    </div>
                </div>
            </div>
        )
    }
}