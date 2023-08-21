import ItemName from "types/item_name"

export class ShopItem {
    readonly itemName: ItemName
    readonly initialPrice: number
    readonly countMultiplier: number
    readonly changePerSecond: number
    readonly changePerClick: number

    constructor(
        { itemName, initialPrice, countMultiplier, changePerClick, changePerSecond }: 
        { itemName: ItemName, initialPrice: number, countMultiplier: number, changePerClick: number, changePerSecond: number }
        ) {
        this.itemName = itemName
        this.initialPrice = initialPrice
        this.countMultiplier = countMultiplier
        this.changePerClick = changePerClick
        this.changePerSecond = changePerSecond
    }

    getPrice(count: number): number { 
        return this.initialPrice + count * this.countMultiplier 
    }
}

export const farmer = new ShopItem({
    itemName: "Farmer",
    initialPrice: 15,
    countMultiplier: 5,
    changePerClick: 0.05,
    changePerSecond: 0.2
})

export const backyardTree = new ShopItem({
    itemName: "Backyard Tree",
    initialPrice: 300,
    countMultiplier: 20,
    changePerClick: 0.3,
    changePerSecond: 7
})

export const appleFarm = new ShopItem({
    itemName: "Apple Farm",
    initialPrice: 7000,
    countMultiplier: 300,
    changePerClick: 2,
    changePerSecond: 50
})
