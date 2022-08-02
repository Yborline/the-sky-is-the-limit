import s from './Header.module.css';
import * as Scroll from 'react-scroll';
import {useEffect} from 'react';
import sprite from '../../images/icons/sprites.svg'
import { useState } from "react";

function Header() {
    const [scroll, setScroll] = useState(0)
    const [width, setWidth] = useState(0)
    


    useEffect(() => {
                  setWidth(window.screen.width)
          const handleScroll = (event) => {
              setScroll(window.scrollY)   
          }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
    
    let Link   = Scroll.Link;
    
    
    const home = s.item + ' ' + s.activeHome;
    const about = s.item + ' ' + s.activeAbout;
    const cases = s.item + ' ' + s.activeCases;
    const blog = s.item + ' ' + s.activeBlog;
    const contact = s.item + ' ' + s.activeContact;
    return (

        <div >
            <header 
                className={width > 767 ?( scroll > 69 ? s.headerMobile  : s.header ): (scroll > 119 ? s.headerMobile  : s.header )  }>
                <div className={s.divLogo}>
                    <Link to='section1' smooth={true}>
                    <h1 className={s.logo}>
                        <svg className={s.svg} width="40" height="31">
                            <use href={`${sprite}#vectorbook`}></use>
                        </svg>      
            <span className={s.logoGreen}>Finance </span>Ledger
                        </h1>
                    </Link>
            </div >
                <ul className={s.menu}>
                    <Link
                        className={home}
    activeClass={s.home}
    to="section1"
    spy={true}
    smooth={true}
    offset={width>1359?-55 :(width>769? -62: -102)}
    duration={500}
                    >Home</Link>
                                        <Link
                        className={about}
       activeClass={s.about}
    to="section2"
    spy={true}
    smooth={true}
    offset={width>1359?-55 :(width>769? -62: -102)}
    duration={500}
                    >About</Link>
                                        <Link
                        className={cases}
       activeClass={s.cases}
    to="section3"
    spy={true}
    smooth={true}
    offset={width>1359?-55 :(width>769? -62: -102)}
    duration={500}
                    >Cases</Link>
                                        <Link
                        className={blog}
activeClass={s.blog}
    to="section4"
    spy={true}
    smooth={true}
    offset={width>1359?-53 :(width>769? -62: -102)}
    duration={500}
                    >Blog</Link>
                                        <Link
                        className={contact}
    activeClass={s.contact}
    to="section5"
    spy={true}
    smooth={true}
    offset={width>1359?-55 :(width>769? -62: -102)}
    duration={500}
                    >Contact</Link>
                    
                        {/* <li className={home}>Home</li>
                        <li className={about}>About</li>
                        <li className={cases}>Cases</li>
                        <li className={blog}>Blog</li>
                        <li className={contact}>Contact</li> */}
                {/* s.item     */}
                </ul>
            </header>
            </div>

    )
}

export default Header;