import { useState, useEffect, useCallback } from "react";

function useDeckList(apiFn, defaultPageSize = 4) {
    const [deckList, setDeckList] = useState([]);
    const [pageSize, setPageSize] = useState(defaultPageSize);
    const [page, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchAdditionalDeckList = useCallback(
        async (pageSize, page) => {
            const response = await apiFn({ pageSize, page });
            console.log("useDeckList", response);
            setDeckList((prev) => [...prev, ...response.data]);
            setTotalPages(response.totalPages);
        },
        [apiFn]
    );

    const onFetchMoreDecks = useCallback(() => {
        console.log("onFetchMoreDecks", page, totalPages);
        if (page < totalPages) {
            setPages((prev) => Math.min(prev + 1, totalPages));
        }
    }, [page, totalPages]);

    useEffect(() => {
        fetchAdditionalDeckList(pageSize, page);
    }, [page]);

    return { deckList, page, totalPages, setPageSize, onFetchMoreDecks };
}

export default useDeckList;
