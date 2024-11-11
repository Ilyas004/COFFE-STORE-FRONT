import { useRef, useState } from "react"
import { BuyNavLinks, INavLinks, ReadLinks, WorkLinks } from "./nav_links"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Badge } from "@/shared/ui/badge"

export const NavigationMenu = () => {
    return (
        <nav>
            <ul className="flex gap-3 items-center">
                <li>
                    <NavigationItem title={"Купить"} links={BuyNavLinks}  />
                </li>
                <li>
                        <NavigationItem title={"Отзывы"} />
                </li>
                <li>
                    <NavigationItem title={"Читать"} links={ReadLinks}  />
                </li>
                <li>
                    <NavigationItem title={"Условия работы"} links={WorkLinks}  />
                </li>
            </ul>
        </nav>
    )
}


const onMouseLeaveTimer = (setState: React.Dispatch<React.SetStateAction<boolean>>, timeoutRef: React.MutableRefObject<number | null>) => {
    timeoutRef.current = window.setTimeout(() => {
        setState(false);
    }, 150);
}

const onMouseEnterTimer = (setState: React.Dispatch<React.SetStateAction<boolean>>, timeoutRef: React.MutableRefObject<number | null>) => {
    setState(true);
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // Очищаем таймер при наведении
        timeoutRef.current = null;
    }
};

const NavigationItem = ({links, title}: {title: string, links?: INavLinks[]}) => {
    const timeoutRef = useRef<number | null>(null);
    const [open, isOpen] = useState(false)

    return (
        <div className="relative max-md:hidden" onMouseEnter={() => onMouseEnterTimer(isOpen, timeoutRef)} onMouseLeave={() => onMouseLeaveTimer(isOpen, timeoutRef)}>
            <div className={`flex gap-2 items-center transition duration-300 active:bg-black/10 rounded-xl px-4 py-2 cursor-pointer ${open && 'bg-black/5'}`}>
                <p className="font-medium">
                    {title}
                </p>

                <ChevronDown size={15} className={`transition duration-300 ${open && 'rotate-180'} ${!links && 'hidden'}`}/>
            </div>

            { links && (
                <div  
                    onMouseEnter={() => onMouseEnterTimer(isOpen, timeoutRef)} onMouseLeave={() => onMouseLeaveTimer(isOpen, timeoutRef)}
                    className={`absolute top-12 border min-w-52 bg-white p-3 grid gap-1 rounded-lg shadow-xl transition duration-300 opacity-0  ${open && 'opacity-100' || 'pointer-events-none'}`}>
                    {links.map((item) => (
                        <Link 
                            onClick={() => isOpen(prev => false)}
                            key={item.title} 
                            href={item.href} 
                            className="text-sm transition duration-300 px-3 py-1 rounded-xl hover:bg-black/5 text-gray-500 hover:text-black">{item.title}</Link>
                    ))}
                </div>
            )}
        </div>
    )
}