import Link from "next/link";

export default function AuthHeader() {
  return (
    <>
      <header className="border h-[90px]">
        <nav className="flex flex-row">
          <Link
            href="/shloka"
            className="ml-[250px] mt-[30px] text-lg font-arima font-semibold"
          >
            Daily Shlokas
          </Link>
          <ul className="flex flex-row ml-[900px] mt-[13px] space-x-11">
            <li className="hover:bg-black hover:text-white p-2 hover:rounded-2xl text-lg font-arima">
              <Link href="/sign-up">
                <div className="w-[50px] h-[50px] border-2 rounded-full">
                <p className="mt-[10px] ml-[16px] font-semibold">K</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
