import { Navbar } from "components";
import { authAPI, currentUserState } from "lib";
import React from "react";
import { useRecoilState } from "recoil";

function NavbarContainer() {
    const [me, setMe] = useRecoilState(currentUserState);

    const handleClickLogoutBtn = async () => {
        if (window.confirm("정말 로그아웃하시겠습니까?")) {
            await authAPI.logout();
            setMe(null);
        }
    };

    return <Navbar user={me} onClickLogoutBtn={handleClickLogoutBtn} />;
}

export default React.memo(NavbarContainer);
