"use client";

import Link from "next/link";
import useSWR from "swr";
import DashboardLayout from "../dashboardLayout";

export default function Blog() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("./api/blog", fetcher);

  if (error) {
    return <div> Failed to Load</div>;
  }

  if (isLoading) {
    return <div> Loading from SWR ... </div>;
  }

  return (
    <DashboardLayout>
      <h1 className="text-heading"> Blog </h1>
      <hr></hr>
      <ul>
        {data?.posts?.items?.map((item, index) => {
          return (
            <li key={index}>
              <Link href={`/blog/${item.sys.id}`}>
                {index + 1} . {item.fields.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </DashboardLayout>
  );
}
