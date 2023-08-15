import { createContext, useState, ReactNode } from "react"

import ItemName from "types/item_name" /* @types funktioniert nicht?? */

const ShopContext = createContext({})

export const ShopProvider = ({children}: {children: ReactNode}) => {
    const [counts, setCounts] = useState<{[key in ItemName]: number}>(
        {
            "Farmer": 0,
            "Backyard Tree": 0,
            "Apple Farm": 0
        }
    )

    const increment = (item: ItemName) => {
        setCounts({...counts, [item]: counts[item] + 1})
    }

    return (
        <ShopContext.Provider value={{ counts, setCounts, increment }}>
            {children}
        </ShopContext.Provider>
    )
}


export default ShopProvider
