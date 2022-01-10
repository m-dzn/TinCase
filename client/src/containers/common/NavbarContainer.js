import { Navbar } from "components";
import { authAPI, currentUserState } from "lib";
import React from "react";
import { useRecoilState } from "recoil";

function NavbarContainer() {
    const [me, setMe] = useRecoilState(currentUserState);

    const handleClickLogoutBtn = async () => {
        await authAPI.logout();
        setMe(null);
    };

    return <Navbar user={me} onClickLogoutBtn={handleClickLogoutBtn} />;
}

export default NavbarContainer;
