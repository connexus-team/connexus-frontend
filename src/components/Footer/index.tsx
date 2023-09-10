import { InstaFooterIcon, TwitterFooterIcon } from "@/components/Icons";
import LogoGG from "../LogoGG";

export function Footer() {
  return (
    <div className="w-full py-8 lg:h-[15rem] flex flex-col">
      <div className="py-8 px-20 flex flex-col gap-14 lg:flex-row items-center justify-between w-full">
        <LogoGG />
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com/gg_quest_gg?lang=pt"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterFooterIcon />
          </a>
          <a href="/" target="_blank">
            <InstaFooterIcon />
          </a>
        </div>
      </div>
      <hr className="bg-[#D2D2D2]" />
      <h1 className="text-center self-center pt-4">© 2022 ggQuest</h1>
    </div>
  );
}
