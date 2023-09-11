type OrangeButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function OrangeButton({ text, onClick }: OrangeButtonProps) {
  return (
    <button
      className="rounded-sm bg-orange p-2 font-bold text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
