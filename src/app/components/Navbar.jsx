import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="bg-red-500 mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center mx-4">
            <Image src="/myLogo.svg" alt="myLogo" width={40} height={40} />
        </div>

        <div className="flex items-center mx-5">
            <FaInstagram className="text-white text-2xl mx-2" />
            <FaLinkedinIn className="text-white text-2xl mx-2" />
            <FaGithub className="text-white text-2xl mx-2" />
        </div>  
    </nav>
  )
}
