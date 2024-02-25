import BreadCrumb from "@/components/breadcrumb";
import BeritaForm from "@/components/forms/berita-form";

export const metadata = {
  title: "Next - Tambah Berita",
};

const breadcrumbItems = [
  { title: "Berita", link: "/admin/berita" },
  { title: "Create", link: "/admin/berita/create" },
];

export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-6 pt-4">
        <BreadCrumb items={breadcrumbItems} />
        <BeritaForm />
      </div>
    </>
  );
}
