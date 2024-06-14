import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center mx-2">
            <Image src="/myLogo.svg" alt="myLogo" width={80} height={80}/>
        </div>

        <div className="flex items-center mx-5 gap-2">
            <FaInstagram className="text-white text-3xl mx-2" />
            <FaLinkedinIn className="text-white text-3xl mx-2" />
            <FaGithub className="text-white text-3xl mx-2" />
        </div>  
    </nav>
  )
}
