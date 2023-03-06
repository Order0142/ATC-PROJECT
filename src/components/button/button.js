import classes from "./button.module.css";

const Button = ({ title, showBg }) => {
  return (
    <button className={`${classes.main} ${showBg && classes.btnBg}`}>
      {title}
    </button>
  );
};

export default Button;
