import { PATH } from "constants";
import { Main, LoginPage, JoinPage, TestPage, MyPage } from "pages";

const { CLIENT } = PATH;

const routes = [
    {
        nav: true,
        path: CLIENT.HOME,
        label: "Home",
        element: <Main />,
    },

    {
        nav: true,
        path: CLIENT.LOGIN,
        label: "Login",
        element: <LoginPage />,
        isLoggedIn: false,
    },

    {
        nav: true,
        path: CLIENT.JOIN,
        label: "Join",
        element: <JoinPage />,
        isLoggedIn: false,
    },

    {
        nav: true,
        path: CLIENT.MY_PAGE,
        label: "MyPage",
        element: <MyPage />,
        isLoggedIn: true,
        private: true,
    },

    {
        nav: false,
        path: `${CLIENT.DECK}`,
        element: <TestPage />,
    },

    {
        nav: false,
        path: CLIENT.CARD_IN_DECK,
        element: <TestPage />,
    },
];

export default routes;
