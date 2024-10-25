import Menu from "@/Components/Menu";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-full flex">

        <div className="w-[14%] md:w-[8%] lg:w-[16%] ">
          <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 p-4">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="hidden lg:block">SIET</span>
          </Link>
          <Menu/>
        </div>


        <div className="w-[86%] md:w-[92%] lg:w-[84%] bg-[#F7F8FA] overflow-scroll">
          <Navbar/>
          {children}
        </div>
      </div>
    );
 
  }