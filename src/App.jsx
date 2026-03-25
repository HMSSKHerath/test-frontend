import './App.css'
import ProductCard from './components/productCard'

function App() {

  console.log("Product Card Is Displayed");

  return (
    <>
      <h1 className="title-bar name-bar">Sasidu</h1>
      <ProductCard name="Apple Ipad" price="$399.99" image="https://d2bschjhk4kxui.cloudfront.net/assets/images/product/69a6b033c3db51772531763.webp"/>
      <ProductCard name="Samsung Galaxy" price="$299.99" image="https://img.drz.lazcdn.com/static/lk/p/ce5349923102af31de5e2d408588c436.jpg"/>
    </>
  )
}

export default App
   