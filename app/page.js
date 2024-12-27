import Image from "next/image";
import LandingPageImg from "@/assets/images/LandingPagephoto.jpg";
export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-center mt-[120px] ml-[60px] space-x-20">
        <Image
          src={LandingPageImg}
          alt="Lord Krishna preaching Bhagwad Gita to Arjuna"
        />
        <div className="mt-[100px] text-2xl w-[300px]">
          <p>
            Welcome to Geeta Daily, your daily source of wisdom from the
            Bhagavad Gita.
          </p>
          <br />
          <p>Connect with timeless teachings, one shlok at a time.</p>
        </div>
      </div>
    </>
  );
}
