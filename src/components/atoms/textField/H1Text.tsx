interface ITextField {
  text: string;
}

const H1TextField = ({ text }: ITextField) => {
  return <h1 className="text-[34px] font-bold">{text}</h1>;
};

export default H1TextField;
