import React from 'react'
import { FaGithubSquare, FaPaw } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="footer--container">
            < FaPaw className="footer-icon"/>
            <a href="https://github.com/emmo-yo" className="footer-link">< FaGithubSquare className="footer-icon"/></a>
            < FaPaw className="footer-icon"/>
        </div> 
    )
}