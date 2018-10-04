import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        
        <section>
            <h2>Contact Me</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>Pittsburgh, Pennsylvania</dd>
                <dt>Phone</dt>
                <dd>(412) 418-2267</dd>
                <dt>Email</dt>
                <dd><a href="https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=DmwnWrRmTWlvSVKjdHTFPLCjtQtPqKRkZxxlVwLzjjmtbVRzzJtnTgMfZfLkjzlRltnCBdZGrthg">abutler9882@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://twitter.com/nuggetlord82" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100006182025226" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/tubbyblack14/" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="https://github.com/ALEXANDERB82" className="icon fa-github alt"><span className="label">GitHub</span></a></li>

            </ul>
        </section>
        <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
