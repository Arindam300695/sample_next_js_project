"use client";
import Image from "next/image";
import image_1 from "../public/image_1.jpeg";
import CarouselComponent from "./components/CarouselComponent";

export default function Home() {
  return (
    <section>
      <div className="flex space-x-3 mb-10">
        <Image
          src={image_1}
          width={500}
          height={500}
          alt="demo_image"
          priority={true}
        />
        <div className="flex justify-center items-center">
          <p className="m-auto w-1/2">
            vulputate nunc. Mauris tincidunt odio semper neque iaculis
            pellentesque eget vitae eros. Donec et ornare quam, eu luctus
            ligula. Phasellus convallis nibh id sem suscipit, id gravida massa
            placerat. bibendum sit amet metus ac porttitor. Phasellus eleifend
            porta nunc, at consequat neque convallis eget. Quisque auctor vel
            leo ac interdum. In sit amet augue id enim volutpat fringilla id eu
            dui. Nam egestas, orci sit amet volutpat pulvinar, lacus libero
            tempor quam, quis volutpat elit ante nec enim. Aliquam volutpat erat
            nec est pharetra faucibus.
          </p>
        </div>
      </div>
      <CarouselComponent />
    </section>
  );
}
