
interface BlockProps {
    children: React.ReactNode
    backgroudWrapper?: string
    className?: string
}

export const Block = ({...props}: BlockProps) => {
    return (
        <div className={`${props.backgroudWrapper}`}>
            <div className={`max-w-7xl m-auto px-5 ${props.className}`}>
                {props.children}
            </div>
        </div>
    )
}