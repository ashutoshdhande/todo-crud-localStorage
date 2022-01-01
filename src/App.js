import InputField from "./components/InputField";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App vh-100 d-flex justify-content-center align-items-center flex-column">
      <section>
        <InputField />
        <TaskList />
      </section>
    </div>
  );
}

export default App;
