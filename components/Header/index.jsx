'use client'
import styles from './style.module.scss';
import { useState } from 'react';
import Nav from './nav';
// import { AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Index() {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    const scrollToProjects = (e) => {
        e.preventDefault();
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const ProjectsLink = () => {
        // If we're on the home page
        if (pathname === '/') {
            return (
                <Link href="#projects" onClick={scrollToProjects} className={styles.el}>
                    <p>Projects</p>
                    <div className={styles.indicator}></div>
                </Link>
            );
        }
        // If we're on any other page
        return (
            <Link href="/#projects" className={styles.el}>
                <p>Projects</p>
                <div className={styles.indicator}></div>
            </Link>
        );
    };

    return (
        <div className={styles.header}>
            <div className={styles.nav}>
                <Link href="/resume" style={{textDecoration: 'none'}} className={styles.el}>
                    <p>Resume</p>
                    <div className={styles.indicator}></div>
                </Link>
                <div className={styles.el}>
                    <p>About [WIP]</p>
                    <div className={styles.indicator}></div>
                </div>
                <ProjectsLink />
                <div className={styles.el}>
                    <p>Photography[WIP]</p>
                    <div className={styles.indicator}></div>
                </div>
            </div>
        </div>
           
    )
}