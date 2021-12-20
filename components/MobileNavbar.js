const MobileNavbar = () => {
    return ( 
        <aside className="aside_bar aside_bar_left aside_mobile">
        <a href="index.html" className="logo">
            <img src="assets/images/logo.png" alt="logo"/>
        </a>
        <nav>
            <ul className="main-menu">
                <li className="menu-item menu-item-has-children">
                    <a href="#">Home</a>
                    <ul className="sub-menu">
                        <li className="menu-item">
                            <a href="index.html">Home v1</a>
                        </li>
                        <li className="menu-item">
                            <a href="index-2.html">Home v2</a>
                        </li>
                        <li className="menu-item">
                            <a href="index-3.html">Home v3</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul className="sub-menu">
                        <li className="menu-item">
                            <a href="about.html">About Us</a>
                        </li>
                        <li className="menu-item">
                            <a href="about-2.html">About Me</a>
                        </li>
                        <li className="menu-item">
                            <a href="events.html">Events</a>
                        </li>
                        <li className="menu-item">
                            <a href="videos.html">Videos</a>
                        </li>
                        <li className="menu-item">
                            <a href="services.html">Services</a>
                        </li>
                        <li className="menu-item menu-item-has-children">
                            <a href="#">Team</a>
                            <ul className="sub-menu">
                                <li className="menu-item">
                                    <a href="team.html">Team</a>
                                </li>
                                <li className="menu-item">
                                    <a href="team-details.html">Team Details</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <a href="pricing.html">Pricing</a>
                        </li>
                        <li className="menu-item">
                            <a href="testimonials.html">Testimonials</a>
                        </li>
                        <li className="menu-item">
                            <a href="faqs.html">FAQ&apos;s</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                    <a href="#">Courses</a>
                    <ul className="sub-menu">
                        <li className="menu-item">
                            <a href="courses.html">Courses</a>
                        </li>
                        <li className="menu-item">
                            <a href="course-details.html">Course Details</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                    <a href="#">Blog</a>
                    <ul className="sub-menu">
                        <li className="menu-item">
                            <a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li className="menu-item">
                            <a href="blog-list.html">Blog List</a>
                        </li>
                        <li className="menu-item">
                            <a href="blog-masonry.html">Blog Masonry</a>
                        </li>
                        <li className="menu-item">
                            <a href="blog-details.html">Blog Details</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                    <a href="#">Portfolio</a>
                    <ul className="sub-menu">
                        <li className="menu-item">
                            <a href="portfolio-grid.html">Portfolio Grid</a>
                        </li>
                        <li className="menu-item">
                            <a href="portfolio-gallery.html">Portfolio Gallery</a>
                        </li>
                        <li className="menu-item">
                            <a href="portfolio-masonry.html">Portfolio Masonry</a>
                        </li>
                        <li className="menu-item">
                            <a href="portfolio-details.html">Portfolio Details</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="contact.html">Contacts</a>
                </li>
            </ul>
        </nav>
    </aside>
     );
}
 
export default MobileNavbar;