import { Main, SignIn, SignUp, TestPage } from "pages";

const routes = [
    {
        path: "/",
        label: "Home",
        element: <Main />,
        nav: true,
    },

    {
        path: "/deck/:deckId",
        element: <TestPage />,
        nav: false,
    },

    {
        path: "/deck/:deckId/card/:cardId",
        element: <TestPage />,
        nav: false,
    },

    {
        path: "/signin",
        label: "Sign In",
        element: <SignIn />,
        nav: true,
    },

    {
        path: "/signup",
        label: "Sign Up",
        element: <SignUp />,
        nav: true,
    },
];

export default routes;
