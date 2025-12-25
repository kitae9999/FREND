import { useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export const Gnb = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex h-[72px] items-center gap-6 px-6 shadow bg-[#1a1a2e]">
      <div className="h-10 w-auto">
        <img src="/logo.svg" alt="FREND 로고" className="h-full w-auto" />
      </div>

      <div className="flex flex-1 items-center gap-6">
        <SearchBar />

        <div className="ml-auto flex items-center gap-4">
          <button
            className="text-sm font-medium text-white transition-colors hover:text-blue-400"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
          <button
            className="text-sm font-medium text-white transition-colors hover:text-blue-400"
            onClick={() => navigate("/")}
          >
            Feed
          </button>
          <button
            className="text-sm font-medium text-white transition-colors hover:text-blue-400"
            onClick={() => navigate("/")}
          >
            Profile
          </button>
          <div className="h-8 w-8 rounded-full bg-[#2A2A3E]" aria-hidden />
        </div>
      </div>
    </nav>
  );
};
