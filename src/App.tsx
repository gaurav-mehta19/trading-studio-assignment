import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"
import { Strategy } from "./pages/Strategy"
import { Pricing } from "./pages/Pricing"
import { SimulationResult } from "./pages/SimulationResult"
import { Steps } from "./pages/SimulationSteps"
import { Contact } from "./pages/Contact"
import { FAQPage } from "./pages/FAQPage"
import { RecoilRoot } from "recoil"


function App() {

  return (
    <RecoilRoot>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/strategy" element={<Strategy/>}/>
      <Route path="/price" element={<Pricing/>}/>
      {/* <Route path="/test" element={<SimulationResults/>}/> */}
      <Route path="/simulation-steps" element={<Steps/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/questions" element={<FAQPage/>}/>
      <Route path="/simulation-result" element={<SimulationResult/>}/>
    </Routes>
    </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
