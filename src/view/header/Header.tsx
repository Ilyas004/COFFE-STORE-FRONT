'use client'

import Image from "next/image"
import Logo from "@/assets/images/Logo.png"
import Link from "next/link"
import { Block } from "@/shared/ui/Block"
import { Button } from "@/shared/ui/button"
import { Heart, Search, ShoppingCart } from "lucide-react"
import React from "react"
import { NavigationMenu } from "./navigation_menu"

export const Header = () => {
    return (
        <Block className="py-5" backgroudWrapper="">
            <div className="flex justify-between items-center">
                <Link href={"/"}>
                    <Image unoptimized width={100} src={Logo} alt={""} />
                </Link>
                
                <NavigationMenu />
               
                <div className="flex gap-2 text-xs">
                    <Button variant={"outline"} size={"icon"}>
                        <Search />
                    </Button>
                    <Button variant={"outline"} size={"icon"}>
                        <Heart />
                    </Button>
                    <Button variant={"outline"} size={"icon"}>
                        <ShoppingCart />
                    </Button>
                </div>
            </div>
        </Block>
    )
}

