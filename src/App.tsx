import cls from "./App.module.scss";
import Greet from "./components/Greet";
import Person from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const fullName = {
    first: "John",
    last: "Doe",
  };

  const nameList = [
    {
      first: "John",
      last: "Doe",
    },
    {
      first: "John",
      last: "Doe",
    },
    {
      first: "John",
      last: "Doe",
    },
    {
      first: "John",
      last: "Doe",
    },
  ];
  return (
    <div className={cls.root}>
      <Greet name={"abduvoxid"} age={23} isLogged />
      <Person name={fullName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
