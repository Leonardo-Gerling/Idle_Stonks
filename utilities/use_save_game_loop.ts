import { useContext, useRef } from "react"

import ShopContext from "@utilities/shop_context"
import useGameLoop from "@utilities/use_game_loop"

export default function useSaveGameLoop(): void {
    const {updateCookie} = useContext(ShopContext)

    const last = useRef(0)
    const now = useRef(0)
    const diff = useRef(0)

    useGameLoop((deltaTime) => { 
        now.current += deltaTime
        diff.current = now.current - last.current
        
        if (diff.current >= 300000) {
            updateCookie()
            last.current = now.current
        }
    })
}
