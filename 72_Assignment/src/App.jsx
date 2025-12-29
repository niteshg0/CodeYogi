import Header from "./Components/Header";
import Todo from "./Components/Todo";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex grow">
        {/* <h1> main</h1> */}
        <Todo />
      </main>
    </div>
  );
}

export default App;
