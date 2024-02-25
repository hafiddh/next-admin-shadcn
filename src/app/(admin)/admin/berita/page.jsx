import BreadCrumb from "@/components/breadcrumb";
import { BeritaClient } from "@/components/tables/berita-table/client";
import { beritas } from "@/components/constants/data";

const breadcrumbItems = [{ title: "Berita", link: "/admin/berita" }];

export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <BeritaClient data={beritas} />
      </div>
    </>
  );
}
