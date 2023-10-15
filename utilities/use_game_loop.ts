import { useRef, useEffect } from "react"

export default function useGameLoop(callback: (deltaTime: number) => void): void {
    const requestRef = useRef(0)
    const previousTimeRef = useRef(0)

    const animate = (time: number) => {
        const deltaTime = time - previousTimeRef.current
        
        callback(deltaTime)
            
        previousTimeRef.current = time
        requestRef.current = requestAnimationFrame(animate)
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(requestRef.current!)
    }, [])
}
