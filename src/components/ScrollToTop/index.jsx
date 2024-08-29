import { useEffect, useState } from "react";
import { ArrowLongUpIcon } from "@heroicons/react/24/solid";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed right-10 bottom-10 z-10">
      <button
        type="button"
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } bg-darkGreen hover:bg-green inline-flex items-center rounded-[100%] p-3 shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2`}
      >
        <ArrowLongUpIcon
          className="h-6 w-6 fill-lightGreen"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};
