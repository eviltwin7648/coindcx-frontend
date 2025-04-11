// components/Navbar.tsx
import React from "react";
import { Button } from "@/components/ui/button"; // Or replace with plain <button> if needed

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#FFFFFF99] backdrop-blur-md   ">
      <div className="mx-48 p-4 flex justify-between items-center ">
      <img
        
        src="https://coindcx.com/wp-content/uploads/2024/02/coindcx-logo.svg"
        alt="logo"
        className="h-6"
        />
      <ul className="hidden md:flex space-x-6  font-semibold">
        <li className="cursor-pointer  hover:text-[#4965d2]">Trade</li>
        <li className="cursor-pointer hover:text-[#4965d2]">Future</li>
        <li className="cursor-pointer hover:text-[#4965d2]">Learn</li>
        <li className="cursor-pointer hover:text-[#4965d2]">Business</li>
        <li className="cursor-pointer hover:text-[#4965d2]">About Us</li>
        <li className="cursor-pointer hover:text-[#4965d2]">Support</li>
      </ul>
      <div className="flex items-center space-x-2">
        <Button className="bg-[#4965d2] text-white font-semibold hover:bg-[#3f58b3]">
          Create Account
        </Button>
        <Button className="bg-[#f0f2fb] text-[#4965d2] font-semibold  hover:bg-[#dce0f5]">
          Login
        </Button>
      </div>
        </div>
    </nav>
  );
};

export default Navbar;
