import { useRef, useEffect } from "react"

export default function useGameLoop(callback: (deltaTime: number) => void): void {
    const requestRef = useRef<number>()
    const previousTimeRef = useRef<number>()

    const animate = (time: number) => {
        if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current
            callback(deltaTime)
        }
        previousTimeRef.current = time
        requestRef.current = requestAnimationFrame(animate)
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(requestRef.current!)
    }, [])
}
