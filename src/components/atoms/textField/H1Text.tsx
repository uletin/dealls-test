interface ITextField {
  text: string;
  alignText : "center" | "left" | "right" | "justify";
}

const H1TextField = ({ text, alignText }: ITextField) => {
  return <h1 className="text-[34px] font-bold" style={{textAlign:alignText}}>{text}</h1>;
};

export default H1TextField;
