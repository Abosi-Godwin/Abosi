import Image from "next/image";

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
