import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { navigation } from "@/utils/data";
import Search from "@/components/Search";

const Navbar = () => {
  return (
    <div className="w-full flex justify-content-center items-center border py-8 bg-white backdrop-filter backdrop-blur-md sticky top-0 bg-opacity-40">
      <div className="container justify-between items-center">
        <Link href="/">
          <Image src="/JnJ.svg" alt="Vercel Logo" width={40} height={14} />
        </Link>
        <div className="flex gap-x-6">
          {navigation.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-roboto uppercase leading-6 text-gray-600 hover:text-gray-900 font-normal ${item.name === "Men" || item.name === "Gifts" ? "font-semibold" : "font-normal"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div>
          <Search />
        </div>
        <div className="flex">
          <button>
            <RiUserLine size={24} color="#000" />
          </button>
          <button>
            <MdOutlineShoppingCart size={24} color="#000" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
