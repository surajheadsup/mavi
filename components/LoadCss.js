import React from "react";
import Head from "next/head";
import Script from "next/script";

const LoadCss = () => {
    return ( 
        <>
            <Script src="/assets/js/plugins/jquery-3.6.0.min.js"  strategy="beforeInteractive"></Script>
            <Script src="/assets/js/plugins/jquery.magnific-popup.min.js"></Script>
            <Script src="/assets/js/plugins/slick.min.js"></Script>
            <Head>
                <link href="/assets/css/plugins/bootstrap.min.css" rel="stylesheet"/>
                <link href="/assets/css/plugins/slick.css" rel="stylesheet"/>
                <link href="/assets/css/plugins/magnific-popup.css" rel="stylesheet"/>
                <link href="/assets/css/plugins/animate.css" rel="stylesheet"/>
                <link href="/assets/fonts/flaticon/flaticon.css" rel="stylesheet"/>
                <link href="/assets/fonts/font-awesome.min.css" rel="stylesheet"/>
                <link href="/assets/css/style1.css" rel="stylesheet"/>
                <link href="/assets/css/responsive1.css" rel="stylesheet"/>
            </Head>
            
        </>
     );
}
 
export default LoadCss;