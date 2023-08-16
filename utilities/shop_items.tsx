import ItemName from "types/item_name"

export class ShopItem {
    readonly itemName: ItemName
    readonly initialPrice: number
    readonly countMultiplier: number

    constructor({ itemName, initialPrice, countMultiplier }: { itemName: ItemName, initialPrice: number, countMultiplier: number }) {
        this.itemName = itemName
        this.initialPrice = initialPrice
        this.countMultiplier = countMultiplier
    }

    getPrice(count: number): number { 
        return this.initialPrice + count * this.countMultiplier 
    }
}

export const farmer = new ShopItem({
    itemName: "Farmer",
    initialPrice: 15,
    countMultiplier: 5
})

export const backyardTree = new ShopItem({
    itemName: "Backyard Tree",
    initialPrice: 300,
    countMultiplier: 20
})

export const appleFarm = new ShopItem({
    itemName: "Apple Farm",
    initialPrice: 7000,
    countMultiplier: 300
})
