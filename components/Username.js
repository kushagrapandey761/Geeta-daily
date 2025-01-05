import { useState } from "react";

export default function Username({ username }) {
  const [newusername, setNewUsername] = useState("");
  const [errors, setErrors] = useState([]);
  async function handleSubmit(e) {
    e.preventDefault();
    if (newusername.length == 0) {
      setErrors(["Invalid Username"]);
      console.log(errors);
    } else {
      setErrors([]);
      const response = await fetch("/api/updateUsername", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          newusername,
        }),
      });
      const data = await response.json();
      if (data.Success) {
        setErrors([data.Success]);
      }
    }
  }
  return (
    <>
      <div className=" w-[73%] lg:w-[50%]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5 items-center justify-center"
        >
          <label className="font-arima font-semibold" htmlFor="newusername">
            Username:
          </label>
          <input
            className="font-arima p-2 rounded-lg bg"
            placeholder={username}
            name="newusername"
            value={newusername}
            onChange={(e) => {
              setNewUsername(e.target.value);
            }}
          />

          <div className="flex flex-row space-x-2 lg:w-[30%] w-full">
            <button
              type="submit"
              className="bg-[#FFE893] h-[30px] w-[100%] rounded-2xl hover:bg-[#FB9EC6]"
            >
              Set Username
            </button>
            <button
              type="button"
              className="bg-[#FFE893] h-[30px] w-[100%] rounded-2xl hover:bg-[#FB9EC6]"
              onClick={() => {
                setNewUsername("");
              }}
            >
              Clear
            </button>
          </div>

          {errors.length > 0 &&
            errors.map((error, id) => {
              return (
                <p key={id} className="text-white font-semibold font-arima">
                  {error}
                </p>
              );
            })}
        </form>
      </div>
    </>
  );
}
