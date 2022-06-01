import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  return <button onClick={(e) => props.handleClick(e, 2)}>Click</button>;
};
