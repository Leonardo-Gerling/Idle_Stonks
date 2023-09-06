import { getCookie } from "@utilities/cookie"

export default function exportSave() {
    const data = getCookie("data")

    const url = URL.createObjectURL(
        new Blob([data], { type: "text/plain" })
    )
    const link = document.createElement("a")

    link.download = "idle_stonks.save.json"
    link.href = url
    link.click()
    link.remove()
}