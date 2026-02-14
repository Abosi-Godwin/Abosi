 interface Props {
  children: React.ReactNode;
  centered?: boolean;
}

const SectionTitle = ({ children, centered }: Props) => {
  return (
    <h2
      className={`text-2xl font-semibold ${
        centered ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;