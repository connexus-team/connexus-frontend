"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import OrangeButton from "../OrangeButton";
import useModalStore from "@/stores/modal";

export default function Header() {
  const pathname = usePathname();
  const { toggleVisibleBorrow, toggleVisibleRWA } = useModalStore();

  return (
    <header className="flex h-[80px] items-center justify-between px-40 shadow-sm">
      <Image src={"/logo.svg"} height={24} width={191} alt="logo" />
      <div className="flex items-center space-x-4">
        <Link href="/home">
          <div
            className={`flex h-[80px] items-center hover:border-b-2 hover:border-orange hover:font-semibold ${
              pathname === "/home"
                ? "border-b-4 border-orange font-semibold"
                : ""
            }`}
          >
            Home
          </div>
        </Link>
        <Link href="/historic">
          <div
            className={`flex h-[80px] items-center hover:border-b-2 hover:border-orange hover:font-semibold ${
              pathname === "/historic"
                ? "border-b-4 border-orange font-semibold"
                : ""
            }`}
          >
            Historic
          </div>
        </Link>
        <Link href="/account">
          <div
            className={`flex h-[80px] items-center hover:border-b-2 hover:border-orange hover:font-semibold ${
              pathname === "/account"
                ? "border-b-4 border-orange font-semibold"
                : ""
            }`}
          >
            Account
          </div>
        </Link>
      </div>
      <div className="flex space-x-4">
        <OrangeButton text="Token RWA" onClick={toggleVisibleRWA} />
        <OrangeButton text="Borrow" onClick={toggleVisibleBorrow} />
        <Image src={"/usa.svg"} width={70} height={70} alt="language" />
      </div>
    </header>
  );
}
