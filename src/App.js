
import { useState } from 'react';
// Routes
import { Routes, Route } from 'react-router-dom';

// Components
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

// Pages
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { CountryPage } from './pages/CountryPage';

function App() {
  
  const [countries, setCountries] = useState([]);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<HomePage countries={countries} setCountries={setCountries}/>}></Route>
          <Route path="/country/:name" element={<CountryPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route></Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;
