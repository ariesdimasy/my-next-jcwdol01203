"use client";

import Link from "next/link";
import useSWR from "swr";
import DashboardLayout from "../dashboardLayout";

export default function Blog() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/blog",
    fetcher
  );

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
        {data?.posts?.map((item, index) => {
          return (
            <li key={index}>
              <Link href={`/blog/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </DashboardLayout>
  );
}