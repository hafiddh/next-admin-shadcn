"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Heading } from "../ui/heading";
import { Separator } from "../ui/separator";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const onSubmit = async (data) => {
  try {
    setLoading(true);
    if (initialData) {
      // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
    } else {
      // const res = await axios.post(`/api/products/create-product`, data);
      // console.log("product", res);
    }
    router.refresh();
    router.push(`/dashboard/products`);
  } catch (error) {
  } finally {
    setLoading(false);
  }
};
const categories = [
  { _id: 4, name: "Tak Berkategori" },
  { _id: 5, name: "pendidikan" },
  { _id: 6, name: "religius" },
  { _id: 7, name: "Beranda" },
  { _id: 8, name: "Pertanian" },
  { _id: 9, name: "Lingkungan" },
  { _id: 10, name: "Informatika" },
  { _id: 11, name: "Pemerintahan" },
  { _id: 12, name: "Adipura" },
  { _id: 13, name: "Kesehatan" },
  { _id: 14, name: "Ekonomi" },
  { _id: 15, name: "Hukum" },
  { _id: 16, name: "Umum" },
  { _id: 17, name: "Pembangunan" },
  { _id: 18, name: "Teknologi" },
  { _id: 19, name: "Prestasi" },
  { _id: 20, name: "Olahraga" },
  { _id: 21, name: "Parawisata" },
  { _id: 22, name: "Potensi" },
  { _id: 23, name: "Bencana" },
  { _id: 24, name: "Morowali" },
  { _id: 25, name: "pariwisata" },
  { _id: 26, name: "Perjanjian Kinerja" },
  { _id: 27, name: "Pengumuman" },
  { _id: 28, name: "Koni" },
];

const BeritaForm = () => {
  const form = useForm();
  const [loading, setLoading] = useState(false);

  const title = "Tambah Berita";
  const description = "Tambahkan data berita.";
  const action = "Save changes";

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
      </div>
      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="judul"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Judul</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="Judul" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Isi</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={loading}
                    placeholder="Isi berita"
                    {...field}
                  ></Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="imgUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    <input
                      type="file"
                      disabled={loading}
                      accept="image/*"
                      {...field}
                    />
                    {/* <Input disabled={loading} placeholder="Images" {...field} /> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a category"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {categories.map((category) => (
                        <SelectItem key={category._id} value={category._id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default BeritaForm;
