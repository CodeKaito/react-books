import './App.css';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';

export default function App() {
  return (
    <div className="App">
      <MyNav />
      <main>
        <AllTheBooks />
      </main>
      <MyFooter />
    </div>
  );
}
