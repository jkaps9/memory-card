import "./styles/App.css";
import List from "./components/List.jsx";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section id="game">
          <List />
        </section>
      </main>
    </>
  );
}

export default App;
