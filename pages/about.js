import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import P from "../components/P";
import parse from 'html-react-parser';
const About = () => {
    return ( <>
        <BreadCrumbs page={'About us'} className={'about'}/>
        <section className="section about_inner">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6">
                        <div className="image_box shadow_1 mb-md-80 wow fadeInLeft">
                            <img src="assets/images/about/about.jpg" alt="img" className="image-fit"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title left-align wow fadeInDown">
                            <p className="subtitle">
                                <i className="fal fa-book"></i>
                                Who are we
                            </p>
                            <h3 className="title">About Us</h3>
                            <P align={'justify'} className={"mb-2"} text={parse(`<strong>MaVie</strong> means <strong>“My Life”</strong> implying each and every life holds a value for us. We MaVie, an online aggregator of health centers providing healthcare facilities that will be affordable and convenient to everyone.`)}/>
                            <P align={'justify'} className={"mb-0"} text={parse(`We tend to achieve this by providing health centers with the aim of standardization on various measures like <strong style="font-size : 16px;letter-spacing : 0.5px;">discounted OPD appointments, medicines, check-ups, emergency cases, lab tests, free medical asistance related to medical services.</strong> We will also provide medical insurance and appointment bookings with ease.`)}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title wow fadeInDown">
                        <p className="subtitle">
                            <i className="fal fa-book"></i>
                            Our Doctors
                        </p>
                        <h3 className="title">Meet Our Professinoal Doctors</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg col-md-6">
                    <div className="team_block style_2 wow fadeInUp">
                        <div className="team_img">
                            <img src="assets/images/team/1.jpg" alt="i" data-wow-delay=".10ms" className="image-fit"/>
                            <a href="#" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                                <i className="fal fa-plus"></i>
                            </a>
                        </div>
                        <h6 className="mb-1"><a href="#">Wallace D. Grace</a></h6>
                        <p className="thm-color-two mb-0 font-weight-bold">Coach Teacher</p>
                    </div>
                </div>
                <div className="col-lg col-md-6">
                    <div className="team_block style_2 wow fadeInDown" data-wow-delay=".20ms">
                        <div className="team_img">
                            <img src="assets/images/team/2.jpg" alt="img" className="image-fit"/>
                            <a href="#" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                                <i className="fal fa-plus"></i>
                            </a>
                        </div>
                        <h6 className="mb-1"><a href="#">Evan A. Ethridge</a></h6>
                        <p className="thm-color-two mb-0 font-weight-bold">Coach Teacher</p>
                    </div>
                </div>
                <div className="col-lg col-md-6">
                    <div className="team_block style_2 wow fadeInUp" data-wow-delay=".30ms">
                        <div className="team_img">
                            <img src="assets/images/team/3.jpg" alt="img" className="image-fit"/>
                            <a href="#" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                                <i className="fal fa-plus"></i>
                            </a>
                        </div>
                        <h6 className="mb-1"><a href="#">Marcus L. Duncan</a></h6>
                        <p className="thm-color-two mb-0 font-weight-bold">Coach Teacher</p>
                    </div>
                </div>
                <div className="col-lg col-md-6">
                    <div className="team_block style_2 wow fadeInDown" data-wow-delay=".40ms">
                        <div className="team_img">
                            <img src="assets/images/team/4.jpg" alt="img" className="image-fit"/>
                            <a href="#" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                                <i className="fal fa-plus"></i>
                            </a>
                        </div>
                        <h6 className="mb-1"><a href="#">Paul B. Gilliland</a></h6>
                        <p className="thm-color-two mb-0 font-weight-bold">Coach Teacher</p>
                    </div>
                </div>
                <div className="col-lg col-md-6">
                    <div className="team_block style_2 wow fadeInUp" data-wow-delay=".50ms">
                        <div className="team_img">
                            <img src="assets/images/team/5.jpg" alt="img" className="image-fit"/>
                            <a href="#" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                                <i className="fal fa-plus"></i>
                            </a>
                        </div>
                        <h6 className="mb-1"><a href="#">Donald T.Lewis</a></h6>
                        <p className="thm-color-two mb-0 font-weight-bold">Coach Teacher</p>
                    </div>
                </div>
                <div className="col-lg col-md-6">
                    <div className="team_block style_2 wow fadeInDown" data-wow-delay=".60ms">
                        <div className="team_img">
                            <img src="assets/images/team/6.jpg" alt="img" className="image-fit"/>
                            <a href="#" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                                <i className="fal fa-plus"></i>
                            </a>
                        </div>
                        <h6 className="mb-1"><a href="#">Allan J. Sumlin</a></h6>
                        <p className="thm-color-two mb-0 font-weight-bold">Coach Teacher</p>
                    </div>
                </div>
                <div className="col-lg col-md-6">
                    <div className="team_block style_2 wow fadeInUp" data-wow-delay=".70ms">
                        <div className="team_img">
                            <img src="assets/images/team/7.jpg" alt="img" className="image-fit"/>
                            <a href="#" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                                <i className="fal fa-plus"></i>
                            </a>
                        </div>
                        <h6 className="mb-1"><a href="#">Gracie T. Evans</a></h6>
                        <p className="thm-color-two mb-0 font-weight-bold">Coach Teacher</p>
                    </div>
                </div>
                <div className="col-lg col-md-6">
                    <div className="team_block style_2 wow fadeInDown" data-wow-delay=".80ms">
                        <div className="team_img">
                            <img src="assets/images/team/8.jpg" alt="img" className="image-fit"/>
                            <a href="#" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                                <i className="fal fa-plus"></i>
                            </a>
                        </div>
                        <h6 className="mb-1"><a href="#">David S. Hudson</a></h6>
                        <p className="thm-color-two mb-0 font-weight-bold">Coach Teacher</p>
                    </div>
                </div>
                <div className="col-lg col-md-6">
                    <div className="team_block style_2 wow fadeInUp" data-wow-delay=".90ms">
                        <div className="team_img">
                            <img src="assets/images/team/9.jpg" alt="img" className="image-fit"/>
                            <a href="#" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                                <i className="fal fa-plus"></i>
                            </a>
                        </div>
                        <h6 className="mb-1"><a href="#">Michael J. Randall</a></h6>
                        <p className="thm-color-two mb-0 font-weight-bold">Coach Teacher</p>
                    </div>
                </div>
                <div className="col-lg col-md-6">
                    <div className="team_block style_2 wow fadeInDown" data-wow-delay=".100ms">
                        <div className="team_img">
                            <img src="assets/images/team/10.jpg" alt="img" className="image-fit"/>
                            <a href="#" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                                <i className="fal fa-plus"></i>
                            </a>
                        </div>
                        <h6 className="mb-1"><a href="#">Joseph Anderson</a></h6>
                        <p className="thm-color-two mb-0 font-weight-bold">Coach Teacher</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section section-bg relative z-1 bg-thm-color-one testimonials">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title left-align white wow fadeInDown">
                        <p className="subtitle mb-4">
                            <i className="fal fa-book"></i>
                            Our Testimonials
                        </p>
                        <h3 className="title mb-0">What’s Our Clients<br/> About Us</h3>
                    </div>
                </div>
            </div>
            <div className="testimonial_slider style_2 row wow fadeInUp">
                
                <div className="slide-item col-12">
                    <div className="testimonial_item style_dark">
                        <div className="author">
                            <div className="image bg-thm-color-two">
                                <img src="assets/images/author/1.jpg" alt="img" className="image-fit"/>
                            </div>
                            <div className="text">
                                <h6 className="mb-0">Herminia F. Hudson</h6>
                                <p className="mb-0 font-weight-bold thm-color-two">Web Designer</p>
                            </div>
                        </div>
                        <p className="comment">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudtium totam rem aperiam eaque quae
                        </p>
                        <div className="ratings">
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star"></i>
                        </div>
                    </div>
                </div>
                
                
                <div className="slide-item col-12">
                    <div className="testimonial_item style_dark">
                        <div className="author">
                            <div className="image bg-thm-color-two">
                                <img src="assets/images/author/2.jpg" alt="img" className="image-fit"/>
                            </div>
                            <div className="text">
                                <h6 className="mb-0">Robert M. Morales</h6>
                                <p className="mb-0 font-weight-bold thm-color-two">Business Manager</p>
                            </div>
                        </div>
                        <p className="comment">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudtium totam rem aperiam eaque quae
                        </p>
                        <div className="ratings">
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star"></i>
                            <i className="fal fa-star"></i>
                        </div>
                    </div>
                </div>
                
                
                <div className="slide-item col-12">
                    <div className="testimonial_item style_dark">
                        <div className="author">
                            <div className="image bg-thm-color-two">
                                <img src="assets/images/author/3.jpg" alt="img" className="image-fit"/>
                            </div>
                            <div className="text">
                                <h6 className="mb-0">Nicolas Vanderpool</h6>
                                <p className="mb-0 font-weight-bold thm-color-two">Apps Developer</p>
                            </div>
                        </div>
                        <p className="comment">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudtium totam rem aperiam eaque quae
                        </p>
                        <div className="ratings">
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                        </div>
                    </div>
                </div>
                
                
                <div className="slide-item col-12">
                    <div className="testimonial_item style_dark">
                        <div className="author">
                            <div className="image bg-thm-color-two">
                                <img src="assets/images/author/1.jpg" alt="img" className="image-fit"/>
                            </div>
                            <div className="text">
                                <h6 className="mb-0">Herminia F. Hudson</h6>
                                <p className="mb-0 font-weight-bold thm-color-two">Web Designer</p>
                            </div>
                        </div>
                        <p className="comment">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudtium totam rem aperiam eaque quae
                        </p>
                        <div className="ratings">
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star"></i>
                        </div>
                    </div>
                </div>
                
                
                <div className="slide-item col-12">
                    <div className="testimonial_item style_dark">
                        <div className="author">
                            <div className="image bg-thm-color-two">
                                <img src="assets/images/author/2.jpg" alt="img" className="image-fit"/>
                            </div>
                            <div className="text">
                                <h6 className="mb-0">Robert M. Morales</h6>
                                <p className="mb-0 font-weight-bold thm-color-two">Business Manager</p>
                            </div>
                        </div>
                        <p className="comment">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudtium totam rem aperiam eaque quae
                        </p>
                        <div className="ratings">
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star"></i>
                            <i className="fal fa-star"></i>
                        </div>
                    </div>
                </div>
                
                
                <div className="slide-item col-12">
                    <div className="testimonial_item style_dark">
                        <div className="author">
                            <div className="image bg-thm-color-two">
                                <img src="assets/images/author/3.jpg" alt="img" className="image-fit"/>
                            </div>
                            <div className="text">
                                <h6 className="mb-0">Nicolas Vanderpool</h6>
                                <p className="mb-0 font-weight-bold thm-color-two">Apps Developer</p>
                            </div>
                        </div>
                        <p className="comment">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudtium totam rem aperiam eaque quae
                        </p>
                        <div className="ratings">
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                            <i className="fal fa-star active"></i>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
        
    </> );
}
 
export default About;