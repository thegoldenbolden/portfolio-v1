import Link from "next/link";

const NotFound = () => {
 return (
  <div className="grid w-screen h-screen place-content-center">
   <div className="flex flex-col items-center justify-center gap-2">
    <h1 className="text-3xl font-bold">Page Not Found</h1>
    <Link href="/" className="underline">
     Back Home
    </Link>
   </div>
  </div>
 );
};

export default NotFound;
