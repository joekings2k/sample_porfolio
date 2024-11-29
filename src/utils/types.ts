import { StaticImageData } from "next/image";

export interface WorkDataType {
  image: StaticImageData;
  title: string;
  stack: string[];
}