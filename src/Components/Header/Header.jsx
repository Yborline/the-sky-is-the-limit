import s from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import {useEffect} from 'react';
import sprite from '../../images/icons/sprites.svg'

function Header() {
//     document.addEventListener('resize', () => {
//   if (window.scrollY > 200 && heder.style.color != 'red') {
//     header.style.color = 'red'
//   } else if (header.style.color == 'red') header.style.color = 'auto'
// })
    
//       useEffect(() => {
//     const handleScroll = (event) => {
//       console.log("window.scrollY", window.scrollY);
//       console.log(event);
//     };

    // window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
    
        const handleScroll = (event) => {

            console.log(event);

            const scroll =()=>{
                      console.log("window.scrollY", window.scrollY);
            }
            window.addEventListener("scroll", scroll);
    };
    
    const setActiveHome = ({ isActive }) => (isActive ? s.activeHome : s.link)
    const setActiveAbout = ({ isActive }) => (isActive ? s.activeAbout : s.link)
    const setActiveCases = ({ isActive }) => (isActive ? s.activeCases : s.link)
    const setActiveBlog = ({ isActive }) => (isActive ? s.activeBlog : s.link)
    const setActiveContact = ({ isActive }) =>(isActive ? s.activeContact : s.link)
    
    return (
        
        <div>
        <header onScroll={handleScroll()}  className={s.header}>
                <div className={s.divLogo}>
                    <Link to='/'>
                    <h1 className={s.logo}>
                        <svg className={s.svg} width="40" height="31">
                            <use href={`${sprite}#vectorbook`}></use>
                        </svg>      
            <span className={s.logoGreen}>Finance </span>Ledger
                        </h1>
                    </Link>
            </div >
                    <ul className={s.menu}>
                        <li className={s.item}><NavLink   className={setActiveHome}  to="/">Home</NavLink></li>
                        <li className={s.item}><NavLink className={setActiveAbout} to="/about">About</NavLink></li>
                        <li className={s.item}><NavLink className={setActiveCases} to="/cases">Cases</NavLink></li>
                        <li className={s.item}><NavLink className={setActiveBlog} to="/blog">Blog</NavLink></li>
                        <li className={s.item}><NavLink className={setActiveContact} to="/contact">Contact</NavLink></li>
                    </ul>
            </header>
            </div>

    )
}

export default Header;