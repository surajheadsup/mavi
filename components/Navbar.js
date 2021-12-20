import Link from "next/link";
import React from "react";
import LoadCss from "./LoadCss";
import LoadJs from "./LoadJs";
import MobileNavbar from "./MobileNavbar";
const Navbar = ({children}) => {
    return ( <>
        <LoadCss/>
            <header className="header header-absolute can-sticky">
                <div className="container">
                    <div className="nav_warp">
                        <nav>
                            <div className="logo">
                                <a href="index.html">
                                    <img src="/assets/images/logo.png" alt="logo" className="image-fit"/>
                                </a>
                            </div>
                            
                        </nav>
                        <div className="head_actions">
                        <ul className="main-menu">
                                <li className="menu-item"><Link href="/"><a>Home</a></Link></li>
                                <li className="menu-item"><Link href="/about"><a>About</a></Link></li>
                                <li className="menu-item"><Link href="/services"><a>Services</a></Link></li>
                                <li className="menu-item"><Link href="/contact"><a>Contact</a></Link></li>
                                {/* <li className="menu-item"><Link href="/"><a>Home</a></Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            {/* <MobileNavbar/> */}
            <div className="main">{children}</div>
            
        <LoadJs/>
    </> );
}
 
export default Navbar;