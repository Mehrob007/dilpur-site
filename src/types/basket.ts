import { StaticImageData } from "next/image";

export interface BasketItemT {
  title: string;
  subTitle: string;
  size: string;
  color: string;
  count: number;
  price: number;
  discount: number;
  img: string[] | StaticImageData[];
}
