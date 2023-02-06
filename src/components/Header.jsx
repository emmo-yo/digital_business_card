import React from 'react'
import profile_pic from '../images/profile_pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
    return <header>
        <img className="header--img" src={profile_pic} alt="profile picture" />
        <h1 className="title-name">Emma Olsson</h1>
        <h3>Frontend Developer</h3>
        <div className="button-container">
            <a 
                href="https://github.com/emmo-yo" 
                className="main-btn" 
                id="email-btn"
                >
                <FontAwesomeIcon 
                    icon={faGithub} 
                    className="header-icon"/
                > Portfolio 
            </a>
            <a 
                href="https://www.linkedin.com/in/emma-olsson-52482b114" 
                className="main-btn" 
                id="linkedin-btn"
                >
                <FontAwesomeIcon 
                    icon={faLinkedin} 
                    className="header-icon"/
                > LinkedIn
            </a>
        </div>
    </header>
}