import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/user-tables/client";
import { users } from "@/components/constants/data";
import UserForm from "@/components/forms/user-form";

export const metadata = {
  title: "Next - Tambah user",
};

const breadcrumbItems = [
  { title: "User", link: "/dashboard/user" },
  { title: "Create", link: "/dashboard/user/create" },
];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-6 pt-4">
        <BreadCrumb items={breadcrumbItems} />
        <UserForm />
      </div>
    </>
  );
}
