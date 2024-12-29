// app/allservices/layout.tsx
import React from "react";

export default function AllServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      {/* Scrollable Main Content */}
      <main className="">{children}</main>
    </div>
  );
}
