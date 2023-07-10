import Categories from './Components/Categories'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Products from './Components/Products'
import SimpleCart from './Components/SimpleCart';

import './App.css';

function App() {
  return (
  <>
  <div className='content'>
    <Header />
    <Categories />
    <SimpleCart />
    <Products />
  </div>
  <Footer/>
  </>
  );
}

export default App;
