import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <header className="border h-[90px]">
        <nav className="flex flex-row">
          <Link href="/" className="ml-[250px] mt-[30px]">
            Home
          </Link>
          <ul className="flex flex-row ml-[900px] mt-[25px] space-x-20">
            <li className="hover:bg-black hover:text-white p-2 hover:rounded-2xl">
              <Link href="/log-in">Log In</Link>
            </li>
            <li className="hover:bg-black hover:text-white p-2 hover:rounded-2xl">
              <Link href="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
