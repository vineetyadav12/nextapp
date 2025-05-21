import { prisma } from "@/lib/prisma";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { id } = params;
  const post = await prisma.post.findUnique({ where: { id: id } });

  return (
    <main>
      <h1 className="text-3xl font-semibold">{post?.title}</h1>
      <p>{post?.content}</p>
    </main>
  );
}
