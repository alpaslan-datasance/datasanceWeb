"use client"
import CookieConsent from "react-cookie-consent";
import React from 'react'
import Link from "next/link";

function CustomConsent() {
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="OK"
                cookieName="Datasance-Cookie"
                style={{ background: "#000000" }}
                buttonStyle={{ backgroundColor:"#ffffff", color: "#000000", fontSize: "13px", borderRadius:"5px" }}
                expires={150}
                declineButtonText="No"
                declineButtonStyle={{ backgroundColor:"#ffffff", color: "#000000", fontSize: "13px", borderRadius:"5px" }}
                enableDeclineButton
            >
                <div className="">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it. <Link href={"/privacy-policy"} style={{marginLeft:"0.1rem", fontWeight:"bold", color:"#EF4444"}}>Privacy Policy</Link></div>
            </CookieConsent>
        </div>
    )
}

export default CustomConsent