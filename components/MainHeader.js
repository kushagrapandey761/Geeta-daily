import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="flex justify-center items-center border h-[90px] w-full">
      <nav className="w-[90%] lg:w-[85%] flex flex-wrap items-center justify-between pb-4 lg:ml-[150px]">
        <Link
          href="/"
          className="text-lg font-arima ml-4 mt-4"
        >
          Home
        </Link>

        <ul className="flex flex-row space-x-6 md:space-x-11 mt-4 md:mt-[25px] mr-4 md:mr-[100px]">
          <li className="hover:bg-black hover:text-white p-2 hover:rounded-2xl text-lg font-arima">
            <Link href="/log-in">Log In</Link>
          </li>
          <li className="hover:bg-black hover:text-white p-2 hover:rounded-2xl text-lg font-arima">
            <Link href="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
