export function IconPen({ onClick }: { onClick?: () => void }) {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <rect x="1" y="1" width="20" height="20" rx="6" fill="black" />
      <path
        d="M15.0045 7.41221C15.2212 7.19557 15.2212 6.83451 15.0045 6.62898L13.7047 5.32916C13.4992 5.11253 13.1381 5.11253 12.9215 5.32916L11.8994 6.34569L13.9824 8.42873M5.16699 13.0836V15.1667H7.25004L13.3936 9.01754L11.3106 6.9345L5.16699 13.0836Z"
        fill="white"
        fillOpacity="0.5"
      />
      <rect
        x="0.5"
        y="0.5"
        width="21"
        height="21"
        rx="6.5"
        stroke="white"
        strokeOpacity="0.2"
      />
    </svg>
  );
}
