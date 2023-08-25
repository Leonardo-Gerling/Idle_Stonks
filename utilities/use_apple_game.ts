import { useContext, useRef, useEffect } from "react"

import ShopContext from "@utilities/shop_context"
import useGameLoop from "@utilities/use_game_loop"

export default function useAppleGame(): void {
    const {changePerSecond, setApples} = useContext(ShopContext)
    
    const changePerSecondStore = useRef(changePerSecond)

    useEffect(() => {
        changePerSecondStore.current = changePerSecond
    }, [changePerSecond])

    const last = useRef(0)
    const now = useRef(0)
    const diff = useRef(0)

    useGameLoop((deltaTime) => { 
        now.current += deltaTime
        diff.current = now.current - last.current
        
        if (now.current - last.current >= 200) {
            setApples((prevApples: number) => prevApples + (changePerSecondStore.current * diff.current / 1000))
            last.current = now.current
        }
    })
}
