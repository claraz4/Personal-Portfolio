import React from "react";
import "../styles.css";

export default function Footer() {
    // Get the current year
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <div className="footer--container">
            <p className="footer--copyright">© {currentYear} by Clara Zammar.</p>
            <div className="footer--wix">
                <p>Inspired by&nbsp;</p>
                <a href="https://manage.wix.com/account/sites?referralAdditionalInfo=Route">Wix</a>
                .
            </div>
        </div>
    )
}