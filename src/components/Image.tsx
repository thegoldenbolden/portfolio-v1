import Image, { ImageProps } from "next/future/image";
import { useState } from "react";

const CustomImage = (props: ImageProps) => {
 const [src, setSrc] = useState(props.src);
 return (
  <Image
   width={props.width || 1920}
   height={props.height || 955}
   src={src}
   alt={props.alt || ""}
   onError={() => setSrc("/projects/unknown.png")}
  />
 );
};

export default CustomImage;
