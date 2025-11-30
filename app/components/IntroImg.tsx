import Image from "next/image";
interface ImageProp {
  image: any;
  title: string;
}
const IntroImage = ({ data }) => {
  return (
    <Image
      src={data.image}
      alt={data.title}
      layout="fill"
      className=""
    />
  );
};
export default IntroImage;
