'use client'

import Search from "@/components/atoms/search/Search";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="p-6">
      <div>
        <Search />
      </div>
      {children}
    </div>
  );
}
