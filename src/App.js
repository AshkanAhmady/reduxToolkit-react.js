import { Provider } from "react-redux";
import Counter from "./Components/Counter";
import { store } from "./features/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
