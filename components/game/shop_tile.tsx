import { ReactElement, useState } from "react";

interface ShopTileProps {
    className?: string,
    itemName: string
    initialPrice: number
}

export default function ShopTile({ className, itemName, initialPrice }: ShopTileProps): ReactElement {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(initialPrice);

    return (
        <button className="h-24" onClick={() => { setCount(count + 1); setPrice(price + 5) }}>
            {itemName} costs {price}. You currently have {count}.
        </button>
    )
}