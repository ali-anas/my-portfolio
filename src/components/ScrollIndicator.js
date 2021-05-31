import React from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = React.useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="ScrollIndicator-progressMainWrapper">
      <div
        className="ScrollIndicator-progressMainStyle"
        style={{ width: `${scrollTop}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
