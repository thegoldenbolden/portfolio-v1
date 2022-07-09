import Image from "next/image";
import { useState } from "react";

const CustomImage = (props) => {
 const [src, setSrc] = useState(props.src);
 return <Image {...props} src={src} alt={props.alt || ""} onError={() => setSrc("/projects/unknown.png")} />;
};

export default CustomImage;
