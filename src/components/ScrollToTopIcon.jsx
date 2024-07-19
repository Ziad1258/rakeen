import React from 'react';
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopIcon() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            aria-label="Scroll to top"
            className=" w-12 h-12 rounded-md flex justify-center items-center bg-primary text-white fixed right-5 bottom-5 z-10 cursor-pointer hover:bg-black transition-colors"
            onClick={handleClick}
        >
            <FaArrowUp size={18} />
        </button>
    );
}

export default ScrollToTopIcon;
