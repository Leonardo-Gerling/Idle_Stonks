import ItemName from "types/item_name"

export class ShopItem {
    readonly itemName: ItemName
    readonly initialPrice: number
    readonly getPrice: (price: number) => number

    constructor(itemName: ItemName, initialPrice: number, getPrice: (price: number, initialPrice: number) => number) {
        this.itemName = itemName
        this.initialPrice = initialPrice
        this.getPrice = (price: number) => getPrice(price, this.initialPrice) 
    }
}

export const farmer = new ShopItem(
    "Farmer",
    15,
    (count, initialPrice) => initialPrice + count * 5
)

export const backyardTree = new ShopItem(
    "Backyard Tree",
    300,
    (count, initialPrice) => initialPrice + count * 20
)

export const appleFarm = new ShopItem(
    "Apple Farm",
    7000,
    (count, initialPrice) => initialPrice + count * 300
)
