import type { ItemName } from "types"

export class ShopItem {
    readonly itemName: ItemName
    readonly initialPrice: number
    readonly countMultiplier: number
    readonly changePerSecond: number
    readonly changePerClick: number
    readonly emoji: string

    constructor(
        { itemName, initialPrice, countMultiplier, changePerClick, changePerSecond, emoji }: 
        { itemName: ItemName, initialPrice: number, countMultiplier: number, changePerClick: number, changePerSecond: number, emoji: string }
    ) {
        this.itemName = itemName
        this.initialPrice = initialPrice
        this.countMultiplier = countMultiplier
        this.changePerClick = changePerClick
        this.changePerSecond = changePerSecond
        this.emoji = emoji
    }

    getPrice(count: number): number { 
        return this.initialPrice + count * this.countMultiplier 
    }
}

const appleFarmer = new ShopItem({
    itemName: "Apple Farmer",
    initialPrice: 15,
    countMultiplier: 5,
    changePerClick: 0.05,
    changePerSecond: 0.2,
    emoji:"🧑‍🌾"
})

const appleTree = new ShopItem({
    itemName: "Apple Tree",
    initialPrice: 300,
    countMultiplier: 20,
    changePerClick: 0.3,
    changePerSecond: 7,
    emoji:"🌳"
})

const appleFarm = new ShopItem({
    itemName: "Apple Farm",
    initialPrice: 7000,
    countMultiplier: 300,
    changePerClick: 2,
    changePerSecond: 50,
    emoji:"🏡"
})

const appleFactory = new ShopItem({
    itemName: "Apple Factory",
    initialPrice: 25000,
    countMultiplier: 1200,
    changePerClick: 7,
    changePerSecond: 200,
    emoji:"🏭"
})


const shopItems = [appleFarmer, appleTree, appleFarm, appleFactory]
export default shopItems
