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
                <Link to='/'>
                    <IoMdHome fontSize='1.8rem' />
                </Link>
                <Link to='/topics'>
                    <IoMdSearch fontSize='1.8rem' />
                </Link>
                <IoMdPlayCircle fontSize='1.8rem' />
                <Link to='/saved'>
                    <FaSave fontSize='1.8rem' />
                </Link>
                <BsFillPersonFill fontSize='1.8rem' />
            </nav>
            <section>
                <Outlet />
            </section>
        </section>
    )
}

export default Layout