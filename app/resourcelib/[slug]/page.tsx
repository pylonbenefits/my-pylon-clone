import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { blogPosts2 } from "../posts";
import Sidebar from "@/components/Sidebar";
import UserDropdown from "@/components/UserDropdown";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/authOptions"; // make sure this file exports properly

export interface PageProps {
  params: Promise<{ slug: string }>; // change here to Promise
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params; // await params here

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const post = blogPosts2.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 font-prompt flex">
      <aside className="hidden md:flex md:flex-col w-72 sticky top-0 h-screen">
        <Sidebar />
      </aside>

      <main className="flex-1 px-8 py-12 max-w-none">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/resourcelib"
            className="flex items-center gap-1 text-orange-600 hover:underline text-sm font-medium"
            aria-label="Back to Resource Library"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
              focusable="false"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resource Library
          </Link>

          <UserDropdown firstName={session.user?.name ?? "User"} />
        </div>

        <h1 className="text-3xl font-semibold text-gray-800 mt-4 mb-6">{post.title}</h1>

        <article
          className="prose prose-orange max-w-none text-gray-700 text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
    </div>
  );
}
