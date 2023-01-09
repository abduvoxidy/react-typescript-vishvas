type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((item, index) => (
        <h2 key={item?.first + index}>
          {item.first}
          {` `} {item.last}
        </h2>
      ))}
    </div>
  );
};
