// app/blog/page.jsx
import api from "@/lib/axios";
import ClientPagination from "./ClientPagination";

export default async function BlogPage({ searchParams }) {
  const perPage = 3;
  const start = Number(searchParams?.start) || 0;

  const res = await api.get("/articles");
  const allBlogs = res.data.result;

  return (
    <ClientPagination
      allBlogs={allBlogs}
      perPage={perPage}
      initialStart={start}
    />
  );
}
