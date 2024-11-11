export const handlePlusCount = (setState: React.Dispatch<React.SetStateAction<number>>) => {
    setState(prev => ++prev);
}

export const handleMinusCount = (setState: React.Dispatch<React.SetStateAction<number>>) => {
    setState(prev => prev > 1 && --prev || prev);
}

export const handleChangeCounter = (event: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<number>>) => {
    // Преобразуем строку в число перед установкой
    const value = Number(event.target.value);
    
    // Если value не NaN (валидное число), обновляем состояние
    if (!isNaN(value)) {
        setState(value);
    }
};