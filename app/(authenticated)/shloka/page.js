"use client";
import Loader from "@/components/Loader";
import ShlokaCard from "@/components/ShlokaCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ShlokaPage() {
  const [data, setData] = useState([]);
  const [hasFinished, setHasfinished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/log-in");
    } else {
      async function fetchData() {
        setIsLoading(true);
        const response = await fetch("api/shloka", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data1 = await response.json();
        data1.shlokas.reverse();
        setData(data1.shlokas);
        if (data1.shlokas.length == 701) {
          setHasfinished(true);
        }
        setIsLoading(false);
      }
      fetchData();
    }
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full px-4">
        {hasFinished && (
          <p className="font-arima font-semibold mt-4 text-center text-sm sm:text-base">
            Congratulations, you have finished all the shlokas!!
          </p>
        )}

        <div className="flex lg:flex-wrap lg:flex-row flex-col justify-center items-center gap-4 sm:gap-8 w-full max-w-[1480px] mx-auto mt-5">
          {data.map((shloka) => (
            <ShlokaCard key={shloka.ID} shloka={shloka} />
          ))}
        </div>
      </div>
    </>
  );
}
