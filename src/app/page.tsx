import Link from "next/link";
import { db } from "../server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/1dea96aa-ffa4-4b46-95fe-f171c27727c2-1d.jpeg",
  "https://utfs.io/f/410eba9b-25f9-4d04-b22a-5e95ec2d382f-1e.jpeg",
  "https://utfs.io/f/e564e79c-3d34-4bc2-a051-fc1a8a2550de-1f.jpeg",
  "https://utfs.io/f/22a9340e-1576-4b01-9e23-c61f5df257a1-1g.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
