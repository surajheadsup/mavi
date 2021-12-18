import React from 'react';
import styles from '../styles/Footer.module.css';
const Footer = () => {
    return ( 
        <footer class={`footer bg-thm-color-two-gradient style_2 z-1 ${styles.newFooter}`}>
        <img src="assets/images/elements/element_13.png" class="element_1" alt="Element"/>
        <img src="assets/images/elements/element_14.png" class="element_2" alt="Element"/>
        <div class="container relative z-1">
            <div class="footer_top section-padding">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="ft_widget ft_about wow fadeInDown">
                            <a href="index.html" class="logo">
                                <img src="assets/images/logo.png" alt="logo" class="image-fit"/>
                            </a>
                            <ul class="info">
                                <li>
                                    <a href="#">256 Elizaberth Ave Str, Brooklyn, CA, 90025</a>
                                </li>
                                <li>
                                    <a href="tel:+01234567899">+012 (345) 678 99</a>
                                </li>
                                <li>
                                    <a href="mailto:example@example.com">example@example.com</a>
                                </li>
                            </ul>
                            <ul class="social">
                                <li>
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-behance"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="ft_widget ft_menu wow fadeInUp">
                            <h6 class="ft-title">Our Coach</h6>
                            <ul>
                                <li>
                                    <a href="#">Basic Life Coach</a>
                                </li>
                                <li>
                                    <a href="#">Advance Helath Coach</a>
                                </li>
                                <li>
                                    <a href="#">Advance Business Coach</a>
                                </li>
                                <li>
                                    <a href="#">Basic Learn English</a>
                                </li>
                                <li>
                                    <a href="#">Web Development</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="ft_widget ft_menu wow fadeInDown">
                            <h6 class="ft-title">About Us</h6>
                            <ul>
                                <li>
                                    <a href="#">Latest Courses</a>
                                </li>
                                <li>
                                    <a href="#">Mission & Vision</a>
                                </li>
                                <li>
                                    <a href="#">Our Approach</a>
                                </li>
                                <li>
                                    <a href="#">Exclusive Advisors</a>
                                </li>
                                <li>
                                    <a href="#">Join a Career</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="ft_widget ft_newsletter wow fadeInUp">
                            <h6 class="ft-title">Newsletter</h6>
                            <p class="mb-xl-20">Sed ut perspici unde omnis iste natus error sit voluptatem accus</p>
                            <form>
                                <input type="email" name="#" placeholder="Enter Your Email" autocomplete="off"/>
                                <button type="submit" class="thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">Subscribe Now <i class="fal fa-chevron-right ml-2"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer_bottom">
                <p class="mb-0">
                    © 2021 <a href="#">Wellco</a>. All Rights Reserved, Design By Webtend
                </p>
            </div>
            <img src="assets/images/elements/element_16.png" alt="element" class="element_3 rotate_elem"/>
            <div class="arrows to_up slideTop">
                <div class="arrow"></div>
                <div class="arrow"></div>
                <div class="arrow"></div>
                <div class="arrow"></div>
                <div class="arrow"></div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;