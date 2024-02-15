import './Layout.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { TiArrowBack } from "react-icons/ti"
import { IoMdHome } from "react-icons/io"
import { IoMdSearch } from "react-icons/io"
import { IoMdPlayCircle } from "react-icons/io"
import { FaSave } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"

function Layout() {
    const navigate = useNavigate();

    return (
        <section id="layout">
            <nav>
                <div
                    style={{background: '#000', color: '#fff', borderRadius: '16px', padding: '2px 8px'}}
                    onClick={() => navigate(-1)}
                >
                    <TiArrowBack color='#fff' fontSize='1.2rem' />
                </div>
                <Link to='/' className='nav_links'>
                    <IoMdHome fontSize='1.8rem' />
                    <span>Home</span>
                </Link>
                <Link to='/topics' className='nav_links'>
                    <IoMdSearch fontSize='1.8rem' />
                    <span>Search</span>
                </Link>
                <Link to='/' className='nav_links'>
                    <IoMdPlayCircle fontSize='1.8rem' />
                    <span>Bio</span>
                </Link>
                <Link to='/saved' className='nav_links'>
                    <FaSave fontSize='1.8rem' />
                    <span>Saved</span>
                </Link>
                <Link to='*' className='nav_links'>
                    <BsFillPersonFill fontSize='1.8rem' />
                    <span>Profile</span>
                </Link>
            </nav>
            <section>
                <Outlet />
            </section>
        </section>
    )
}

export default Layout