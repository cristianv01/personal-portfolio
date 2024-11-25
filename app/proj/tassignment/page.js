'use client';
import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image'
import Link from 'next/link';

export default function ProjectPage() {
  return (
    <div className={styles.projectContainer}>
      
      <article className={styles.content}>
        <h1>TA Assignment System</h1>
        
        <section className={styles.overview}>
          <h2>Project Overview</h2>
          <p>An automated system developed for Virginia Tech's Computer Science Department to streamline the Teaching Assistant (TA) assignment process. The project extends the existing "Hokie Teach" platform by implementing a sophisticated questionnaire system that matches prospective TAs with courses based on their skills, experience, and preferences.</p>
        </section>

        <section className={styles.role}>
          <h2>Role & Responsibilities</h2>
          <p>As the Project Manager and Technical Lead, I led a team of four developers to deliver this solution. My responsibilities included:</p>
          <ul>
            <li>Managing project timeline and coordinating team efforts across five sprints</li>
            <li>Leading stakeholder communications and requirement gathering</li>
            <li>Overseeing technical decisions and architecture planning</li>
            <li>Conducting code reviews and ensuring quality standards</li>
          </ul>
        </section>

        <section className={styles.features}>
          <h2>Key Features</h2>
          <ul>
            <li>Dynamic questionnaire system with separate student and faculty views</li>
            <li>Interactive course selection with hover-state information display</li>
            <li>Automated skills and experience assessment</li>
            <li>Smart alert system for course-specific requirements</li>
            <li>Digital agreement system with administrative customization</li>
            <li>Advanced search and filter functionality for faculty</li>
            <li>Integrated note-taking system for TA requests</li>
            <li>Persistent user profiles for returning TAs</li>
          </ul>
        </section>

        <section className={styles.technical}>
          <h2>Technical Implementation</h2>
          <ul>
            <li>Frontend prototyping done with Figma</li>
            <li>Built with MERN stack (MongoDB, Express.js, React, Node.js)</li>
            <li>Database deployment using MariaDB and Docker</li>
            <li>Integration with existing Hokie Teach CAS authentication system</li>
            <li>Responsive frontend design with real-time validation</li>
            <li>RESTful API architecture for seamless data flow</li>
          </ul>
        </section>

        <section className={styles.process}>
          <h2>Development Process</h2>
          <p>The project was executed over five sprints spanning 11 weeks:</p>
          <ul>
            <li>Sprint 1: Initial setup and codebase familiarization</li>
            <li>Sprint 2: Questionnaire frontend development</li>
            <li>Sprint 3: Dual interface implementation and containerization</li>
            <li>Sprint 4: Database integration and platform connectivity</li>
            <li>Sprint 5: Profile system implementation and final polish</li>
          </ul>
        </section>

        <section className={styles.outcome}>
          <h2>Project Outcome</h2>
          <p>Successfully delivered a comprehensive TA assignment system that:</p>
          <ul>
            <li>Automated the previously manual TA assignment process</li>
            <li>Reduced administrative overhead for the CS department</li>
            <li>Improved the matching accuracy between TAs and courses</li>
            <li>Enhanced the overall efficiency of the TA selection process</li>
          </ul>
        </section>
      </article>

      <aside className={styles.visualContainer}>
        <div className={styles.visualCard}>
            <Image
                src="/images/prof.png"
                alt="Professor Candidate Search Page"
                width={400}
                height={500}
                className={styles.visual}
            />
            <p className={styles.caption}>Professor Candidate Search Page</p>

        </div>
        <div className={styles.visualCard}>
            <Image
                src="/images/surveyprev.png"
                alt="Course Experience Portion nf Student Survey"
                width={400}
                height={250}
                className={styles.visual}
            />
            <p className={styles.caption}>Course Experience Portion of Student Survey</p>

        </div>
        <div className={styles.visualCard}>
            <Image
                src="/images/admin.png"
                alt="Admin Student-Course Matching View"
                width={400}
                height={500}
                className={styles.visual}
            />
            <p className={styles.caption}>Admin Student-Course Matching View</p>

        </div>

      </aside>
    </div>
  );
}