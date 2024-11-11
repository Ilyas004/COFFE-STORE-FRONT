'use client'

import Image from "next/image"
import Logo from "@/assets/images/Logo.png"
import Link from "next/link"
import { Block } from "@/shared/ui/Block"
import { Button } from "@/shared/ui/button"
import { Separator } from "@/shared/ui/separator"
import { Heart, Search, ShoppingCart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import React from "react"
import { NavigationMenu } from "./navigation_menu"

export const Header = () => {
    return (
        <>
            <Block className="py-2">
                <div className="flex justify-end items-center gap-3">
                    <Avatar className="w-8 h-8 content-center object-fill">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <p className="cursor-pointer text-sm font-medium">Вход</p>
                    <Link href={""} className="text-sm font-medium">Регистрация</Link>
                </div>
            </Block>
            <Separator />
            <Block className="py-3" backgroudWrapper="">
                <div className="flex justify-between items-center">
                    <Link href={"/"}>
                        <Image unoptimized width={90} src={Logo} alt={""} />
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
        </>
    )
}

