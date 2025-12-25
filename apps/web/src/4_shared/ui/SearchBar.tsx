export const SearchBar = () => {
  return (
    <form className="relative h-[45px] w-full max-w-xl" role="search">
      <img
        src="/search.svg"
        alt=""
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#99A1AF]"
      />
      <input
        type="search"
        placeholder="Search friends, artists..."
        className="h-[45px] w-full rounded-[12px] border border-[#2A2A3E] bg-[#0F0F1F] pl-10 pr-3 text-sm text-[#99A1AF] placeholder:text-[#99A1AF] outline-none focus:ring-2 focus:ring-[#5f6b8a]"
      />
    </form>
  );
};
