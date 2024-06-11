import './App.css';
import ListBooksComponent from "./components/ListBooksComponent";
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import BookDetailComponent from './components/BookDetailComponent';
import SearchResultsComponent from './components/SearchResultsComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListBooksComponent />} />
          <Route path="/books/search" element={<SearchResultsComponent />} />
          {/* Use :title instead of :id */}
          <Route path="/books/:id" element={<BookDetailComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
