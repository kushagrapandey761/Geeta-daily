import MainHeader from "@/components/MainHeader";

export default function UnauthenticatedLayout({children}) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
