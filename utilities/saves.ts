import Cookies from "js-cookie"

import { isString } from "@utilities/typeguards"
import { DefaultData } from "types"

export function exportSave() {
    const data = Cookies.get("data")

    if (!isString(data)) return

    const url = URL.createObjectURL(
        new Blob([data], { type: "text/plain" })
    )
    const link = document.createElement("a")

    link.download = "idle_stonks.save.json"
    link.href = url
    link.click()
    link.remove()
}

export function importSave(fromJSON: (data: DefaultData) => void) {
    const input = document.createElement("input")

    input.type = "file"
    input.accept = ".json"
    input.onchange = () => {
        if (!input.files) return

        const reader = new FileReader()

        reader.onload = (e) => {
            const data = e.target?.result

            if (!isString(data)) return

            Cookies.set("data", data)
            fromJSON(JSON.parse(data))
        }

        reader.readAsText(input.files[0])
    }

    input.click()
    input.remove()
}