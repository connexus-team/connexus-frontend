export function MenuIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer lg:hidden"
      width="31"
      height="27"
      viewBox="0 0 31 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.4375"
        y="0.527832"
        width="30"
        height="3.03226"
        rx="1.51613"
        fill="#D9D9D9"
      />
      <rect
        x="0.4375"
        y="7.3504"
        width="29.5645"
        height="3.03226"
        rx="1.51613"
        fill="#D9D9D9"
      />
      <rect
        x="0.4375"
        y="14.173"
        width="29.5645"
        height="3.03226"
        rx="1.51613"
        fill="#D9D9D9"
      />
      <rect
        x="0.4375"
        y="20.9955"
        width="30"
        height="3.03226"
        rx="1.51613"
        fill="#D9D9D9"
      />
    </svg>
  );
}
