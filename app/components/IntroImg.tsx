import Image from "next/image";
import type { StaticImageData } from "next/image";
interface ImageProp {
  data: { image: StaticImageData; title: string };
}
const IntroImage = ({ data }: ImageProp) => {
  return (
    <>
      <Image src={data.image} alt={data.title} layout="fill" className="" />;
      <h1>{data.title}</h1>
    </>
  );
};
export default IntroImage;
