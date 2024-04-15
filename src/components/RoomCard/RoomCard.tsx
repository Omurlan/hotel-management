import { FC } from "react";
import Image from "next/image";

import { Room } from "@/models/room";
import Link from "next/link";
import { Calendar, CalendarCheck } from "lucide-react";

type Props = {
  room: Room;
};

const RoomCard: FC<Props> = (props) => {
  const {
    room: { coverImage, name, price, type, description, slug, isBooked },
  } = props;

  return (
    <div className="rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <div className="h-60 rounded-xl rounded-b-none overflow-hidden">
          <Image
            src={coverImage.url}
            alt={name}
            width={250}
            height={250}
            className="img hover:scale-[1.03] transition cursor-pointer"
          />
        </div>

        <Link
          href={`/rooms/${slug.current}`}
          className="flex gap-3 justify-center items-center bg-blue-500 text-white py-1 text-sm font-bold"
        >
          {isBooked ? (
            <CalendarCheck className="w-5" />
          ) : (
            <Calendar className="w-5" />
          )}
          {isBooked ? "Забронировано" : "Забронировать"}
        </Link>
      </div>

      <div className="flex flex-col items-baseline bg-white p-4 gap-2">
        <div className="flex justify-between items-center w-full text-xl font-bold">
          <p>{name}</p>

          <span className="px-3 py-1 bg-gray-100 border h-fit text-gray-700 rounded-xl text-xs font-bold">
            {type}
          </span>
        </div>

        <p className="pb-6 text-gray-700">{description.slice(0, 100)}...</p>

        <div className="flex justify-end w-full">
          <p className="font-bold text-lg ml-auto">{price} С</p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
