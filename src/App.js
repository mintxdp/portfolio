import "./App.css";
import Canvas from "./components/Canvas";

function App() {
  return (
    <>
      <div className="main_page" id="main">
        {/* <div></div> */}
        <div className="first_page">{<Canvas />}</div>
        <div className="next_page">hello</div>
      </div>
    </>
  );
}

export default App;
