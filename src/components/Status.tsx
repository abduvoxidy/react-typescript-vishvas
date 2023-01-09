import React from "react";

type StatusProps = {
  status: string;
};

function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched succesfully";
  } else if (props.status === "error") {
    ("Error fetching data");
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
}

export default Status;
