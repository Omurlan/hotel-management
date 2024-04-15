"use client";

import { useState } from "react";

import Search from "../Search/Search";

const PageSearch = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto">
      <Search
        roomTypeFilter={roomTypeFilter}
        searchQuery={searchQuery}
        setRoomTypeFilter={setRoomTypeFilter}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default PageSearch;
