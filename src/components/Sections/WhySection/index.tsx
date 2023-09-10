export function WhySection() {
  return (
    <div className="flex flex-col items-center lg:h-screen mt-20">
      <div className="hidden lg:flex w-1/2 lg:w-[580px] p-7 bg-[rgba(0,4,13,0.1)] border border-[rgba(255,255,255,0.50)] rounded-lg items-center justify-center text-center text-[26px] font-medium">
        Why should you mint your Quest ID?
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-[74px] max-w-6xl lg:h-[36rem] mt-44 lg:mt-14 px-10">
        <h1 className="text-center text-[14px] font-medium lg:hidden mb-4">
          Only whitelisted users are able to mint it.
        </h1>
        <div className="flex flex-col gap-4 p-[26px] h-full w-full bg-[#131313] shadow-2xl border border-[rgba(255,255,255,0.50)] rounded-md">
          <img src="/bannerGif.gif" alt="gif" draggable={false} />
          <h1 className="text-[14px] lg:text-[28px] font-medium h-full text-center">
            QUEST ID SOULBOUND TOKEN
          </h1>
        </div>
        <h1 className="text-center text-[14px] font-medium lg:hidden my-4">
          Why should you mint your Quest ID?
        </h1>
        <div className="flex flex-col justify-between h-full w-full gap-4 lg:gap-0">
          <div className="w-full h-36 bg-gradient-to-tr from-[#6ADAEB] to-[#4D69FF] shadow-2xl ring-1 ring-[rgba(255,255,255,.2)] rounded-md relative">
            <div className="bg-[rgba(0,0,0,.5)] h-full w-full absolute top-0 left-0 rounded-md flex items-center justify-center gap-4 px-4">
              <img src="/onChain.png" alt="onChain" />
              <div className="flex flex-col gap-2">
                <h1 className="text-sm lg:text-xl font-medium">
                  On-chain reputation system
                </h1>
                <h1 className="text-xs lg:text-lg font-normal">
                  Lines of content about gg score advantages for gamer quest ID
                  user
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full h-36 bg-gradient-to-tr from-[#9EFF85] to-[#21C39B] shadow-2xl ring-1 ring-[rgba(255,255,255,.2)] rounded-md relative">
            <div className="bg-[rgba(0,0,0,.5)] h-full w-full absolute top-0 left-0 rounded-md flex items-center justify-center gap-4 px-4">
              <img src="/multi.png" alt="onChain" />
              <div className="flex flex-col gap-2">
                <h1 className="text-sm lg:text-xl font-medium">
                  On-chain reputation system
                </h1>
                <h1 className="text-xs lg:text-lg font-normal">
                  Lines of content about gg score advantages for gamer quest ID
                  user
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full h-36 bg-gradient-to-tr from-[#5583F3] to-[#AC68FF] shadow-2xl ring-1 ring-[rgba(255,255,255,.2)] rounded-md relative">
            <div className="bg-[rgba(0,0,0,.5)] h-full w-full absolute top-0 left-0 rounded-md flex items-center justify-center gap-4 px-4">
              <img src="/game.png" alt="onChain" />
              <div className="flex flex-col gap-2">
                <h1 className="text-sm lg:text-xl font-medium">
                  On-chain reputation system
                </h1>
                <h1 className="text-xs lg:text-lg font-normal">
                  Lines of content about gg score advantages for gamer quest ID
                  user
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
