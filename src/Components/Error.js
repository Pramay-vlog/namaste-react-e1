import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log("🚀 ~ Error ~ err:", err)
  return (<div>
    <h1>Error</h1>
    <h1>{err.status}: {err.statusText}</h1>
  </div>);
}

export default Error;
