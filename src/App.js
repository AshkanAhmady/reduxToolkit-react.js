import { Provider } from "react-redux";
import Counter from "./Components/Counter";
import { store } from "./features/store";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./Components/Todos/AddTodoForm";
import TodoList from "./Components/Todos/TodoList";
import TotalCompleteItems from "./Components/Todos/TotalCompleteItems";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </Provider>
  );
}

export default App;
