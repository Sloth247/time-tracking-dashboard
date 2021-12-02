// styles
import "./App.scss";
import MainCard from "./components/MainCard";
import TaskList from "./components/TaskList";
import Attribution from "./components/Attribution";
import FrequencySelector from "./components/FrequencySelector";

function App() {
  return (
    <div className="App">
      <div className="inner">
        <header className="header">
          <MainCard />
          <FrequencySelector />
        </header>
        <main>
          <TaskList />
        </main>
      </div>
      <footer>
        <Attribution />
      </footer>
    </div>
  );
}

export default App;
