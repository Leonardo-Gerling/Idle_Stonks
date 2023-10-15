import useAppleGameLoop from "@utilities/use_apple_game_loop"
import useSaveGameLoop from "@utilities/use_save_game_loop"

export default function useAppleGame(): void {
    useAppleGameLoop()
    useSaveGameLoop()
}