import React, { useEffect, useRef } from "react";
import Confetti from "react-confetti";

interface FullscreenConfettiProps {
  duration?: number;
  numberOfPieces?: number;
}

const FullscreenConfetti: React.FC<FullscreenConfettiProps> = ({
  duration = 3000,
  numberOfPieces = 200,
}) => {
  const confettiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (confettiRef.current) {
        confettiRef.current.style.display = "none";
      }
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration]);

  const handleResize = () => {
    if (confettiRef.current) {
      const { innerWidth, innerHeight } = window;
      confettiRef.current.style.width = `${innerWidth}px`;
      confettiRef.current.style.height = `${innerHeight}px`;
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={confettiRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
      }}
    >
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={numberOfPieces}
      />
    </div>
  );
};

export default FullscreenConfetti;
