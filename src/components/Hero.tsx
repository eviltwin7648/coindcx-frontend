import { Button } from "./ui/button";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { QrCodeIcon } from "lucide-react";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:pl-48 py-8 sm:py-12 bg-white">
      <div className="space-y-6 max-w-xl text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-7xl font-semibold leading-tight">
          India Ka Crypto <br /> Coach! <span className="text-2xl sm:text-3xl lg:text-3xl">🇮🇳</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Trusted by 1.6 Cr+ users to <span className="text-[#4965d2] font-medium">Learn</span> Crypto
        </p>
        {/* Buttons - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block w-1/2">
          <Button className="bg-[#4965d2] w-full text-white px-6 py-2 rounded-md text-base font-semibold cursor-pointer hover:bg-[#4965d2]">
            Create Account
          </Button>
        </div>
        <div className="hidden lg:block">
          <p className="text-sm text-gray-500 mb-2">Download app</p>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              className="gap-2 w-30 text-[#4965d2] bg-[#f0f2fb] font-semibold"
            >
              <QrCodeIcon className="text-[#4965d2] h-4 w-4" />
              Scan QR
            </Button>
            <Button
              variant="outline"
              className="bg-[#f0f2fb] gap-2 px-4 py-2"
            >
              <FaApple className="text-[#4965d2]" />
            </Button>
            <Button
              variant="outline"
              className="bg-[#f0f2fb] gap-2 px-4 py-2"
            >
              <FaGooglePlay className="text-[#4965d2]" />
            </Button>
          </div>
        </div>
        {/* Images - Moved back to text container for desktop */}
        <div className="flex justify-center lg:justify-start space-x-4 pt-6">
          <img
            src="https://coindcx.com/wp-content/uploads/2024/11/learning-modules-trustmaker.svg"
            alt="Learning"
            className="h-10 sm:h-12"
          />
          <img
            src="https://coindcx.com/wp-content/uploads/2024/11/registered-users-trustmaker.svg"
            alt="Registered Users"
            className="h-10 sm:h-12"
          />
          <img
            src="https://coindcx.com/wp-content/uploads/2024/11/FIU-Registered-Trustmaker.svg"
            alt="FIU"
            className="h-10 sm:h-12"
          />
        </div>
      </div>

      <div className="w-full lg:max-w-3xl mt-8 lg:mt-0 mb-8 lg:mb-0 mx-[-1rem] lg:mx-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="https://coindcx.com/wp-content/uploads/2024/11/CoinDCX_LP_Hero-Animation_NEW.mp4"
          className="w-full"
        />
      </div>
    </section>
  );
};