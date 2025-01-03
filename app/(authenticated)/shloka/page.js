"use client";
import ShlokaCard from "@/components/ShlokaCard";
import { useEffect, useState } from "react";

export default function ShlokaPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
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
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-8 w-full max-w-[1480px] mx-auto mt-[20px]">
        {data.map((shloka) => (
          <ShlokaCard key={shloka.ID} shloka={shloka} />
        ))}
      </div>
    </>
  );
}
