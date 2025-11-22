"use client";

import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useEffectEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { CiInstagram, CiMail, CiMobile3 } from "react-icons/ci";
import logo from "@/assets/logo/nls-logo.svg";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";

const Header = () => {
  const [hambActive, setHambActive] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const path = usePathname();

  const hamb = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleHambClick = () => {
      setHambActive((prevState) => {
        const newState = !prevState;

        if (newState) {
          if (hamb.current) {
            hamb.current.classList.add("open");
          }
          setShowSidebar(true);
        } else {
          if (hamb.current) {
            hamb.current.classList.remove("open");
          }
          setShowSidebar(false);
        }

        return newState;
      });
    };

    const currentHamb = hamb.current;

    if (currentHamb) {
      currentHamb.addEventListener("click", handleHambClick);
    }

    return () => {
      if (currentHamb) {
        currentHamb.removeEventListener("click", handleHambClick);
      }
    };
  }, []);

  const removeSidebar = useEffectEvent(() => {
    setShowSidebar(false);
    setHambActive(false);
  });

  useEffect(() => {
    removeSidebar();
    if (hamb.current) {
      hamb.current.classList.remove("open");
    }
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className="flex flex-row justify-between items-center px-8 lg:px-12 xl:px-30 py-5 bg-linear-to-t from-theme1/20 to-transparent">
      <Link href="/">
        <Image
          className=""
          src={logo}
          alt="NLS Tech logo"
          width={90}
          height={90}
        />
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex items-center lg:gap-8 xl:gap-20">
          <li>
            <Link
              href="/"
              className="text-heading1 relative cursor-pointer font-mont text-xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-theme1 after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5  before:bg-theme1 before:transition-all before:duration-300"
            >
              Naslovnica
            </Link>
          </li>
          <li>
            <Link
              href="/galerija"
              className="text-heading1 relative cursor-pointer font-mont text-xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-theme1 after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5  before:bg-theme1 before:transition-all before:duration-300"
            >
              Galerija
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className="text-heading1 relative cursor-pointer font-mont text-xl font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:right-full hover:after:right-1/2 after:h-0.5 inline-block after:bg-theme1 after:transition-all after:duration-300
							before:absolute before:top-full before:right-0 before:left-full hover:before:left-1/2 before:h-0.5  before:bg-theme1 before:transition-all before:duration-300"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>

      <div className="hidden flex-col  lg:flex gap-2">
        <a
          href="tel:+385 99 312 4867"
          className="text-heading1 flex cursor-pointer items-center gap-1 text-xl font-semibold tracking-wider capitalize xl:gap-[15px]"
        >
          <CiMobile3 className="text-heading1 text-2xl ml-[-3px]" />
          <span className="after:bg-theme1 inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-mont">
            099 312 4867
          </span>
        </a>

        <a
          href="mailto:info@nlstech.pro"
          className="text-heading1 flex cursor-pointer items-center gap-1 text-xl font-semibold tracking-wider capitalize xl:gap-3"
        >
          <CiMail className="text-heading1 text-2xl" />
          <span className="after:bg-theme1 inline-block relative after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 font-mont">
            info@nlstech.pro
          </span>
        </a>
      </div>
      {/* ------------------mobile navigation---------------------------- */}
      <div className=" ml-auto block  lg:hidden">
        <div id="nav-icon1" className="relative z-50 cursor-pointer" ref={hamb}>
          <span className="bg-theme1"></span>
          <span className="bg-theme1"></span>
          <span className="bg-theme1"></span>
        </div>
      </div>
      <nav
        className={cn(
          "xxsm:w-[260px] from-theme1 to-theme1/80 fixed top-[130px] bottom-0 left-0 z-50 flex w-[300px] flex-col justify-between bg-linear-to-tr py-12 shadow-lg transition-all duration-300 sm:w-[330px] lg:hidden",
          scrolled ? "top-0" : "top-[130px]",
          showSidebar ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <ul className="flex flex-col gap-6 text-2xl">
          <li className="w-full">
            <Link
              href="/"
              className="relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-white capitalize"
            >
              Naslovnica
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/galerija"
              className="relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-white capitalize"
            >
              Galerija
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/kontakt"
              className="relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-white capitalize"
            >
              Kontakt
            </Link>
          </li>
        </ul>

        <div className="flex flex-col gap-5">
          <div className="px-3 py-1 transition-all duration-500">
            <a
              href="tel:+385 99 312 4867"
              className="flex cursor-pointer items-center gap-2 text-xl tracking-wider text-white capitalize"
            >
              <CiMobile3 className="text-3xl text-white" />
              099 312 4867
            </a>
          </div>
          <div className="px-3 py-1 transition-all duration-500">
            <a
              href="mailto:info@nlstech.pro"
              className="flex cursor-pointer items-center gap-2 text-xl tracking-wider text-white"
            >
              <CiMail className="text-3xl text-white" />
              info@nlstech.pro
            </a>
          </div>

          <a
            href="https://www.instagram.com/nlstechzadar/"
            target="_blank"
            aria-label="Visit NLS Tech on Instagram - sidebar link"
            className="px-3 py-1 transition-all duration-500"
          >
            <CiInstagram className="text-3xl text-white" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
