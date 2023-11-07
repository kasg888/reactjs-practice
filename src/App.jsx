import ProductCard from "./components/ProductsCard"

function App() {

  const productList = [
    {id: 1, name: "product 1", price: 100000},
    {id: 2, name: "product 2", price: 200000},
    {id: 3, name: "product 3", price: 300000},
    {id: 4, name: "product 4", price: 400000},
    {id: 5, name: "product 5", price: 500000},
    {id: 6, name: "product 6", price: 600000},
    {id: 7, name: "product 7", price: 700000},
  ]

  return (
  <>
  <header className="bg-[#152A46] text-white p-[28px]">
    <h1>Header</h1>
    <nav>
      <ul className="list-none m-0 p-0">
        <li className="inline-block mr-[10px]"><a className="text-white no-underline" href="#">Menu 1</a></li>
        <li className="inline-block mr-[10px]"><a href="#">Menu 2</a></li>
        <li className="inline-block mr-[10px]"><a href="#">Menu 3</a></li>
        <li className="inline-block mr-[10px]"><span id="saldo">400000</span></li>
      </ul>
    </nav>
  </header>

  <main class="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-[10px] m-[12px]">
    {productList.map(item => (
      <ProductCard key={item.id}/>
    ))}
  </main>

  <footer>
    <p>&copy; 2023 HTML Javascript dan CSS</p>
  </footer>
  </>
  )
}

export default App
