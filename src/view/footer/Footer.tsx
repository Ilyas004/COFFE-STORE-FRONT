import { Block } from "@/shared/ui/Block"
import { CatalogLinks, CompanyLinks, HelpLinks } from "./footer_links"
import Link from "next/link"
import { Button } from "@/shared/ui/button"

const headTextStyle : React.CSSProperties = {
    fontWeight: 500,
    fontSize: '16px',
    marginBottom: '12px'
} 

const linkTextStyle : React.CSSProperties = {
    fontWeight: 400,
    fontSize: '14px',
    color: 'grey'
} 

export const Footer = () => {
    return (
        <Block className="py-6">
            <div className="grid max-lg:gap-5 grid-cols-1 lg:grid-cols-5 items-start">
                <div>
                    <p style={headTextStyle}>ПОМОЩЬ</p>
                    <div className="grid gap-2">

                        { HelpLinks.map((item) => (
                            <Link key={item.title} style={linkTextStyle} href={item.href}>{item.title}</Link>
                        ))}

                    </div>
                </div>

                <div>
                    <p style={headTextStyle}>КОМПАНИЯ</p>
                    <div className="grid gap-2">

                        { CompanyLinks.map((item) => (
                            <Link key={item.title} style={linkTextStyle} href={item.href}>{item.title}</Link>
                        ))}

                    </div>
                </div>

                <div>
                    <p style={headTextStyle}>КАТАЛОГ</p>
                    <div className="grid gap-2">

                        { CatalogLinks.map((item) => (
                            <Link key={item.title} style={linkTextStyle} href={item.href}>{item.title}</Link>
                        ))}

                    </div>
                </div>

                <div className="lg:col-span-2 grid lg:justify-end gap-4">
                    <Link href="tel:88003334980">
                        <p className="text-[25px] font-semibold">8 (800) 333-49-80</p>
                        <p className="text-[15px] text-gray-500 font-light">Бесплатный звонок по России</p>
                    </Link>

                    <div className="flex gap-2">
                        <Button className="bg-blue-400" size={'cirle_icon'}>Tel</Button>
                        <Button className="bg-red-600" size={'cirle_icon'}>YouTB</Button>
                        <Button className="bg-blue-800/80" size={'cirle_icon'}>VK</Button>
                    </div>
                </div>
            </div>
        </Block>
    )
}