import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">© Маршак, 2020.</p>
            <p className="footer__author">Сделано студентами <span className="footer__span"><a className="footer__author-link" href="#">Яндекс.Практикум</a></span></p>
        </footer>
    );
}

export default Footer;