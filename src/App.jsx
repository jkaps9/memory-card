import "./styles/App.css";
import List from "./components/List.jsx";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section id="game">
          <h1>Memory Game</h1>
          <p>
            Select a card to get a point, but don&apos;t select the same one
            twice
          </p>
          <List />
        </section>
      </main>
    </>
  );
}

export default App;
