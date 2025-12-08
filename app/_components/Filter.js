"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  const handleFilter = (filter) => {
    const params = new URLSearchParams(pathname);
    //it's only change url but didn't go to the new after change
    params.set("capacity", filter);
    //responsible to got to new url
    router.replace(`${pathname}?capacity=${params.get("capacity")}`, {
      scroll: false,
    });
  };

  return (
    <div className="flex justify-end mb-8 gap-4">
      <div className=" border border-primary-800">
        <Button
          onClick={() => handleFilter("all")}
          filter="all"
          activeFilter={activeFilter}
        >
          All cabins
        </Button>
        <Button
          onClick={() => handleFilter("small")}
          filter="small"
          activeFilter={activeFilter}
        >
          2-4 guests
        </Button>
        <Button
          onClick={() => handleFilter("meduim")}
          filter="meduim"
          activeFilter={activeFilter}
        >
          4-7 guests
        </Button>
        <Button
          onClick={() => handleFilter("large")}
          filter="large"
          activeFilter={activeFilter}
        >
          8-12 guests
        </Button>
      </div>
    </div>
  );
}

function Button({ children, activeFilter, onClick, filter }) {
  return (
    <button
      className={`hover:bg-primary-800 text-primary-100 px-4 py-2 cursor-pointer ${
        activeFilter === filter ? "bg-primary-800 text-primary-100" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Filter;
