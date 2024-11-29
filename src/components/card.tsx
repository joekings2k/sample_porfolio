import { StaticImageData } from 'next/image';
import React from 'react'
interface Props {
  image: StaticImageData;
  title: string;
  stack: string[];
}
const Card = ({image,title,stack}:Props) => {
  return (
    <div className="w-[65vw] h-[80vh] flex justify-center items-center">
      <div
        className="w-[65vw] h-[80vh] relative"
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "15px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30 rounded-[15px] z-10" />
        <aside className="relative flex flex-col justify-end h-full w-full text-white p-4 z-20">
          <h3 className="text-2xl">{title}</h3>
          <ol className="flex space-x-4 mt-2">
            {stack.map((item: string, i: number) => (
              <li key={i} className="text-[1.5rem] border-2 px-5 rounded-3xl">{item}</li>
            ))}
          </ol>
        </aside>
      </div>
    </div>
  );
}

export default Card