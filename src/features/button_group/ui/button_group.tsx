import { useState } from "react"
import styles from './button_group.module.scss'

interface ButtonGroupProps {
    categories: string[]
}

export const ButtonGroup = ({...props}: ButtonGroupProps) => {
    const [item, setItem] = useState(props.categories[0])

    return (
        <div className="flex gap-7"> 
            {props.categories.map((itemCategory, index) =>
                <p 
                key={index} 
                onClick={() => setItem(itemCategory)}  
                className={`${styles.textButton} ${itemCategory === item && styles.active || styles.inactive}`}>
                    {itemCategory}
                </p>
            )}
        </div>
    )
}