import Form from "./Components/Form";

function App({ inc, dec, counter }) {
  return (
    <div className="App">
      <Form />
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      {counter}
    </div>
  );
}

export default App;
