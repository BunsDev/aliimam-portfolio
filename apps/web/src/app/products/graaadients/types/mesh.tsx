import cloudinary from "@/lib/cloudinary";
import { Grid5 } from "@/components/common/gallery";

export async function Grad1() { 
  const results = await cloudinary.v2.search
    .expression(`folder:products/graaadients/grad1/*`)
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute()

  return (
    <main >
      <Grid5 images={results.resources} />
    </main>
  );
}


