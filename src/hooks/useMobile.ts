import { useEffect, useState } from "react";

const useMobile = () => {
 const [mobile, setMobile] = useState(false);
 useEffect(() => {
  const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  setMobile(toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem)));
 }, []);
 return mobile;
};

export default useMobile;
