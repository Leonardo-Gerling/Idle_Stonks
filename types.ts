const items = ["Apple Farmer", "Apple Tree", "Apple Farm", "Apple Factory", "Apple Laboratory"] as const

export type ItemName = typeof items[number]

export type ShopItemCounts = {[key in ItemName]: number}

export type ShopItemList = [
    ["Apple Farmer", number],
    ["Apple Tree", number],
    ["Apple Farm", number],
    ["Apple Factory", number],
    ["Apple Laboratory", number]
]

export type DefaultData = {
    "currentApples": number,
    "cumulApples": number,
    "counts": ShopItemCounts,
    "changePerClick": number,
    "changePerSecond": number
}

export type { ShopItem } from "@utilities/shop_items"

export type WeatherData = {
    data: {
        time: string
        values: {
            cloudBase: number
            cloudCeiling: number
            cloudCover: number
            dewPoint: number
            freezingRainIntensity: number
            humidity: number
            precipitationProbability: number
            pressureSurfaceLevel: number
            rainIntensity: number
            sleetIntensity: number
            snowIntensity: number
            temperature: number
            temperatureApparent: number
            uvHealthConcern: number
            uvIndex: number
            visibility: number
            weatherCode: number
            windDirection: number
            windGust: number
            windSpeed: number
        }
    },

    location: {
        lat: number
        lon: number
        name?: string
        type?: string
    }
}