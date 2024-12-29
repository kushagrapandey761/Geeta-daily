import Image from "next/image";
import LandingPageImg from "@/assets/images/LandingPagephoto.jpg";
export default function Home() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Arima:wght@100..700&family=Caveat&family=Edu+VIC+WA+NT+Beginner:wght@400..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Libre+Baskerville&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap"
        rel="stylesheet"
      ></link>
      <div className="flex flex-row justify-center mt-[120px] ml-[80px] space-x-20">
        <Image
          src={LandingPageImg}
          alt="Lord Krishna preaching Bhagwad Gita to Arjuna"
        />
        <div className="mt-[100px] text-2xl w-[300px] font-arima font-semibold">
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
