import Link from "next/link";

const Custom500 = () => {
 return (
  <div className="grid w-screen h-screen place-content-center">
   <div className="flex flex-col items-center justify-center gap-2">
    <h1 className="text-3xl font-bold">Oops, something happened!</h1>
    <Link href="/" className="underline">
     Back Home
    </Link>
   </div>
  </div>
 );
};

export default Custom500;
