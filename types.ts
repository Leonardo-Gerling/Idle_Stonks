const items = ["Farmer", "Backyard Tree", "Apple Farm"] as const

export type ItemName = typeof items[number]

export type ShopItemCounts = {[key in ItemName]: number}