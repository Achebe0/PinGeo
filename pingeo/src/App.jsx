import Message from "./message";
import Navbar from "./components/navbar";
import MovieCard from "./components/movieCard";

function App() {
  return (
    <>
      <Navbar />
      <Message />
      <MovieCard movie={{title:"Harry Potter",release_date: "2024"}}/>
    </>
  );
}

export default App;