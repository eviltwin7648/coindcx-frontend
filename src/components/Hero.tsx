import { Button } from "./ui/button"
import { FaApple, FaGooglePlay } from "react-icons/fa"
import { QrCodeIcon } from "lucide-react"

export const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:pl-48 py-12 bg-white">
      <div className="space-y-6 max-w-xl">
        <h2 className="text-4xl md:text-7xl font-semibold leading-tight">
          India Ka Crypto <br /> Coach! <span className="text-3xl">🇮🇳            </span>
        </h2>
        <p className="text-lg text-gray-600">
          Trusted by 1.6 Cr+ users to <span className="text-[#4965d2] font-medium">Learn</span> Crypto
        </p>
        <div className="w-1/2">

          <Button className="bg-[#4965d2] w-full text-white px-6 py-2 rounded-md text-base font-semibold cursor-pointer hover:bg-[#4965d2]">
            Create Account
          </Button>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">Download app</p>
          <div className="flex space-x-2">
            <Button variant="outline" className="gap-2 w-30 text-[#4965d2] bg-[#f0f2fb]  font-semibold">
              <QrCodeIcon className="text-[#4965d2] h-4 w-4" />
              Scan QR
            </Button>
            <Button variant="outline" className="bg-[#f0f2fb] gap-2 px-4 py-2  ">
              <FaApple className=" text-[#4965d2]" />
            </Button>
            <Button variant="outline" className=" bg-[#f0f2fb] gap-2 px-4 py-2  ">
              <FaGooglePlay className="text-[#4965d2]" />
            </Button>
          </div>
        </div>

        <div className="flex space-x-4 pt-6">
          <img
            src="https://coindcx.com/wp-content/uploads/2024/11/learning-modules-trustmaker.svg"
            alt="Learning"
            className="h-12"
          />
          <img
            src="https://coindcx.com/wp-content/uploads/2024/11/registered-users-trustmaker.svg"
            alt="Registered Users"
            className="h-12"
          />
          <img
            src="https://coindcx.com/wp-content/uploads/2024/11/FIU-Registered-Trustmaker.svg"
            alt="FIU"
            className="h-12"
          />
        </div>
      </div>

      <div className="relative max-w-3xl mb-10 md:mb-0">
        <video autoPlay
          muted
          loop
          playsInline src="https://coindcx.com/wp-content/uploads/2024/11/CoinDCX_LP_Hero-Animation_NEW.mp4"></video>
      </div>
    </section>
  )
}

