import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Nfts from "./components/Nfts/Nfts";
import Creators from "./components/Creators/Creators";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

export default function App () {
  return (
    <>
      <Navbar/>
      <Main/>
      <About/>
      <Nfts/>
      <Creators/>
      <Footer/>
    </>
  )
}