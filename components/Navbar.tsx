import Link from "next/link";

export default function Navbar() {
    return (
        <nav className='nav'>
            <Link className='site-name' href='/'>Website Name</Link>
            <ul>
                <li>
                    <Link className='nav-page' href='/documentation'>Documentation</Link>
                </li>
                <li>
                    <Link className='nav-page' href='/community'>Community</Link>
                </li>
                <li>
                    <Link className='nav-page' href='/governance'>Governance</Link>
                </li>
                <li>
                    <Link className='nav-page' href='/about'>About</Link>
                </li>
                <li>
                    <button className='nav-button'>Launch App</button>
                </li>
            </ul>
        </nav>
    )
}