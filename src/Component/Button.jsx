function Button(props) {
  return (
    <button
      className={`btn btn-primry ${props.className}${
        props.show ? "d-none" : "d-none"
      }  `}
      id={props.id}
    >
      {props.text}
    </button>
  );
}

export default Button;
