import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";

const App = () => {
  return (
    <main className="bg-zinc-900 h-full">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
};

export default App;
