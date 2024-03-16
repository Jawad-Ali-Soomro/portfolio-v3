import React from "react";
import { DNA } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader flex col">
      <DNA
        visible={true}
        height="300"
        width="300"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <h1>
        <span>Loa</span>ding
      </h1>
    </div>
  );
};

export default Loader;
