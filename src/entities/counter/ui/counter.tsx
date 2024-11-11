import { Minus, Plus } from "lucide-react"
import { useState } from "react"
import styles from './counter.module.scss'
import { handleChangeCounter, handleMinusCount, handlePlusCount } from "../config/counter.config";

export const Counter = () => {
    
    const [count, setCount] = useState(1);

    return (
        <div className="flex items-center">
            <div 
                onClick={() => handleMinusCount(setCount)}
                className={styles.button}>
                <Minus size={14} strokeWidth={2.25} className="shrink-0"/>
            </div>

            <input 
                type="text" 
                value={count} 
                onChange={(e) => handleChangeCounter(e, setCount)}
                className={styles.input}/>

            <div 
                onClick={() => handlePlusCount(setCount)}
                className={styles.button}>
                <Plus size={14} strokeWidth={2.25}  className="shrink-0"/>
            </div>
        </div>
    )
}