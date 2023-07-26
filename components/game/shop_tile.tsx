import { ReactElement, useState } from "react";

interface ShopTileProps {
    className?: string,
    itemName: string
    initialPrice: number
    setPriceMethod: Function
}

export default function ShopTile({ className, itemName, initialPrice, setPriceMethod }: ShopTileProps): ReactElement {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(initialPrice);

    return (
        <button className="h-24" onClick={() => { setCount(count + 1); setPrice(setPriceMethod(price)) }}>
            {itemName} costs {price}. You currently have {count}.
        </button>
    )
}