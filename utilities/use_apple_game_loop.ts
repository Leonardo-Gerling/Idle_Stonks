import { useContext, useRef, useEffect } from "react"

import ShopContext from "@utilities/shop_context"
import useGameLoop from "@utilities/use_game_loop"
import { getCookie, setCookie } from "./cookie"
import { DefaultData } from "types"
import { farmer, backyardTree, appleFarm } from "./shop_items"

export default function useAppleGameLoop(): void {
    const {apples, changePerSecond, counts, setApples, incrementItem, updateDataCookie} = useContext(ShopContext)
    
    
    const applesStore = useRef(apples)
    const changePerSecondStore = useRef(changePerSecond)

    useEffect(() => {
        changePerSecondStore.current = changePerSecond
        applesStore.current = apples
    }, [changePerSecond, apples])

    const last = useRef(0)
    const now = useRef(0)
    const diff = useRef(0)

    useGameLoop((deltaTime) => { 
        now.current += deltaTime
        diff.current = now.current - last.current
        
        if (diff.current >= 200) {
            if (getCookie("import-loaded") === "false") {
                const data = getCookie("data")

                console.log(data)
                console.log(typeof data)
                console.log(JSON.parse(data))
                console.log(typeof JSON.parse(data))
                // console.log(data.counts)
                // console.log(data["counts"])

                // setApples(data["apples"])
                // incrementItem(farmer, data["counts"]["Farmer"] - counts["Farmer"])
                // incrementItem(backyardTree, data["counts"]["Backyard Tree"] - counts["Backyard Tree"])
                // incrementItem(appleFarm, data["counts"]["Apple Farm"] - counts["Apple Farm"])
                
                setCookie("import-loaded", "true")
                updateDataCookie()
            } 

            else {
                setApples(applesStore.current + (changePerSecondStore.current * diff.current / 1000))
            }

            last.current = now.current
        }
    })
}