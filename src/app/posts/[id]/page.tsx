import { prisma } from "@/lib/prisma";

export default async function Post({
  params,
}: {
  params: { id: string };
}): Promise<any> {
  const post = await prisma.post.findUnique({ where: { id: params.id } });

  return (
    <main>
      <h1 className="text-3xl font-semibold">{post?.title}</h1>
      <p>{post?.content}</p>
    </main>
  );
}
