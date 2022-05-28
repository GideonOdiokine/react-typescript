import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2>
            {name.firstName} {name.lastName}
          </h2>
        );
      })}
    </div>
  );
};
