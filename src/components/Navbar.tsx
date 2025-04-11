import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFFFF99] backdrop-blur-md">
      <div className="px-4 md:mx-48 p-4 flex justify-between items-center">
        <img
          src="https://coindcx.com/wp-content/uploads/2024/02/coindcx-logo.svg"
          alt="logo"
          className="h-6"
        />
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li className="cursor-pointer hover:text-[#4965d2]">Trade</li>
          <li className="cursor-pointer hover:text-[#4965d2]">Future</li>
          <li className="cursor-pointer hover:text-[#4965d2]">Learn</li>
          <li className="cursor-pointer hover:text-[#4965d2]">Business</li>
          <li className="cursor-pointer hover:text-[#4965d2]">About Us</li>
          <li className="cursor-pointer hover:text-[#4965d2]">Support</li>
        </ul>
        
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button className="bg-[#4965d2] text-white font-semibold hover:bg-[#3f58b3]">
            Create Account
          </Button>
          <Button className="bg-[#f0f2fb] text-[#4965d2] font-semibold hover:bg-[#dce0f5]">
            Login
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
  <div className="absolute top-0 left-0 w-full min-h-screen bg-white z-[9999] flex flex-col p-4">    <div className="flex justify-between items-center mb-8">
      <img
        src="https://coindcx.com/wp-content/uploads/2024/02/coindcx-logo.svg"
        alt="logo"
        className="h-6"
      />
      <button onClick={() => setMobileMenuOpen(false)}>
        <X size={24} className="text-gray-700" />
      </button>
    </div>

    <ul className="flex flex-col space-y-6 text-xl font-semibold">
      <li className="cursor-pointer hover:text-[#4965d2] border-b border-gray-100 pb-2">Trade</li>
      <li className="cursor-pointer hover:text-[#4965d2] border-b border-gray-100 pb-2">Future</li>
      <li className="cursor-pointer hover:text-[#4965d2] border-b border-gray-100 pb-2">Learn</li>
      <li className="cursor-pointer hover:text-[#4965d2] border-b border-gray-100 pb-2">Business</li>
      <li className="cursor-pointer hover:text-[#4965d2] border-b border-gray-100 pb-2">About Us</li>
      <li className="cursor-pointer hover:text-[#4965d2] border-b border-gray-100 pb-2">Support</li>
    </ul>

    <div className="mt-auto space-y-4 mb-8">
      <Button className="w-full bg-[#4965d2] text-white font-semibold hover:bg-[#3f58b3]">
        Create Account
      </Button>
      <Button className="w-full bg-[#f0f2fb] text-[#4965d2] font-semibold hover:bg-[#dce0f5]">
        Login
      </Button>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;