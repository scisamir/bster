import './Home.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpeg'
import banner from '../../assets/banner.jpeg'

function Home() {
    return (
        <section id="home">
            <div id="banner">
                <img src={banner} alt="bster banner image" />
            </div>
            <div id="intro">
                <div>
                    <Link to='/topics'>Featured</Link>
                    <Link to='/about'>About</Link>
                </div>
                <img src={logo} alt="bster logo" id="logo" />
                <h1>Bster</h1>
                <p>Solving Biostatistics questions has never been easier! Just input the parameters and get your answers in split seconds!</p>
                <p>OCR and automatic solving coming soon :)</p>
                <Link to='/topics'><button>Get Started</button></Link>
                <a href="https://scisamir.vercel.app" id='copyright'>&#9400; Samir Idris, {(new Date()).getFullYear()}</a>
            </div>
        </section>
    )
}

export default Home