import React, { FC } from "react";

type Props = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: Props) => {
  return (
    <div>
      <p>
        {props.name.first
          ? `Hello ${props.name.last} welcome to my channel`
          : "Please click login"}
      </p>
    </div>
  );
};

export default Person;
