import Features from "./sections/Features"
import Hero from "./sections/Hero"
import Installation from "./sections/Installation"
import Navbar from "./sections/Navbar"

const App = () => {
  return (
    <main className="flex flex-col text-slate-50 min-h-screen"> 
        <Navbar />
        <Hero />
        <Installation />
        <Features />
    </main>
  )
}

export default App