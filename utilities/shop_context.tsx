import { createContext, useState, ReactNode } from "react"

import type { ShopItemCounts, ShopItem, DefaultData } from "types"
import { setCookie } from "@utilities/cookie"

const defaultCounts: ShopItemCounts = {
    "Farmer": 0,
    "Backyard Tree": 0,
    "Apple Farm": 0
} as const

const ShopContext = createContext<{
    counts: ShopItemCounts, 
    apples: number,
    changePerSecond: number,
    changePerClick: number,
    incrementItem: (item: ShopItem, num: number) => void,
    setApples: (apples: number) => void,
    updateDataCookie: () => void
}>({
    counts: defaultCounts,
    apples: 0,
    changePerSecond: 0,
    changePerClick: 1,
    incrementItem: () => {},
    setApples: () => {},
    updateDataCookie: () => {}
})

export const ShopProvider = ({children}: {children: ReactNode}) => {
    const [counts, setCounts] = useState(defaultCounts)
    const [apples, setApples] = useState(0)
    const [changePerSecond, setChangePerSecond] = useState(0)
    const [changePerClick, setChangePerClick] = useState(1)

    const incrementItem = (item: ShopItem, num: number) => {
        setCounts({...counts, [item.itemName]: counts[item.itemName] + num})

        setChangePerSecond(changePerSecond + (item.changePerSecond * num))
        setChangePerClick(changePerClick + (item.changePerClick * num))
    }

    const updateDataCookie = () => {
        const saveData: DefaultData = {
            "apples": apples,
            "counts": counts,
            "changePerClick": changePerClick,
            "changePerSecond": changePerSecond
        }
    
        const data = JSON.stringify(saveData)
    
        setCookie("data", data)
    }

    return (
        <ShopContext.Provider value={{ counts, apples, changePerClick, changePerSecond, incrementItem, setApples, updateDataCookie }}>
            {children}
        </ShopContext.Provider>
    )
}


export default ShopContext
