import cloudinary from "@/lib/cloudinary";
import { Grid3 } from "@/components/common/gallery";

export default async function Home() {
  const data = await cloudinary.v2.search
    .expression(`folder:creatives/packaging/*`)
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  return (
    <main className="">
      <Grid3 images={data.resources} />
    </main>
  );
}
