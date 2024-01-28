import AnimeForm from './components/AnimeForm';
import AnimeList from './components/AnimeList';
import NavBar from './components/NavBar';
import AnimeContextProvider from './contexts/AnimeContext';

function App() {
  return (
    <div className="App">
      <AnimeContextProvider>
        <NavBar />
        <AnimeForm />
        <AnimeList />
      </AnimeContextProvider>
    </div>
  );
}

export default App;
