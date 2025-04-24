import Header from "./Component/Header";
import Main from "./Component/Main";
import Counter from "./Component/Counter";
import CounterOne from "./Component/CounterOne";
import CounterTwo from "./Component/CounterTwo";
import CounterOneHoc from "./Component/CounterOneHoc";
import MainContext from "./Component/MainContext";

function App() {
  return (
    <div className="App">
      {/* <MainContext /> */}
      {/* <CounterOneHoc /> */}
      <Header />
      <Main />
      {/* <Counter render={(count, incrementCount) => <CounterOne count={count} incrementCount={incrementCount} /> }/> */}
      {/* <Counter render={(count, incrementCount) => <CounterTwo count={count} incrementCount={incrementCount} /> }/> */}
    </div>
  );
}

export default App;
