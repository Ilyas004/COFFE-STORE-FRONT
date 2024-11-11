import { ProductCard } from "@/entities/product_card/ui/product_card"
import { Cover } from "@/widget/cover/ui/cover"
import { SortWeek } from "@/widget/sort_week/ui/sort_week"

export const HomeScreen = () => {
    return (
        <div>
          <Cover />
          <SortWeek />
        </div>
    )
}