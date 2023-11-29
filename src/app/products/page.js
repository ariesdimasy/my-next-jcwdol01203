"use client";

import style from "./page.module.css";
import DashboardLayout from "../dashboardLayout";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { GET } from "../api/user/route";

export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = 10;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
export const maxDuration = 5;

export default function Page() {
  //   const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(async () => {});

  return (
    <DashboardLayout>
      <div className={style["product-list"]}>
        <h1> Product List </h1>
        <hr></hr>
        <Link href={"/products/123"}> Product Detail </Link>
        {/* <button onClick={() => router.push("/products/123")}>
          {" "}
          Products 124{" "}
        </button> */}
      </div>
    </DashboardLayout>
  );
}
