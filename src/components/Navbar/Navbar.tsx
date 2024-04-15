"use client";

import Link from "next/link";
import cn from "classnames";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";
import {
  Hotel,
  Home,
  BookMarked,
  Headset,
  LucideIcon,
  Building2,
  LogIn,
  Menu,
} from "lucide-react";
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useMediaQuery } from "react-responsive";
import { useRect } from "@dnd-kit/core/dist/hooks/utilities";
import { useClickAway } from "@uidotdev/usehooks";
import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";

type Link = {
  path: string;
  title: string;
  icon: LucideIcon;
};

const links: Link[] = [
  {
    path: "/",
    title: "Главная",
    icon: Home,
  },
  {
    path: "/rooms",
    title: "Номера",
    icon: Hotel,
  },
  {
    path: "/about",
    title: "О нас",
    icon: BookMarked,
  },
  {
    path: "/",
    title: "Контакты",
    icon: Headset,
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  const isSmall = useMediaQuery({ query: "(max-width: 1024px)" });
  const hideName = useMediaQuery({ query: "(max-width: 524px)" });

  const [isOpen, setIsOpen] = useState(false);

  const divRef: MutableRefObject<HTMLDivElement> = useClickAway(() => {
    setIsOpen(false);
  });

  const { data: session, status } = useSession();

  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    if (window.scrollY >= 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    if (!isSmall) {
      setIsOpen(false);
    }
  }, [isSmall]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <nav
      ref={divRef}
      className={cn(
        "sticky z-30 top-0 transition bg-white border-b h-[60px] px-4",
        scrolled ? "shadow-md" : "",
      )}
    >
      <div
        className={cn(
          "flex justify-between items-center h-full mx-auto",
          !isSmall ? "container" : "",
        )}
      >
        <div className="flex gap-3 items-center">
          <Building2 />
          <h3 className="text-xl font-bold">Dastan Hotel</h3>
        </div>

        <ul
          className={cn(
            "flex gap-5 absolute left-1/2 -translate-x-1/2",
            isSmall
              ? "hidden absolute top-[60px] flex-col bg-white shadow-md p-4"
              : "",
            isSmall && isOpen && "!flex w-full gap-4 bg-white",
          )}
        >
          {links.map(({ path, title, icon: Icon }) => (
            <li key={path}>
              <Link
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl",
                  path === pathname ? "text-blue-500 bg-blue-100" : "",
                )}
                href={path}
              >
                <Icon className="w-5" />

                {title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-8 items-center">
          {status === "loading" && (
            <AiOutlineLoading3Quarters className="animate-spin" />
          )}

          {status === "authenticated" && (
            <Link
              className="flex items-center gap-3"
              href={`/users/${session.user.id}`}
            >
              {session.user.image ? (
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={session.user.image}
                    alt={session.user.name!}
                    width={30}
                    height={30}
                    className="scale-animation img"
                  />
                </div>
              ) : (
                <FaUserCircle className="cursor-pointer" />
              )}

              {!hideName && session.user.name}
            </Link>
          )}

          {status === "unauthenticated" && (
            <Link className="text-blue-500 flex gap-2" href="/auth">
              <LogIn className="w-5" />
              Вход
            </Link>
          )}

          <Menu
            onClick={toggleMenu}
            className={cn("cursor-pointer", isSmall ? "block" : "hidden")}
          />
        </div>
      </div>
    </nav>
  );
};
