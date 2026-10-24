import { SearchBox } from '../components/Header.jsx';

export default function SearchPage() {
  return (
    <main className="wrap page stack-lg">
      <h1 className="h1-sm">Search</h1>
      <p className="muted" style={{ margin: 0 }}>Type a book, a person, a chapter like “John 3”, or a word from a chapter summary.</p>
      <SearchBox autoFocus />
    </main>
  );
}
