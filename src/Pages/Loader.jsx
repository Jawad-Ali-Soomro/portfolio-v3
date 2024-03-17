import React from "react";
import Typed from "typed.js";

const Loader = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome", "To", "my", "portfolio"],
      typeSpeed: 30,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="loader flex">
      <h1 ref={el}></h1>
    </div>
  );
};

export default Loader;
