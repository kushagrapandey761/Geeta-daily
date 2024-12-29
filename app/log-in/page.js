"use client"
import { useState } from "react";
import {z} from "zod";
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState([]);
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      email,
      password,
    };

    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const errorMessages = result.error.errors.map((err) => err.message);
      setError(errorMessages);
    } else {
      setError([]);
    }

    const response = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if(data.token){
      localStorage.setItem("token", data.token)
    }
    else{
      setError([data.error])
    }
  }

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
      <div className="flex flex-row justify-center items-center mt-[100px]">
        <div className="flex flex-col space-y-10 items-center justify-center bg-[#E7FBB4] w-[500px] h-[550px]">
          <h1 className="font-arima font-bold text-xl">
            Login to your account
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-6">
              <label className="font-arima font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="bg-white w-[300px] h-[30px] p-4 rounded-xl font-arima text-sm"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state
              />
              <label className="font-arima font-semibold" htmlFor="password">
                Password
              </label>
              <input
                className="bg-white w-[300px] h-[30px] p-4 rounded-xl font-arima text-sm"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update state
              />
              
                {error.length > 0 && (
                  <div className="flex flex-col text-red-500 text-xs font-semibold">
                    {error.map((errMsg, idx) => (
                      <p key={idx}>{errMsg}</p>
                    ))}
                  </div>
                )}
              
              <button
                type="submit"
                className="bg-[#FFE893] h-[50px] rounded-2xl hover:bg-[#FB9EC6] font-semibold"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
