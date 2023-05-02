import { useMemo } from "react";
import debounce from "lodash.debounce";

export default function useDebounce() {
	const debouncedHandler = useMemo(() => debounce((fn) => fn(), 300), []);

	return {
		debouncedHandler,
	};
}
