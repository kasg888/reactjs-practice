import "./style.css"

function App() {

  return (
  <>
  <header>
    <h1>Header</h1>
    <nav>
      <ul>
        <li><a href="#">Menu 1</a></li>
        <li><a href="#">Menu 2</a></li>
        <li><a href="#">Menu 3</a></li>
        <li><span id="saldo">400000</span></li>
      </ul>
    </nav>
  </header>

  <main class="grid-main">
    <section>
      <h2>React JS</h2>
      <p>Ini adalah paragraf dalam React JS.</p>
      <button onclick="checkout(0)">Checkout</button>
    </section>

    <section>
      <h2>Flutter</h2>
      <p>Ini adalah paragraf dalam Flutter.</p>
      <button onclick="checkout(1)">Checkout</button>
    </section>

    <section>
      <h2>IoT</h2>
      <p>Ini adalah paragraf dalam IoT.</p>
      <button onclick="checkout(2)">Checkout</button>
    </section>

    <section>
      <h2>Data Science</h2>
      <p>Ini adalah paragraf dalam Data Science.</p>
      <button onclick="checkout(3)">Checkout</button>
    </section>

  </main>

  <footer>
    <p>&copy; 2023 HTML Javascript dan CSS</p>
  </footer>
  </>
  )
}

export default App
