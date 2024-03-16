import React from "react";
import { Vortex } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader flex col">
      <Vortex
        visible={true}
        height="300"
        width="300"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={[
          "orange",
          "orange",
          "orange",
          "orange",
          "orange",
          "orange",
          "orange",
        ]}
      />
      <h1>
        <span>Loa</span>ding
      </h1>
    </div>
  );
};

export default Loader;
