import { createContext, useState, ReactNode } from "react"

import type { ShopItemCounts, ShopItem } from "types"

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
    incrementItem: (item: ShopItem) => void
    setApples: (apples: number | ((apples: number) => number)) => void
}>({
    counts: defaultCounts,
    apples: 0,
    changePerSecond: 0,
    changePerClick: 1,
    incrementItem: () => {},
    setApples: () => {}
})

export const ShopProvider = ({children}: {children: ReactNode}) => {
    const [counts, setCounts] = useState(defaultCounts)
    const [apples, setApples] = useState(0)
    const [changePerSecond, setChangePerSecond] = useState(0)
    const [changePerClick, setChangePerClick] = useState(1)

    const incrementItem = (item: ShopItem) => {
        setCounts({...counts, [item.itemName]: counts[item.itemName] + 1})

        setChangePerSecond(changePerSecond + item.changePerSecond)
        setChangePerClick(changePerClick + item.changePerClick)
    }

    return (
        <ShopContext.Provider value={{ counts, apples, changePerClick, changePerSecond, incrementItem, setApples }}>
            {children}
        </ShopContext.Provider>
    )
}


export default ShopContext
