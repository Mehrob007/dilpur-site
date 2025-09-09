"use client";
import ProductItems from "@/modules/product/ProductItems";
import GiftСard from "@/components/ui/GiftСard";
import PartnerStores from "@/components/ui/PartnerStores";
import React from "react";

export default function Page() {
  return (
    <div className="catalog">
      <ProductItems title={"Каталог"} type={"filter"} getURl={""} />
      <GiftСard />
      <PartnerStores />
    </div>
  );
}
