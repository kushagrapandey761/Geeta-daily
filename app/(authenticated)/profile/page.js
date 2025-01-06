"use client";
import Password from "@/components/Password";
import Username from "@/components/Username";
import { decodeJwt } from "jose";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Profile() {
  const [username, setUsername] = useState("");
  const router = useRouter();
  useEffect(() => {
    async function decode() {
      const token = localStorage.getItem("token");
      if (token) {
        const payload = decodeJwt(token);
        const response = await fetch("/api/getUsername", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            email: payload.email,
          }),
        });
        const data = await response.json();
        setUsername(data.username);
      }else{
        router.push("/log-in");
      }
    }
    decode();
  }, []);
  return <>
    <div className="flex flex-col items-center space-y-10 mt-[20px]">
        <Username username={username}/>
        <Password/>
    </div>
  </>;
}
