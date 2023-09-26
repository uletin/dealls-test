import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ISearch {
  onInputChange: (e: any) => void;
  onButtonClick: () => void;
}

const Search = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [inputSearch, setInputSearch] = useState("");

  const handleChange = (e: any) => {
    setInputSearch(e.target.value);
  };

  const handleClick = () => {
    const cleanInput = inputSearch.trim();

    if (cleanInput.length <= 0) {
      return console.log(cleanInput);
    }

    return router.push(`/superadmin/products/search?q=${inputSearch}`);
  };

  return (
    <div className="flex gap-2">
      <input
        //@ts-ignore
        defaultValue={params.get("q")}
        className="flex flex-1 p-3 rounded-lg"
        placeholder="Search Products, Brands, Or Category"
        onChange={(e) => handleChange(e)}
      />
      <button className="bg-slate-500 px-6 rounded-lg" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default Search;
