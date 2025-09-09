import { ProductItemT } from "@/types/product";
import Image from "next/image";
import React from "react";
import PropertyOff from "../../../public/icons/PropertyOff.svg";
import PropertyOn from "../../../public/icons/PropertyOn.svg";

import { useStore } from "@/store/globalState";
import BayButton from "@/components/ui/BayButton";
import ProductDetails from "@/components/ui/ProductDetails";

export default function ProductItem({
  img,
  title,
  subTitle,
  price,
  discount = 0,
  details = null,
  property,
  id,
}: ProductItemT) {
  const { setProperty, deleteProperty } = useStore();
  return (
    <div className="product-item">
      <div className="product-item-img">
        <div className="image">
          <Image
            className="img-product"
            src={img[0]}
            alt="img-product"
            width={360}
            height={500}
          />
          <Image
            className="img-product1"
            src={img[1]}
            alt="img-product"
            width={360}
            height={500}
          />
          {id ? <BayButton id={id} /> : ""}
        </div>

        <ProductDetails details={details} />

        {/* {details && typeof details === "object" ? (
          <span className="product-item-img-discount">
            -{details.discount}%
          </span>
        ) : details === "new" ? (
          <span className="product-item-img-new">НОВИНКА</span>
        ) : (
          ""
        )} */}
        <div className="property-like">
          {property ? (
            <Image
              src={PropertyOn}
              alt="PropertyOn"
              onClick={() => deleteProperty(id as number)}
              width={30}
              height={30}
            />
          ) : (
            <Image
              src={PropertyOff}
              alt="PropertyOff"
              onClick={() => setProperty(id as number)}
              width={30}
              height={30}
            />
          )}
        </div>
      </div>
      <div className="product-item-info">
        <div className="product-item-text">
          <h1>{title}</h1>
          <p>{subTitle}</p>
        </div>
        <div className="product-item-price">
          {discount ? (
            <>
              <div className="discount">{discount} c.</div>{" "}
              <div className="crossed">{price} c.</div>
            </>
          ) : (
            <div className="price">{price} c.</div>
          )}
        </div>
      </div>
    </div>
  );
}
