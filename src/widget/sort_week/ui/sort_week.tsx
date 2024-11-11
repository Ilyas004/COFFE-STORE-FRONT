import { ProductCard } from "@/entities/product_card/ui/product_card"
import { Block } from "@/shared/ui/Block"

const list = [1, 2, 3]

export const SortWeek = () => {
    return (
        <Block className="grid gap-10">
            <p className="text-2xl font-bold">Сорта недели</p>
            
            <div className="flex flex-wrap xs:justify-between justify-center max-xs:gap-5  items-stretch">
                {list.slice(0,3).map(() =>
                    <ProductCard />
                )}
            </div>
        </Block>
    )
}