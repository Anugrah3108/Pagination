import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import { PAGE_SIZE } from './constants';
import Pagination from './components/Pagination';

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const json = await data.json();
    setProducts(json.products);
    // console.log(json.products)
  };

  useEffect(() => {
    fetchData()
  }, [])

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;


  return !products.length ? (<h1>Products not found!</h1>) : (
    <>
      <h1 className='font-semibold text-2xl mb-2 pb-2'>Pagination App</h1>
      <div className='justify-center flex flex-wrap gap-[2vw]'>
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} rating={p.rating} price={p.price} reviewLength={p.reviews.length} />
        ))}
      </div>
      <Pagination noOfPages={noOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default App
