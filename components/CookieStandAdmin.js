import Head from "./Head";
import Main from "./main";
import React from "react";

export default function CookieStandAdmin(props) {
  const [numberoflocaton, setnumberoflocaton] = React.useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head />
      <Main
        setnumberoflocaton={setnumberoflocaton}
        numberoflocaton={numberoflocaton}
      />
    </div>
  );
}