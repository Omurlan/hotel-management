import Link from "next/link";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          Dastan Hotel
        </Link>

        <h4 className="font-semibold text-[40px] py-6">Контакты</h4>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-3 lg:border-none border-b pb-5">
            <p>ул. Абая 40 1 этаж, 720001 Бишкек</p>

            <div className="flex items-center gap-3">
              <BsFillSendFill />
              <p>dastanhotel</p>
            </div>

            <div className="flex items-center gap-3">
              <BsTelephoneOutbound />
              <p>0234-345-234</p>
            </div>
            <div className="flex items-center gap-3">
              <BiMessageDetail />
              <p>dastanhotel</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:border-none border-b pb-5">
            <h5 className="font-bold">Заголовок</h5>

            <p>О нас</p>
            <p>Связаться с нами</p>
            <p>Конфиденциальность</p>
            <p>Условия пользования</p>
            <p>Помощь клиентам</p>
          </div>

          <div className="flex flex-col gap-3">
            <h5 className="font-bold">Заголовок</h5>

            <p>Кухня</p>
            <p>СПА</p>
            <p>Фитнес</p>
            <p>Спорт</p>
            <p>Мероприятия</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 h-10 md:h-[70px] mt-16 w-full bottom-0 left-0" />
    </footer>
  );
};

export default Footer;
