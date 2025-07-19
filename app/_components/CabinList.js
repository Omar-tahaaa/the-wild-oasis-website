import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

async function CabinList({ filter }) {
  const cabins = await getCabins();

  let dispalayedCabins;

  if (filter === "all") {
    dispalayedCabins = [...cabins];
  } else if (filter === "small") {
    dispalayedCabins = cabins.filter(
      (cabins) => cabins.maxCapacity >= 2 && cabins.maxCapacity <= 4
    );
  } else if (filter === "meduim") {
    dispalayedCabins = cabins.filter(
      (cabins) => cabins.maxCapacity >= 4 && cabins.maxCapacity < 8
    );
  } else if (filter === "large") {
    dispalayedCabins = cabins.filter(
      (cabins) => cabins.maxCapacity >= 8 && cabins.maxCapacity <= 12
    );
  }

  if (!cabins) return null;

  return (
    <>
      {dispalayedCabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {dispalayedCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default CabinList;
