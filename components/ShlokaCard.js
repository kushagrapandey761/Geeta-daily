import Link from "next/link";

export default function ShlokaCard({ shloka }) {
  return (
    <>
      <Link
        className="flex flex-col justify-center items-center space-y-4  border-2 lg:w-[22%] lg:h-[300px] h-[300px] font-arima transform transition-transform duration-300 hover:scale-110"
        href={`/shloka/${shloka.Chapter}.${shloka.Verse}`}
      >
        <div className="flex flex-col items-center space-y-5">
          <h1 className="font-bold font-arima">
            Gita Chapter {shloka.Chapter} Verse {shloka.Verse}
          </h1>
          <div className="flex text-center lg:text-start justify-center w-[70%] lg:w-[90%]">
            <p className="font-arima w-[90%]">{shloka.Shloka}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
