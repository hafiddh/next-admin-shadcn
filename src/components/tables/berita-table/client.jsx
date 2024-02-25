"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";

export const BeritaClient = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Berita (${data.length})`}
          description="Kelola data berita."
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/admin/berita/create`)}
        >
          <Plus className="mr h-5 w-5" />
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
