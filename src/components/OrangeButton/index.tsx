type OrangeButtonProps = {
    text: string;
    onClick: () => void;
}

export default function OrangeButton({ text, onClick }: OrangeButtonProps) {
    return (
        <button className='bg-orange font-bold text-white p-2 rounded-sm' onClick={onClick}>{text}</button>
    )
}