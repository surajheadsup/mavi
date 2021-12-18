import Link from "next/link";
import Script from "next/script";
import React from "react";


const LoadJs = () => {
    return ( <>
        <Script src="/assets/js/plugins/bootstrap.bundle.min.js"></Script>
        
        <Script src="/assets/js/plugins/imagesloaded.min.js"></Script>
        <Script src="/assets/js/plugins/isotope.pkgd.min.js"></Script>
        <Script src="/assets/js/plugins/jquery.counterup.min.js"></Script>
        <Script src="/assets/js/plugins/jquery.inview.min.js"></Script>
        <Script src="/assets/js/plugins/jquery.easypiechart.js"></Script>
        <Script src="/assets/js/plugins/jquery.countdown.min.js"></Script>
        <Script src="/assets/js/plugins/wow.min.js"></Script>
        <Script src="/assets/js/custom.js"></Script>
        </>
     );
}
 
export default LoadJs;