import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react"

import ItemName from "types/item_name"
import ShopItemCounts from "types/shop_item_counts"

const defaultCounts: ShopItemCounts = {
    "Farmer": 0,
    "Backyard Tree": 0,
    "Apple Farm": 0
}

const ShopContext = createContext<{counts: ShopItemCounts, increment: (item: ItemName) => void}>({
    counts: defaultCounts,
    increment: () => {}
})

export const ShopProvider = ({children}: {children: ReactNode}) => {
    const [counts, setCounts] = useState<ShopItemCounts>(defaultCounts)

    const increment = (item: ItemName) => {
        setCounts({...counts, [item]: counts[item] + 1})
    }

    return (
        <ShopContext.Provider value={{ counts, increment }}>
            {children}
        </ShopContext.Provider>
    )
}


export default ShopContext
