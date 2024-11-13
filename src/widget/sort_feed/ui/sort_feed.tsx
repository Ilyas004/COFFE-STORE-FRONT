'use client'

import { Block } from "@/shared/ui/Block"
import Link from "next/link"
import styles from './sort_feed.module.scss'
import { ProductCard } from "@/entities/product_card/ui/product_card"
import { useState } from "react"
import { ButtonGroup } from "@/features/button_group/ui/button_group"
import { ShoppingBasket } from "lucide-react"
import { coffePageRoute } from "@/utils/constant"


const list = [1, 2, 3]

const categories = [
    'Новое',
    'Популярное'
]

export const SortFeed = () => {


    return (
        <Block className="grid gap-10">
            <ButtonGroup categories={categories}  />

            <div className="flex flex-wrap xs:justify-between justify-center max-xs:gap-5  items-stretch">
                { list.map(() => 
                    <ProductCard />
                )}
            </div>

            <div className="flex justify-center mb-10">
                <Link href={coffePageRoute} className="flex gap-2 items-center text-sm font-semibold">
                    <ShoppingBasket />
                    <p>Посмотреть весь кофе</p>
                </Link>
            </div>
        </Block>
    )
}