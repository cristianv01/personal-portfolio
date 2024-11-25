'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: '/images/marketplace/aToZ.png', caption: 'Alphabetical Sorting View' },
    { src: '/images/marketplace/delete_Listing.png', caption: 'Listing Deletion Interface' },
    { src: '/images/marketplace/edit_RUSure.png', caption: 'Edit Confirmation Dialog' },
    { src: '/images/marketplace/editlist.png', caption: 'Edit Listing Form' },
    { src: '/images/marketplace/electronics.png', caption: 'Electronics Category View' },
    { src: '/images/marketplace/fullListings.png', caption: 'Complete Listings Display' },
    { src: '/images/marketplace/hightoLow.png', caption: 'Price High to Low Sort' },
    { src: '/images/marketplace/listingDetails.png', caption: 'Detailed Listing View' },
    { src: '/images/marketplace/lowToHighRange.png', caption: 'Price Range Filter View' },
    { src: '/images/marketplace/makeListing.png', caption: 'Create Listing Form' },
    { src: '/images/marketplace/MP_EditUser.png', caption: 'User Profile Editor' },
    { src: '/images/marketplace/Updated_Listing_Details.png', caption: 'Updated Listing View' },
    { src: '/images/marketplace/userlist.png', caption: 'User Listings Overview' }
];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={prevSlide}>
        ←
      </button>
      <div className={styles.carouselContent}>
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].caption}
          width={800}
          height={450}
          className={styles.carouselImage}
        />
        <p className={styles.imageCaption}>{images[currentIndex].caption}</p>
        <div className={styles.pagination}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={nextSlide}>
        →
      </button>
    </div>
  );
};

export default function ProjectPage() {
  return (
    <div className={styles.projectContainer}>
     
      <article className={styles.content}>
        <h1>VT Marketplace</h1>
        
        <section className={styles.overview}>
          <h2>Project Overview</h2>
          <p>A comprehensive e-commerce platform designed specifically for the Virginia Tech community. This marketplace enables students to buy and sell items within various categories, featuring both auction and fixed-price listings. The platform includes sophisticated user management, admin controls, and advanced filtering capabilities.</p>
        </section>

        <div className={styles.showcase}>
          <ImageCarousel />
        </div>

        <section className={styles.features}>
          <h2>Key Features</h2>
          <ul>
            <li>User authentication and profile management system</li>
            <li>Multi-category listing support with image uploads</li>
            <li>Advanced filtering and sorting capabilities</li>
            <li>Auction and fixed-price listing options</li>
            <li>Admin dashboard with comprehensive statistics</li>
            <li>Secure user data management</li>
          </ul>
        </section>

        <section className={styles.technical}>
          <h2>Technical Implementation</h2>
          <ul>
            <li>Frontend built with ReactJS for dynamic user interactions</li>
            <li>Dual database system utilizing MongoDB and MySQL</li>
            <li>RESTful API architecture for robust data handling</li>
            <li>Secure authentication and data encryption</li>
            <li>Responsive design for mobile and desktop compatibility</li>
          </ul>
        </section>

        <section className={styles.contribution}>
          <h2>My Role</h2>
          <ul>
            <li>Developed complex queries for admin functionality</li>
            <li>Designed and implemented the Admin Dashboard GUI</li>
            <li>Created the reporting system interface</li>
            <li>Integrated backend services with dual databases</li>
            <li>Enhanced frontend functionality and user experience</li>
          </ul>
        </section>
      </article>
    </div>
  );
}