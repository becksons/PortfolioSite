import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import images from '../images';
import DropdownMenu from './DropdownMenu';

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="nav-section">
                <div className="nav-banner">
                    <img src={images.yourPhoto} alt="Beck Sonstein" className="profile-photo"/>
                    <div className="vertical-layout2">
                        <p className="welcome-text">Beck Sonstein</p>
                        <p className="occupation">software engineer</p>
                        <p className="location">new york,ny</p>
                        <p className="profile-text">Welcome to my site!</p>
                    </div>
                    <img src={images.homeIcon} alt="Home Icon" className="home-icon"/>

                </div>
            </header>
            <main className="main-section">
                <img src={images.skyline} alt="Skyline" className="skyline"/>
                <div className="vertical-layout">
                    <h1 className="contact-title">Contact:</h1>
                    <div className="contact-content">
                        Email:
                        <p className="email">bsonbec@gmail.com</p>
                        Number:
                        <p className="cellnumber">516-477-6782</p>
                        Linkedin:
                        <p className="linkedin">https://www.linkedin.com/in/becksons/</p>
                        Github:
                        <p className="github">https://github.com/becksons</p>
                    </div>
                </div>
                <aside className="vertical-layout3">
                    <div className="skills-content">
                        <div className="item">Skills:</div>
                        <div className="item2">Programming languages:</div>
                        <p className="item3">Python, Java, C, C++, SQL, Javascript, Typescript, Kotlin, Flutter/Dart, HTML, CSS</p>
                        <p className="frameworks-libraries">Frameworks & Libraries:</p>
                        <p className="item3">Pytorch, transformers, NLTK, matplotlib, numpy, pandas, flask, Node.js</p>
                        <p className="frameworks-libraries"> Database Management:</p>
                        <p className="item3">MySQL, MongoDB, Firebase</p>
                        <p className="frameworks-libraries">Tools & Other Skills:</p>
                        <p className="item3">Docker, Android Studio, Jupyter Notebook, Git/Github/Gitlab, Sonic Visualizer, SSH, homebrew, Figma, Node.js, Express, Angular</p>
                    </div>
                </aside>
                <div className="about-me">
                    <p className="about-me-title">About Me:</p>
                    <p>My name is Beck, and I recently graduated Boston University with a B.A. in Computer Science, May 2024. Specializing in both software engineering and data science</p>
                </div>
                <div className="go-to-vs">
                    <view className="go-to-vs-background"></view>
                    <Link to="/virtualspace">
                        <img src={images.portal} alt="Portal" className="portal"/>
                        <img src={images.greetingGif} draggable="true" alt="Character" className="greeting-animation"/>
                    </Link>
                    <Link to="/virtualspace">
                        <div className="image-button-container">
                            <img src={images.purplenavbutton} alt="Button" className="image-button"/>
                            <span className="button-text">Click here to enter my virtual space!</span>
                        </div>
                    </Link>
                </div>
            </main>
            <DropdownMenu />
        </div>
    );
};

export default HomePage;
