import React from 'react'
const BreadCrumbs = (props) => {
    return ( 
        <div className={`subheader relative z-1 ${props.className}`} >
            <div className="container relative z-1">
                <div className="row">
                    <div className="col-12">
                        <h1 className="page_title">{props.page}</h1>
                        <div className="page_breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">{props.page}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <img src="assets/images/elements/element_19.png" alt="element" className="element_1 slideRightTwo"/>
                <img src="assets/images/elements/element_10.png" alt="element" className="element_2 zoom-fade"/>
                <img src="assets/images/elements/element_20.png" alt="element" className="element_3 rotate_elem"/>
                <img src="assets/images/elements/element_21.png" alt="element" className="element_4 rotate_elem"/>
            </div>
        </div>
     );
}
 
export default BreadCrumbs;