export default function Button({ children, level, style, custom, onClick }) {
  const Button = function (level, style, content, onClick) {
    const styleReference = {
      outline:
        "outline outline-1 outline-secondary-100 rounded-md text-secondary-100",
      fill: "bg-secondary-100 rounded-md text-primary-white",
      inactive: "bg-others-grey-200 rounded-md text-others-grey-400",
    };
    const levelReference = {
      small: "py-[10px] px-[14px] text-[14px] w-full",
      large: "p-[15px] text-[18px] font-bold w-full",
    };

    this.level =
      level in levelReference ? levelReference[level] : levelReference["small"];
    this.style =
      style in styleReference ? styleReference[style] : styleReference["fill"];
    this.button = (
      <button className={`${this.level} ${this.style} ${custom}`} onClick={onClick}>
        {" "}
        {content}
      </button>
    );
  };

  const output = new Button(level, style, children, onClick);

  return output.button;
}
