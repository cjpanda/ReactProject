import Card from "./components/Card";
import logo from "./images/logo-journal.png";
import data from "./data";

function App() {
  const dataList = data.map((item) => {
    return (
      <div>
        <Card key={item.id} item={item} />
        <hr></hr>
      </div>
    );
  });
  return (
    <div className="App">
      <nav className="nav">
        <img src={logo} alt="logo" className="nav--logo" />
        <p className="nav--text">My Travel Journal.</p>
      </nav>
      {dataList}
    </div>
  );
}

export default App;
