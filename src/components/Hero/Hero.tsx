"use client";

import Link from "next/link";
import { Parallax } from "react-parallax";

export const Hero = () => {
  return (
    <Parallax bgImage="/dastan.jpeg" bgImageAlt="the cat" strength={300}>
      <span className="absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 backdrop-blur-sm" />

      <div className="relative h-[600px] text-center max-w-[580px] mx-auto flex flex-col gap-5 justify-center items-center text-white">
        <h3 className="text-white text-6xl font-bold">
          Добро пожаловать в наш отель
        </h3>

        <p>
          Отель, где современный комфорт встречается с духом приключений.
          Вдохновляющий отдых в объятиях природы и роскоши.
        </p>

        <Link href="/rooms" className="btn-primary mt-4">
          Смотреть номера
        </Link>
      </div>
    </Parallax>
  );
};
