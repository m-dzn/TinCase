import { Main, MemoPage, TodoPage, VideoPage } from "pages";

const navMenuRoutes = [
    {
        path: "/",
        label: "Home",
        element: <Main />,
    },

    {
        path: "/memo",
        label: "Memo",
        element: <MemoPage />,
    },

    {
        path: "/todo",
        label: "Todo",
        element: <TodoPage />,
    },

    {
        path: "/video",
        label: "Video",
        element: <VideoPage />,
    },
];

export default navMenuRoutes;
