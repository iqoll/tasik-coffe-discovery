import { CafeForm } from "@/components/admin/cafe-form";
import { AdminLayout } from "@/components/admin/admin-layout";

export const metadata = {
  title: "Tambah Cafe Baru | Admin Tasik Coffee",
};

export default function NewCafePage() {
  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <CafeForm />
      </div>
    </AdminLayout>
  );
}
