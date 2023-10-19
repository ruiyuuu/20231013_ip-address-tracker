import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

export default function spinners({ loadingRef }) {
  return (
    <div className="mask d-none" ref={loadingRef}>
      <ClipLoader color={"#36d7b7"} size={150} className="spinners" />
    </div>
  );
}
