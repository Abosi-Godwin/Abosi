interface HeadingProp {
  text: string;
}

const Heading = (text: HeadingProp) => {
  return <h1 className="text-xl font-extrabold">{text}</h1>;
};

export default Heading;
