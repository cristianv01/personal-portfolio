'use client';
import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>

      <div className={styles.resumeContent}>
        <div className={styles.controls}>
          <a 
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewButton}
          >
            View PDF
          </a>
          <a 
            href="/resume/resume.pdf"
            download="CristianValencia_Resume.pdf"
            className={styles.downloadButton}
          >
            Download Resume
          </a>
        </div>

        <div className={styles.pdfViewer}>
          <iframe
            src="/resume/resume.pdf"
            title="resume"
            className={styles.pdfFrame}
          />
        </div>
      </div>
    </div>
  );
}