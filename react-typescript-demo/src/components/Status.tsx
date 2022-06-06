type StatusProps = {
  status: "Loading" | "Success" | "Error";
};

export const Status = (props: StatusProps) => {
  let message;

  if (Object.is(props.status, "Loading")) {
    message = "Loading data....";
  } else if (Object.is(props.status, "Success")) {
    message = "Data fetched successfully";
  } else if (Object.is(props.status, "Error")) {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>Status- {message}</h2>
    </div>
  );
};
