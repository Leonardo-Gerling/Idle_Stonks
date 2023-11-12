import { useEffect, useState } from "react";

export default function useMediaQuery(query: string): boolean {
	const getMatches = (query: string): boolean => {
		if (typeof window !== "undefined") {
			return window.matchMedia(query).matches;
		}
		return false;
	};

	const [matches, setMatches] = useState(false); // Instead of useState<boolean>(getMatches(query))

	useEffect(() => {
		const matchMedia = window.matchMedia(query);
		const handleChange = () => setMatches(getMatches(query));

		handleChange();

		matchMedia.addEventListener("change", handleChange);

		return () => matchMedia.removeEventListener("change", handleChange);
	}, [query]);

	return matches;
}
