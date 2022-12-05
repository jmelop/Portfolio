import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Particle from './particle'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <div>
        <Particle />
      </div>
    </div>
  )
}

export default MyApp
