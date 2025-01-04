"use client";
import { decodeJwt } from "jose";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function AuthHeader() {
  const [firstLetter, setFirstLetter] = useState("");
  const [isDropVis, setIsDropVis] = useState(false);
  const router = useRouter();

  const dropdownRef = useRef(null); 
  const buttonRef = useRef(null); 

  useEffect(() => {
    async function decode() {
      const token = localStorage.getItem("token");
      if (token) {
        const payload = decodeJwt(token);
        setFirstLetter(payload.email.charAt(0).toUpperCase());
      }
    }
    decode();

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropVis(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="border-2 h-[90px] bg-[#FF8000] flex justify-center items-center">
        <div className="w-[80%]">
          <nav className="flex items-center justify-between h-full px-10">
            <Link
              href="/shloka"
              className="text-lg font-arima font-semibold text-black"
            >
              Daily Shlokas
            </Link>
            <div className="relative">
              <div
                ref={buttonRef}
                onClick={() => {
                  setIsDropVis(!isDropVis);
                }}
                className="hover:cursor-pointer"
              >
                <div className="w-[50px] h-[50px] border-2 border-white rounded-full flex items-center justify-center">
                  <p className="font-semibold text-black">{firstLetter}</p>
                </div>
              </div>
              {isDropVis && (
                <div
                  ref={dropdownRef} // Attach the reference to the dropdown
                  className="absolute right-0 mt-2 w-[120px] bg-white p-3 rounded-xl shadow-lg z-10"
                >
                  <Link href="/profile">
                    <h1 className="font-arima text-sm hover:cursor-pointer">
                      My Profile
                    </h1>
                  </Link>
                  <h1
                    onClick={() => {
                      localStorage.removeItem("token");
                      router.push("/log-in");
                    }}
                    className="font-arima text-sm hover:cursor-pointer mt-2"
                  >
                    Logout
                  </h1>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
