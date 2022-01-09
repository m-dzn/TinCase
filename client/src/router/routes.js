import { PATH } from "constants";
import { Main, LoginPage, JoinPage, TestPage } from "pages";

const { CLIENT } = PATH;

const routes = [
    {
        path: CLIENT.HOME,
        label: "Home",
        element: <Main />,
        nav: true,
    },

    {
        path: CLIENT.DECK,
        element: <TestPage />,
        nav: false,
    },

    {
        path: CLIENT.CARD_IN_DECK,
        element: <TestPage />,
        nav: false,
    },

    {
        path: CLIENT.LOGIN,
        label: "Login",
        element: <LoginPage />,
        nav: true,
    },

    {
        path: CLIENT.JOIN,
        label: "Join",
        element: <JoinPage />,
        nav: true,
    },
];

export default routes;
