import Dropdown from "../Dropdown";

type NetworkCardProps = {
    text: string;
    onClick: () => void
}

export default function NetworkCard({ text, onClick }: NetworkCardProps) {
    return (
        <div className="bg-white p-8 mt-1 border-2 rounded-2xl w-[540px]">
            <div className="font-semibold text-3xl mb-5">Select network</div>
            <div className="mb-5 w-">
                <Dropdown />
            </div>
            <div>
                <button className='bg-orange font-bold text-white p-2 rounded-sm w-52' onClick={onClick}>{text}</button>
            </div>
        </div>
    )
}