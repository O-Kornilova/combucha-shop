import { Hero, About, Features, Story, Contact, FAQ } from './components/sections'
import { Navbar, Footer } from './components/layout'
import Cart from './components/features/Cart/Cart'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      {/* <Hero /> */}
      <Cart />
      <About />
      <Features />
      {/* <Story /> */}
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
