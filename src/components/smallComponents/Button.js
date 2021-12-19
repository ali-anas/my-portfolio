const Button = (props) => {
  const customStyles = {
    padding: props.itsStyles.padding,
    backgroundColor: props.itsStyles.backgroundColor,
    color: props.itsStyles.color,
    margin: "var(--s)",
    border: "none",
    fontSize: "0.875rem",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <>
      <button style={customStyles}>{props.buttonText}</button>
    </>
  );
};

export default Button;
