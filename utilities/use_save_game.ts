import { useContext, useRef } from "react"

import ShopContext from "@utilities/shop_context"
import { setCookie } from "@utilities/cookie"
import useGameLoop from "@utilities/use_game_loop"
import type { ShopItemCounts } from "types"

export default function useSaveGame(exportFile: boolean = false): void {
    const { apples, counts, changePerClick, changePerSecond } = useContext(ShopContext)

    const last = useRef(0)
    const now = useRef(0)
    const diff = useRef(0)

    const data = useRef("")
    const saveData = useRef<{[key: string]: number | ShopItemCounts}>()

    useGameLoop((deltaTime) => { 
        now.current += deltaTime
        diff.current = now.current - last.current

        saveData.current = {
            "apples": apples,
            "counts": counts,
            "changePerClick": changePerClick,
            "changePerSecond": changePerSecond
        }

        data.current = JSON.stringify(saveData.current)

        if (exportFile) {
            let url = URL.createObjectURL(
                new Blob([data.current], { type: "text/plain" })
            )

            let link = document.createElement("a")
            link.download = "idle_stonks.save.json"
            link.href = url
            link.click()
            link.remove()

            return
        }
        
        if (diff.current >= 300000) {
            setCookie("data", data.current)
            last.current = now.current
        }
    })
}
