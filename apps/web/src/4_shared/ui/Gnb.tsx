import { useNavigate } from "react-router-dom";

export const Gnb = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center gap-3 px-4 py-3 shadow bg-white sticky top-0 z-10">
      <button
        className="text-sm font-medium text-slate-700 hover:text-blue-600"
        onClick={() => navigate("/")}
      >
        Feed
      </button>
      <button
        className="text-sm font-medium text-slate-700 hover:text-blue-600"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </button>
    </nav>
  );
};
