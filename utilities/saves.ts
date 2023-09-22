import { getCookie, setCookie } from "@utilities/cookie"

export function exportSave() {
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

export function importSave() {
    const input = document.createElement("input")

    input.type = "file"
    input.accept = ".json"
    input.onchange = () => {
        if (!input.files) return

        const reader = new FileReader()

        reader.onload = (e) => {
            const data = e.target?.result
            console.log(data)
            console.log(JSON.stringify(data))
            setCookie("data", JSON.stringify(data)) 
            setCookie("import-loaded", "false")
            window.location.reload()
        }

        reader.readAsText(input.files[0])
    }

    input.click()
    input.remove()
}