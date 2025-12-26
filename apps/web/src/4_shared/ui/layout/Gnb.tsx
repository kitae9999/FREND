import { useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export const Gnb = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex h-[72px] items-center gap-6 px-6 shadow border-b border-solid border-[#2A2A3E] bg-[#18181C]">
      <div className="flex h-10 w-auto items-center">
        {/* <img src="/logo.svg" alt="FREND 로고" className="h-full w-auto" /> */}
        <p className="font-[950] text-2xl italic leading-none text-white">
          Hyp<span className="text-[#ED1B25]">S</span>s
        </p>
      </div>

      <div className="flex flex-1 items-center gap-6">
        <SearchBar />

        <div className="ml-auto flex items-center gap-6">
          <button
            className="text-sm font-extrabold text-white transition-colors hover:text-blue-400"
            onClick={() => navigate("/dashboard")}
          >
            DASHBOARD
          </button>
          <button
            className="text-sm font-extrabold text-white transition-colors hover:text-blue-400"
            onClick={() => navigate("/")}
          >
            FEED
          </button>
          <button
            className="text-sm font-extrabold text-white transition-colors hover:text-blue-400"
            onClick={() => navigate("/")}
          >
            PROFILE
          </button>
          <div>
            <img src="notice.svg" alt="알림 아이콘" />
          </div>
          <div className="h-8 w-8 rounded-full bg-[#2A2A3E]" aria-hidden />
        </div>
      </div>
    </nav>
  );
};
