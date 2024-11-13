import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <header className="border h-[90px]">
        <nav className="flex flex-row">
          <Link href="/" className="ml-[250px] mt-[30px]">Home</Link>
          <ul className="flex flex-row ml-[900px] mt-[30px] space-x-20">
            <li><Link href="/log-in">Log In</Link></li>
            <li><Link href="/sign-up">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
