import { useState, useEffect, useCallback } from "react";
import { deckAPI } from "lib";

function useDeckList() {
    const [deckList, setDeckList] = useState([]);
    const [pageSize, setPageSize] = useState(4);
    const [page, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchAdditionalDeckList = useCallback(async (pageSize, page) => {
        const response = await deckAPI.getDeckList(pageSize, page);
        setDeckList((prev) => [...prev, ...response.data]);
        setTotalPages(response.totalPages);
    }, []);

    const onFetchMoreDecks = useCallback(() => {
        setPages((prev) => Math.min(prev + 1, totalPages));
    }, [totalPages]);

    useEffect(() => {
        fetchAdditionalDeckList(pageSize, page);
    }, [page]);

    return { deckList, page, totalPages, setPageSize, onFetchMoreDecks };
}

export default useDeckList;
