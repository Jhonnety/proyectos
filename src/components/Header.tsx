import { Link, NavLink } from 'react-router-dom';
import luisAmigoLogo from '../assets/logos/luisAmigoLogo.png'
import { useEffect, useState } from 'react';

export const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [screen, setScreen] = useState(true)

    const toggleNav = (responsiveNav: boolean = false) => {
        if (responsiveNav) setIsNavOpen(false);
        else setIsNavOpen(!isNavOpen);
    };
    const handleResize = () => {
        if (window.innerWidth > 990) {
            setIsNavOpen(false);
            setScreen(true);
        }
        else {
            setScreen(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="navbarProjects">

            <div className="navbarMainContainer1"></div>

            <div className="navbarMainContainer2">

                <div className="logoNavbarContainer">

                    <Link to="https://www.funlam.edu.co">
                        <img className='luisAmigoLogoNavbar' src={luisAmigoLogo} alt='Luis Amigó logo' />
                    </Link>

                    <button className="navbaToggle" onClick={() => toggleNav()}>
                        <i className={`navResponsiveButton ${isNavOpen ? 'fa-regular fa-xmark' : 'fa-solid fa-bars navbar-toggle-icon'}`}></i>
                    </button>

                </div>
                {(screen || isNavOpen) &&
                    <div className={`dropdownMenuNavbar ${(screen == false && isNavOpen) ? 'slideInDownAnimation' : ''}`}>


                        <ul className='navbarMainMenu'>

                            <NavLink
                                className={({ isActive }: any) => `${isActive ? 'active linkNavbar' : 'linkNavbar'}`}
                                to="/proyectos"
                                onClick={() => toggleNav(true)}
                            >Proyectos</NavLink>

                        </ul>

                        <ul className='socialMediaNavbarContainer'>
                            <a href='https://www.instagram.com/ucatolicaluisamigo/' target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href='https://www.facebook.com/ucatolicaluisamigo' target='_blank'><i className="fa-brands fa-facebook"></i></a>
                            <a href='https://www.youtube.com/ucatolicaluisamigo' target='_blank'><i className="fa-brands fa-youtube"></i></a>
                            <a href='https://twitter.com/uluisamigo' target='_blank'><i className="fa-brands fa-twitter"></i></a>
                            <a href='https://www.flickr.com/photos/funlam' target='_blank'><i className="fa-brands fa-flickr"></i></a>
                            <a href='https://open.spotify.com/show/32Z1RqCtlkpLEcheYpZkuv' target='_blank'><i className="fa-brands fa-spotify"></i></a>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    )
}
