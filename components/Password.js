import { useState } from "react";

export default function Password() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [errors, setErrors] = useState([]);
  async function handleSubmit(e) {
    console.log("Entered handle submit")
    e.preventDefault();
    if (newPassword !== reEnterPassword) {
      setErrors(["Passwords do not match!"]);
    } else if (newPassword === oldPassword) {
      setErrors(["New password cannot be the same as the old password!"]);
    } else if (
      oldPassword.length<8 ||
      newPassword.length < 8 ||
      reEnterPassword.length < 8
    ) {
      setErrors(["Passwords must be at least 8 charachters long"]);
    } else {
      const response = await fetch("/api/updatePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
        }),
      });
      const data = await response.json();
      if (data.Success) {
        setErrors([data.Success]);
      } else {
        setErrors([data.error]);
      }
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-5 items-center justify-center"
      >
        <label className="font-arima font-semibold" htmlFor="oldPassword">
          Old Password:
        </label>
        <input
          className="font-arima p-2 rounded-lg bg"
          placeholder="Enter old password"
          type="password"
          name="oldPassword"
          value={oldPassword}
          onChange={(e) => {
            setOldPassword(e.target.value);
          }}
        />
        <label className="font-arima font-semibold" htmlFor="newPassword">
          New Password:
        </label>
        <input
          className="font-arima p-2 rounded-lg bg"
          placeholder="Enter New password"
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />
        <label className="font-arima font-semibold" htmlFor="reEnterPassword">
          Re-enter New Password:
        </label>
        <input
          className="font-arima p-2 rounded-lg bg"
          placeholder="Re-enter New Password"
          type="password"
          name="reEnterPassword"
          value={reEnterPassword}
          onChange={(e) => {
            setReEnterPassword(e.target.value);
          }}
        />
        <div className="flex flex-col">
        
        {errors.length>0 && errors.map((error,idx)=>{
            return <p key={idx} className="text-white">{error}</p>
        })}
        </div>
        <div className="flex flex-row space-x-2 w-[100%]">
          <button
            type="submit"
            className="bg-[#FFE893] h-[30px] w-[100%] rounded-2xl hover:bg-[#FB9EC6]"
          >
            Set Password
          </button>
          <button
            type="button"
            className="bg-[#FFE893] h-[30px] w-[100%] rounded-2xl hover:bg-[#FB9EC6]"
            onClick={() => {
              setOldPassword("");
              setNewPassword("");
              setReEnterPassword("");
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </>
  );
}
