import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Milan Anand Raj</h2>
        <p>
          <a href="mailto:manandraj20@iitk.ac.in">manandraj20@iitk.ac.in</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Milan. I am a{' '}
        <a href="https://www.iitk.ac.in/">IIT Kanpur</a> graduate, cofounder at{' '}
        <a href="https://knowledgeedgeai.com/">KnowledgeEdgeAI Software Solutions</a>. Previously, I
        worked at{' '}
        <a href="https://www.databricks.com/">Databricks</a> and{' '}
        <a href="https://www.tensixty.bio/">Tensixty biosciences</a>.
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
      <p className="copyright">
        &copy; Milan Anand Raj <Link to="/">manandraj20.github.io/personal-site/</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
