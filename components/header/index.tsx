import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const HeaderDefault = () => {
  const router = useRouter();
  return (
    <ul className="am-menu">
      <li className={router.pathname == "/" ? "am-menu_active" : ""}>
        <Link href="/">Home</Link>
      </li>
    </ul>
  );
};
