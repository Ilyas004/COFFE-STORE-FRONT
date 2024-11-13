'use client'

import { Progress } from "@/shared/ui/progress"
import { Heart, MessageSquare, Star } from "lucide-react"
import Image from "next/image"
import styles from "./product_card.module.scss"
import { Counter } from "@/entities/counter/ui/counter"
import { Button } from "@/shared/ui/button"

const image = 'https://coffee-static.storage.yandexcloud.net/files/shares/data/product/1731155793.9431-kenya-mutai-peaberry-250-full.png'

const title = 'Сочный кофе с нотами вишнёвого джема, красной смородины и тёмного шоколада'

export const ProductCard = () => {
    return (
        <div className={styles.cardBox}>
           
            <div className="flex gap-4 items-center mb-7">
                <div className={styles.topButton}>
                    <Star size={18}/>
                    <p>5</p>
                </div>
                <div className={styles.topButton}>
                    <MessageSquare size={18} />
                    <p>5</p>
                </div>
                <Heart size={18} className={styles.topButton}/>
            </div>

            <div className="flex flex-col items-center justify-center mb-3">
                <p className={styles.textContent}>для экспрессо</p>
                <p className="font-semibold text-xl">Кения Мутаи Пиберри</p>
                <p className={styles.textContent}>Мытый</p>

                <Image loader={() => image} width={185} height={185} src={"img.png"} alt={""} />

                <p className={styles.textTovar}>{title}</p>

            </div>
                <div className="flex justify-between gap-4 mb-[10px]">
                    <div className="w-[123px]">
                        <Progress value={33} className={styles.progress}/>
                        <p className={styles.textContent}>Кислотность</p>
                    </div>

                    <div className="w-[123px]">
                        <Progress value={60} className={styles.progress}/>
                        <p className={styles.textContent}>Плотность</p>
                    </div>
                </div>

                <div className="flex justify-end mb-4">
                    <Counter />
                </div>

                <div className="absolute bottom-0 left-0 px-[30px] pb-[30px] w-full flex justify-between items-center">
                    <div>
                        <p className="text-xs text-gray-500 select-none">250 г</p>
                        <p className="text-[13px] font-medium select-none">669 ₽</p>
                    </div>
                    
                    <Button className="rounded-full">
                        Купить
                    </Button>
                </div>
        </div>
    )
}
