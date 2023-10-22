import { useContext, useRef, useEffect } from "react"

import ShopContext from "@utilities/shop_context"
import useGameLoop from "@utilities/use_game_loop"

export default function useAppleGameLoop(): void {
    const {currentApples, changePerSecond, setCurrentApples} = useContext(ShopContext)
    
    
    const currentApplesStore = useRef(currentApples)
    const changePerSecondStore = useRef(changePerSecond)

    useEffect(() => {
        changePerSecondStore.current = changePerSecond
        currentApplesStore.current = currentApples
    }, [changePerSecond, currentApples])

    const last = useRef(0)
    const now = useRef(0)
    const diff = useRef(0)

    useGameLoop((deltaTime) => { 
        now.current += deltaTime
        diff.current = now.current - last.current
        
        if (diff.current >= 200) {
            setCurrentApples(currentApplesStore.current + (changePerSecondStore.current * diff.current / 1000))
            last.current = now.current
        }
    })
}