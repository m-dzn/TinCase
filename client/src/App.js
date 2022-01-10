import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { currentUserState, userAPI } from "lib";
import RootRouter from "router";

function App() {
    const setMe = useSetRecoilState(currentUserState);

    useEffect(() => {
        (async () => {
            const data = await userAPI.me();
            setMe(data);
        })();
    }, [setMe]);

    return (
        <>
            <RootRouter />
        </>
    );
}

export default App;
