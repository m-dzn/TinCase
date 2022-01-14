import { Navbar } from "components";
import { authAPI, currentUserState, useLoginNavigate } from "lib";
import React from "react";
import { useRecoilState } from "recoil";

function NavbarContainer() {
    const [me, setMe] = useRecoilState(currentUserState);
    const { askLogout } = useLoginNavigate();

    const handleClickLogoutBtn = async () => {
        askLogout(async () => {
            await authAPI.logout();
            setMe(null);
        });
    };

    return <Navbar user={me} onClickLogoutBtn={handleClickLogoutBtn} />;
}

export default React.memo(NavbarContainer);
