const Card = (props) => {
    return ( 
        <div className="features_box style_2  wow fadeInDown" data-wow-delay=".20ms" style={{visibility: 'visible', animationDelay: '0.2ms', animationName: 'fadeInDown'}}>
            <div className="icon">
                <img src="assets/images/icons/icon_10.png" alt="icon"/>
            </div>
            <h5 style={{fontSize : props.fontSize}}>{props.heading}</h5>
            <p>{props.subheading}</p>
            <a href="services.html" className="thm-btn bg-thm-color-two-light thm-color-two btn-rectangle btn-small mt-2">
                <i className={`${props.icon} font-weight-bold`}></i>
            </a>
        </div>
     );
}
 
export default Card;