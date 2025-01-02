import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me_4.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Dheeraj Kodakandla</h2>
        <p>
          <a href="mailto:dheerajkodakandla10@gmail.com">dheerajkodakandla10@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Dheeraj. I am a Master&apos;s student in{' '}
        <a href="https://bulletins.psu.edu/graduate/programs/majors/computer-science-engineering/">CSE at Penn State University</a> and a graduate of {' '}
        <a href="https://www.iitr.ac.in/">IIT Roorkee</a>. I am passionate about backend development, artificial intelligence and distributed systems.
        I have over two years of software engineering experience, having worked at{' '}
        <a href="https://www.linkedin.com/company/weareallendigital">ALLEN Digital</a> and {' '}
        <a href="https://www.linkedin.com/company/zomato">Zomato</a>,
        where I designed scalable systems and optimized real-time operations.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
