import { useState, useEffect } from "react";

function useScrollObserver(ref, options) {
    const [entry, setEntry] = useState();

    const isIntersecting = entry?.isIntersecting;

    const updateEntry = (entries) => {
        const [entry] = entries;
        console.log(entry);

        setEntry(entry);
    };

    useEffect(() => {
        const target = ref?.current;

        if (isIntersecting || !target) return;

        const observer = new IntersectionObserver(updateEntry, options);
        observer.observe(target);

        return () => {
            observer.disconnect();
        };
    }, [
        ref,
        options.root,
        options.rootMargin,
        options.threshold,
        isIntersecting,
    ]);

    return entry;
}

export default useScrollObserver;
