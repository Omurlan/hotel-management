"use client";

import Image from "next/image";
import Confetti from "react-confetti";

const About = () => {
  return (
    <>
      <Confetti numberOfPieces={70} width={window.innerWidth} height={1020} />

      <div className="flex flex-col gap-4 items-center h-[450px] justify-center">
        <Image width={150} height={150} src="/mnu.jpeg" alt="logo" />

        <div className="max-w-[500px]">
          <p className="text-center">
            Разработка системы управления сайта гостиничного комплекса{" "}
            <strong>«Дастан»</strong> выполнил ст.гр. ИТУ-20 Торакулов А. А.
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Руководитель ст. преп. каф "ИТи М" Мамадалиева К.А.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
