import React from "react";
import { FloatingButton } from "components";
import { BsArrowUpCircle } from "react-icons/bs";

function ScrollToTop() {
    const onScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return <FloatingButton icon={BsArrowUpCircle} onClick={onScrollTop} />;
}

export default ScrollToTop;
