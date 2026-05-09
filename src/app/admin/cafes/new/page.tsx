import { CafeForm } from "@/components/admin/cafe-form";

export const metadata = {
  title: "Tambah Cafe Baru | Admin Tasik Coffee",
};

export default function NewCafePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CafeForm />
    </div>
  );
}
