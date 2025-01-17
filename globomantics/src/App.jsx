import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import HouseList from './components/houseList'
import House from './components/house'
import Banner from './components/banner'

function App() {
  return (
    <>
      <BrowserRouter>
        <Banner>
          <div>Providing houses all over the world</div>
        </Banner>
        <Routes>
          <Route index element={<HouseList />} />
          <Route path="house" element={<House />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
