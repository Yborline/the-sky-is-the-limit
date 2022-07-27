import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
function Header() {
    
    return (
        <header className={s.header}>
            <div>
            <h1 className={s.logo}>
            <span>Finance </span>Ledger
            </h1>
            </div >
                    <ul className={s.menu}>
                        <li className={s.item}><NavLink className={s.link} to="/">Home</NavLink></li>
                        <li className={s.item}><NavLink className={s.link} to="/about">About</NavLink></li>
                        <li className={s.item}><NavLink className={s.link} to="/cases">Cases</NavLink></li>
                        <li className={s.item}><NavLink className={s.link} to="/blog">Blog</NavLink></li>
                        <li className={s.menu}><NavLink className={s.link} to="/contact">Contact</NavLink></li>
                    </ul>
        </header>

    )
}

export default Header;