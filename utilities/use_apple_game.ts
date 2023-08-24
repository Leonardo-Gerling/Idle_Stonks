import { useContext } from "react"

import ShopContext from "@utilities/shop_context"
import useGameLoop from "@utilities/use_game_loop"

export default function useAppleGame(): () => void {
    const { apples, changePerSecond, setApples } = useContext(ShopContext)

    useGameLoop((deltaTime) => {
        setApples(apples + changePerSecond * deltaTime / 1000)
    })

    return () => cancelAnimationFrame(0)
}
