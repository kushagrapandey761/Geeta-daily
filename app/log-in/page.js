export default function LoginPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
      <link
        href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Arima:wght@100..700&family=Caveat&family=Edu+VIC+WA+NT+Beginner:wght@400..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Libre+Baskerville&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap"
        rel="stylesheet"
      ></link>
      <div className="flex flex-row justify-center items-center mt-[100px]">
        <div className="flex flex-col space-y-6 items-center justify-center bg-[#E7FBB4] w-[500px] h-[400px]">
          <h1 className="font-arima font-bold text-xl">Login to your account</h1>
          <form>
            <div className="flex flex-col space-y-6">
              <label className="font-arima font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="bg-white w-[300px] h-[30px] p-4 rounded-xl font-arima text-sm"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <label className="font-arima font-semibold" htmlFor="password">
                Password
              </label>
              <input
                className="bg-white w-[300px] h-[30px] p-4 rounded-xl font-arima text-sm"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
