import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export const metadata = {
  title: "Admin Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
  );
}
