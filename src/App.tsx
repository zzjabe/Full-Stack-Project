import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import './App.css'

function App() {
  return (
    <>
      <Header />

      <Navbar />

      <main>
        <h2>New added</h2>
        <p>New added booklists</p>
        <h2>Popular books</h2>
        <p>Popular books booklists</p>
      </main>
      <Footer />
    </>
  )
}

export default App
