import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";


export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
      <Image
    src="/UTM.png"
    alt="UTM"
    width={100}
    height={100}
    className=" flex justify-start"
  />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">

      </NavbarContent>
    </Navbar>
  );
}