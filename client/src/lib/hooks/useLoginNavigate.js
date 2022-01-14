const { PATH } = require("constants");
const { useNavigate } = require("react-router-dom");

function useLoginNavigate() {
    const navigate = useNavigate();

    const checkLoggedIn = (isLoggedIn, options) => {
        if (!!!isLoggedIn) {
            alert("로그인이 필요한 서비스입니다.");
            navigate(PATH.CLIENT.LOGIN, options);
        }

        return isLoggedIn;
    };

    const askLogout = (confirmedFn) => {
        if (window.confirm("정말 로그아웃하시겠습니까?")) {
            confirmedFn();

            navigate(PATH.CLIENT.HOME);
        }
    };

    return {
        checkLoggedIn,
        askLogout,
    };
}

export default useLoginNavigate;
