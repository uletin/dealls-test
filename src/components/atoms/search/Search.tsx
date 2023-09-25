const Search = () => {
  return (
    <div className="flex gap-2">
      <input
        className="p-3 rounded-lg"
        placeholder="Search Products, Brands, Or Category"
      />
      <button className="bg-slate-500 px-6 rounded-lg">Search</button>
    </div>
  );
};

export default Search;
