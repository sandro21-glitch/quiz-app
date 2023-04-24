
import Answers from "./components/Answers";
import Setup from "./components/Setup";
import { useGlobalContext } from "./context";

function App() {

  const {start} = useGlobalContext()

  if(start) {
    return <main className="main">
      <Answers />
    </main>
  }

  return (
    <main className="main">
      <Setup />
    </main>
  );
}

export default App;
