import { notFound } from "next/navigation";
import { CafeForm } from "@/components/admin/cafe-form";
import { MOCK_CAFES } from "@/constants/mock-data";

export const metadata = {
  title: "Edit Cafe | Admin Tasik Coffee",
};

interface EditCafePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditCafePage({ params }: EditCafePageProps) {
  const resolvedParams = await params;
  
  // In a real app, this would be an API fetch
  const cafe = MOCK_CAFES.find((c) => c.id === resolvedParams.id);

  if (!cafe) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <CafeForm initialData={cafe} />
    </div>
  );
}
