import { lazy, Suspense } from 'react'
import SEO from './components/common/SEO/SEO'
import { Navbar, Footer } from './components/layout'
import Cart from './components/features/Cart/Cart'

const Hero = lazy(() => import('./components/sections/Hero/Hero'))
const About = lazy(() => import('./components/sections/About/About'))
const Features = lazy(() => import('./components/sections/Features/Features'))
const Story = lazy(() => import('./components/sections/Story/Story'))
const Contact = lazy(() => import('./components/sections/Contact/Contact'))
const FAQ = lazy(() => import('./components/sections/FAQ/FAQ'))

const App = () => {
  return (
    <>
      <SEO title='Головна' />
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <Navbar />
        <Cart />
        <Suspense
          fallback={
            <div className='flex justify-center items-center h-screen'>Завантаження...</div>
          }
        >
          {/* <Hero /> */}
          <About />
          <Features />
          {/* <Story /> */}
          <FAQ />
          <Contact />
        </Suspense>
        <Footer />
      </main>
    </>
  )
}

export default App
