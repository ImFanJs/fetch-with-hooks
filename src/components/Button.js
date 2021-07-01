const Button = ({ text, display = true, handleClick }) => {
  return display ? <button onClick={handleClick}>{text}</button> : null;
};

export default Button;
