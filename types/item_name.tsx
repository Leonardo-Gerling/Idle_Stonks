const items = ["Farmer", "Backyard Tree", "Apple Farm"] as const

type ItemName = typeof items[number]

export default ItemName