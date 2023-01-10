type Props = {
  name: string;
  age?: number;
  isLogged: boolean;
};

const Greet = (props: Props) => {
  return (
    <div>
      <p>
        {props.isLogged
          ? `Hello ${props.name} welcome to my channel`
          : "Please click login"}
      </p>
    </div>
  );
};

export default Greet;
