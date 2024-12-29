import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <header className="border h-[90px]">
        <nav className="flex flex-row">
          <Link href="/" className="ml-[250px] mt-[30px] text-lg font-arima">
            Home
          </Link>
          <ul className="flex flex-row ml-[900px] mt-[25px] space-x-11">
            <li className="hover:bg-black hover:text-white p-2 hover:rounded-2xl text-lg font-arima">
              <Link href="/log-in">Log In</Link>
            </li>
            <li className="hover:bg-black hover:text-white p-2 hover:rounded-2xl text-lg font-arima">
              <Link href="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
