import { Cover } from "@/widget/cover/ui/cover"
import { SortFeed } from "@/widget/sort_feed/ui/sort_feed"
import { SortWeek } from "@/widget/sort_week/ui/sort_week"

export const HomeScreen = () => {
    return (
        <div className="grid gap-12">
          <Cover />
          <SortWeek />
          <SortFeed />
        </div>
    )
}