
import Header from "./components/Header";
import Main from "./components/Main-page";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <NavBar href={"https://www.dio.me/"} site="DIO" />
      <br/>
      <NavBar href={"https://portfolio-next-tailwind-chi.vercel.app/"} site="Portfolio" />
    </div>
  );
}

export default App;
