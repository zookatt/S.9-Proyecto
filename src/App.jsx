import { Header } from "./components/Header.jsx"
import { MainArticle } from "./components/MainArticle.jsx"
import { ProductCards } from "./components/ProductCards.jsx"
import { Footer } from './components/Footer.jsx'
import { Reviews } from "./components/Reviews.jsx"

function App() {

  return (
    <main className="container mx-auto px-6 pt-6">
      <Header />
      <div className="px-4 pt-6 ">
        <MainArticle />
        <ProductCards />
        <Reviews />
      </div>

      <Footer />
    </main>
  )
}

export default App


