"use client";

import { FC } from "react";
import Image from "next/image";

import { Room } from "@/models/room";
import Link from "next/link";

type Props = {
  featuredRoom: Room;
};

const FeaturedRoom: FC<Props> = (props) => {
  const { featuredRoom } = props;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-3xl">Рекомендуемый номер</h3>

      <div className="flex flex-col gap-4 bg-white shadow-md rounded-xl p-5">
        <Image
          className="rounded-xl"
          src={featuredRoom.coverImage.url}
          alt="lol"
          width={300}
          height={300}
        />

        <p>{featuredRoom.description}</p>

        <p className="font-bold text-2xl">{featuredRoom.price}</p>
      </div>
    </div>
  );
};

export default FeaturedRoom;
