"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ShlokaIdPage() {
  const [shloka, setShloka] = useState({});
  const [image, setImage] = useState(null); // Initialize as null
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/shlokaID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          Chapter: id.split(".")[0],
          Verse: id.split(".")[1],
        }),
      });

      const data = await response.json();
      setShloka(data.shloka);
      setImage(data.url);
    }
    fetchData();
  }, [id]);
  return (
    <div className="flex flex-row justify-center mt-[10px] pb-5">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center border-2 w-[90%] space-x-9 space-y-10 lg:space-y-0">
        {image && (
          <img src={image} alt="Shloka Image" width={500} height={500} />
        )}
        <div className="flex flex-col justify-center items-center h-[90%] lg:w-[60%] w-[75%] space-y-5 lg:p-10">
          <h1 className="font-arima font-bold">
            Chapter {shloka.Chapter}, Verse {shloka.Verse}
          </h1>
          <h2 className="font-arima font-semibold">Shloka</h2>
          <p className="font-arima">{shloka.Shloka}</p>
          <h2 className="font-arima font-semibold">Hindi Translation</h2>
          <p className="font-arima">{shloka.HinMeaning}</p>
          <h2 className="font-arima font-semibold">English Translation</h2>
          <p className="font-arima">{shloka.EngMeaning}</p>
          <h2 className="font-arima font-semibold">Word Meaning</h2>

          <p className="font-arima">
            {shloka.WordMeaning?.replaceAll("?", ". ") ||
              "No word meanings available."}
          </p>
        </div>
      </div>
    </div>
  );
}
