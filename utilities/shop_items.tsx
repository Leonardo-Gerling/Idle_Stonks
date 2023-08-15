import ItemName from "types/item_name"

export class ShopItem {
    readonly itemName: ItemName
    readonly initialPrice: number
    readonly setPriceMethod: (price: number) => number

    constructor(itemName: ItemName, initialPrice: number, setPriceMethod: (price: number) => number) {
        this.itemName = itemName
        this.initialPrice = initialPrice
        this.setPriceMethod = setPriceMethod
    }
}

export const farmer = new ShopItem(
    "Farmer",
    15,
    (price: number) => price + 5
)

export const backyardTree = new ShopItem(
    "Backyard Tree",
    300,
    (price: number) => price + 20
)

export const appleFarm = new ShopItem(
    "Apple Farm",
    7000,
    (price: number) => price + 300
)
