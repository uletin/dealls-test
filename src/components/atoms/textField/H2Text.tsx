interface ITextField {
  text: string;
  alignText : "center" | "left" | "right" | "justify";
}

const H2TextField = ({ text, alignText }: ITextField) => {
  return <h2 className="text-[1.875rem] font-medium" style={{textAlign:alignText}}>{text}</h2>;
};

export default H2TextField;
