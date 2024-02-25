"use client";
import { CellAction } from "./cell-action";
import { Checkbox } from "@/components/ui/checkbox";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "judul",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            JUDUL
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "gambar_sampul",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            GAMBAR
          </button>
        </div>
      );
    },
    cell: ({ row }) => {
      const gambar = row.getValue("gambar_sampul");
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={gambar} alt={gambar} />;
    },
  },
  {
    accessorKey: "isi_konten",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            ISI
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "tags",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            TAGS
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "tanggal_publish",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            TGL PUBLISH⇅
          </button>
        </div>
      );
    },
    cell: ({ row }) => {
      const tanggal = new Date(row.getValue("tanggal_publish"));
      const tanggal_terformat = tanggal.toLocaleDateString("id-ID", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      return <div className="text-center">{tanggal_terformat}</div>;
    },
  },
  {
    accessorKey: "jumlah_view",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            VIEW
          </button>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("jumlah_view")}</div>;
    },
  },
  {
    accessorKey: "tgl_buat",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            TGL BUAT⇅
          </button>
        </div>
      );
    },
    cell: ({ row }) => {
      const tanggal = new Date(row.getValue("tanggal_publish"));
      const tanggal_terformat = tanggal.toLocaleDateString("id-ID", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      return <div className="text-center">{tanggal_terformat}</div>;
    },
  },
  {
    accessorKey: "nama_publisher",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            PUBLISHER⇅
          </button>
        </div>
      );
    },
  }, 
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
