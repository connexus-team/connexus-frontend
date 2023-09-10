import LogoGG from "../LogoGG";

const LoadingPage = () => {
  return (
    <div className="grid fixed top-0 left-0 h-screen w-full bg-[#111315] z-[99999] place-items-center">
      <div className="h-28 w-28 animate-bounce">
        <LogoGG />
      </div>
    </div>
  );
};

export default LoadingPage;
