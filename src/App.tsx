import cls from "./App.module.scss";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Greet from "./components/Greet";

function App() {
  return (
    <div className={cls.root}>
      <Status status="error" />
      <Oscar>
        <Heading>Heading text</Heading>
      </Oscar>
      <Greet name="Abduvoxid" age={10} isLogged={false} />
    </div>
  );
}

export default App;
