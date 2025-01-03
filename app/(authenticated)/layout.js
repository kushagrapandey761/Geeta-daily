import AuthHeader from "@/components/AuthHeader";



export default function AuthenticatedLayout({ children }) {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
}
