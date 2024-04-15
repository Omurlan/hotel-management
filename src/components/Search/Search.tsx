"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";
import Select from "react-select";

type Props = {
  roomTypeFilter: string;
  searchQuery: string;
  setRoomTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

const Search: FC<Props> = ({
  roomTypeFilter,
  searchQuery,
  setRoomTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  };

  return (
    <section className="bg-yellow-500 px-4 py-4 rounded-xl">
      <div className="container mx-auto flex gap-4 flex-wrap justify-between items-center">
        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-black">
            Тип номера
          </label>
          <div className="relative">
            <select
              value={roomTypeFilter}
              onChange={handleRoomTypeChange}
              className="min-w-[230px] w-full px-4 py-3 rounded-lg"
            >
              <option value="All">Все</option>
              <option value="Basic">Недорогие</option>
              <option value="Luxury">Элитные</option>
              <option value="Suite">Люкс</option>
            </select>
          </div>
        </div>

        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-black">
            Поиск
          </label>
          <input
            type="search"
            id="search"
            placeholder="Поиск..."
            className="min-w-[300px] w-full px-4 py-3 rounded-lg"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>

        <button
          className="btn-primary"
          type="button"
          onClick={handleFilterClick}
        >
          Искать
        </button>
      </div>
    </section>
  );
};

export default Search;
