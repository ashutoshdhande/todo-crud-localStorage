import InputField from "./components/InputField";
import TaskList from "./components/TaskList";
import TaskState from "./context/TaskContext/TaskState";

function App() {
  return (
    <div className="App vh-100 d-flex justify-content-start align-items-center flex-column">
      <section>
        <h1 className="text-center my-3">TODO LIST</h1>
        <TaskState>
          <InputField />
          <TaskList />
        </TaskState>
      </section>
    </div>
  );
}

export default App;
