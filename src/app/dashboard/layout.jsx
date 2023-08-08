"use client";

import Header from "./header";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
