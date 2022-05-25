import { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};
