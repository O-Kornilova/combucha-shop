import { Hero, About, Features, Story, Contact, FAQ } from './components/sections'
import { Navbar, Footer } from './components/layout'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      {/* <Hero /> */}
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
