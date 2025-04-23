import { createPost } from "@/actions/actions";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Posts() {
  const post = await prisma.post.findMany();

  return (
    <main>
      <ul className="list-disc">
        {post.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <form action={createPost} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Content
          </label>
          <textarea
            name="content"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
