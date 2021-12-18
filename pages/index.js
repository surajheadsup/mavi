import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Card from "../components/Card";
import H3 from "../components/H3";
import P from "../components/P";
import parse from 'html-react-parser';

export default function Home() {
  return (
    <>
      <div className="banner relative z-1">
        <img src="assets/images/banner/element_1.png" className="element_1" alt="Element"/>
        <img src="assets/images/banner/element_line.png" className="element_line" alt="Element Line"/>
        <div className="transform-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="text_box">
                            <h1 className={'title wow fadeInUp'}><span>MaVie</span></h1>
                            <h5 className="title wow fadeInUp" data-wow-delay=".30ms">Your Ultimate Destination to Get Top-notch Medical Facilities at Discounted Rates</h5>
                            {/* <p className="wow fadeInUp" data-wow-delay=".40ms">Sed ut perspiciatis unde omnis iste natus error voluptatem accan tium doloremque laudantium totam rem aperiam</p> */}
                            {/* <a href="about-2.html" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-rounded mr-4 mb-4 wow fadeInRight" data-wow-delay=".50ms">Get Coach <i className="fal fa-chevron-right ml-2"></i></a>
                            <a href="https://www.youtube.com/watch?v=TKnufs85hXk" className="video_btn video_text popup-youtube mb-4  wow fadeInRight" data-wow-delay=".70ms">
                                <i className="fas fa-play video_icon bg-thm-color-three"></i>
                                <span>Watch Videos</span>
                            </a> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image_box relative wow fadeInRight" data-wow-delay=".80ms">
                            <img src="assets/images/banner/banner_img.png" alt="img" className="image-fit"/>
                            <span className="bg-thm-color-three circle_element"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-line container"></div>
    </div>
    <section class={`section section-bg about_bg about style_2 ${styles.aboutHome}`}>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-6">
                    <div className="image_boxes relative z-1 mb-md-80 h-100">
                        <img src="assets/images/about/small.jpg" className="small_img wow fadeInUp" alt="img"/>
                        <img src="assets/images/about/about_img.jpg" className="big_img wow fadeInDown" alt="img"/>
                        <img src="assets/images/elements/element_22.png" className="element_1" alt="Element"/>
                        <img src="assets/images/elements/element_23.png" className="element_2 rotate_elem" alt="Element"/>
                        <img src="assets/images/elements/element_24.png" className="element_3 rotate_elem" alt="Element"/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="section-title left-align wow fadeInDown">
                        <p className="subtitle">
                            <i className="fal fa-book"></i>
                            Who We Are
                        </p>
                        <H3 className={"title"} text={'About us'}/>
                        <P align={'justify'} className={"mb-2"} text={parse(`<strong>MaVie</strong> means <strong>“My Life”</strong> implying each and every life holds a value for us. We MaVie, an online aggregator of health centers providing healthcare facilities that will be affordable and convenient to everyone.`)}/>
                        <P align={'justify'} className={"mb-0"} text={parse(`We tend to achieve this by providing health centers with the aim of standardization on various measures like <strong style="font-size : 16px;letter-spacing : 0.5px;">discounted OPD appointments, medicines, check-ups, emergency cases, lab tests, free medical asistance related to medical services.</strong> We will also provide medical insurance and appointment bookings with ease.`)}/>
                    </div>
                    
                    <a href="about.html" className="thm-btn bg-thm-color-two thm-color-two-shadow btn-rectangle wow fadeInDown">
                        Learn More
                        <i className="fal fa-chevron-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
      <section className="section-padding">
        <div className="container">
            <div className="row">
              <div className="col-12">
                  <div className="section-title wow fadeInUp">
                      <p className="subtitle">
                          <i className="fal fa-book"></i>
                          What We Offer
                      </p>
                      <H3 className={'title'} text={'Our Services'}/>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6"><Card fontSize={18} heading={'Discount on OPD Appointments'} icon={'fal fa-chevron-right'} readmore={'read more'}/></div>
              <div className="col-lg-3 col-md-6"><Card fontSize={18} heading={'Discount on Medicines and Doorstep Delivery'} icon={'fal fa-chevron-right'} readmore={'read more'}/></div>
              <div className="col-lg-3 col-md-6"><Card fontSize={18} heading={parse('Online Consultation<p>&nbsp;</p>')} icon={'fal fa-chevron-right'} readmore={'read more'}/></div>
              <div className="col-lg-3 col-md-6"><Card fontSize={18} heading={parse('Free Medical Assistance<p>&nbsp;</p>')} icon={'fal fa-chevron-right'} readmore={'read more'}/></div>
            </div>
          </div>
      </section>
      <section className="bg-thm-color-two-gradient z-1 video_quote">
        <img src="assets/images/elements/element_2.png" className="element_2" alt="Element"/>
        <div className="container-fluid p-0">
            <div className="row no-gutters align-items-center">
                <div className="col-lg-6">
                    <div className="video_warp relative z-1 h-100 wow fadeInLeft">
                        <img src="assets/images/video_img.png" alt="img" className="image-fit"/>
                        <a href="https://www.youtube.com/watch?v=TKnufs85hXk" className="popup-youtube video_btn transform-center justify-content-center d-flex style_2">
                            <i className="fas fa-play video_icon bg-thm-color-three pulse-animated"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="arrows slideRight">
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                    </div>
                    <img src="assets/images/elements/element_11.png" className="element_4 rotate_elem" alt="img"/>
                    <div className="quote_sec about relative z-1">
                        <img src="assets/images/elements/element_17.png" className="element_5 rotate_elem" alt="img"/>
                        <div className="section-title left-align wow fadeInUp">
                            <H3 className={"title mb-0"} text={'Our Mission'}/>
                        </div>
                        <P text={`To enhance the quality and effectiveness of health care by encouraging excellence and professionalism in the practice of medicine.`}/>
                        
                    </div>
                    <div className="quote_sec about relative z-1">
                        <img src="assets/images/elements/element_17.png" className="element_5 rotate_elem" alt="img"/>
                        <div className="section-title left-align wow fadeInUp">
                            <H3 className={"title mb-0"} text={'Our Vision'}/>
                        </div>
                        <P text={`To be recognized globally as the leader in pro- moting and providing quality patient care, advocacy, education and career fulfillment in healthcare sectors and its subspecialities at best-discounted rates.`}/>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
