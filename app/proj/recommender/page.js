'use client';
import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function MovieRecommender() {
  return (
    <div className={styles.projectContainer}>

      
      <article className={styles.content}>
        <h1>Movie Recommender System</h1>
        
        <section className={styles.overview}>
          <h2>Project Overview</h2>
          <p>A sophisticated recommendation engine designed to combat decision fatigue in content selection. This system analyzes the MovieLens 20M dataset to provide personalized movie suggestions based on user behavior and preferences, ultimately enhancing user experience in digital entertainment platforms.</p>
        </section>

        <section className={styles.implementation}>
          <h2>Technical Implementation</h2>
          <p>The system employs a memory-efficient collaborative filtering approach using Singular Value Decomposition (SVD). Key technical features include:</p>
          <ul>
            <li>Matrix factorization implementation using SVD for efficient processing</li>
            <li>Sparse matrix representation to optimize memory usage</li>
            <li>Custom user-movie mapping system for consistent predictions</li>
            <li>Personalized recommendation generation with exclusion of previously rated movies</li>
          </ul>
        </section>

        <section className={styles.techStack}>
          <h2>Technology Stack</h2>
          <ul>
            <li>Python for core implementation</li>
            <li>NumPy & Pandas for data manipulation</li>
            <li>SciPy for sparse matrix operations and SVD</li>
            <li>Matplotlib & Seaborn for data visualization</li>
            <li>Scikit-Learn for machine learning operations</li>
          </ul>
        </section>

        <section className={styles.results}>
          <h2>Current Results</h2>
          <p>The system's performance is currently being measured using industry-standard metrics:</p>
          <ul>
            <li>Root Mean Square Error (RMSE): 1.5570</li>
            <li>Mean Absolute Error (MAE): 1.2407</li>
          </ul>
          <p>These metrics are being continuously improved through optimization techniques and model refinement.</p>
        </section>

        <section className={styles.future}>
          <h2>Future Developments</h2>
          <p>The project is actively evolving with planned enhancements including:</p>
          <ul>
            <li>Integration of content-based filtering using movie metadata</li>
            <li>Development of genre-based recommendation features</li>
            <li>Implementation of a hybrid recommendation system</li>
            <li>Advanced parameter optimization</li>
          </ul>
        </section>
      </article>
      <aside className={styles.visualContainer}>
        <div className={styles.visualCard}>
            <Image
                src="/images/recommender.png"
                alt="User-Movie Rating Heatmap"
                width={400}
                height={500}
                className={styles.visual}
            />
            <p className={styles.caption}>User-Movie Rating Distribution Heatmap</p>

        </div>
        <div className={styles.visualCard}>
            <Image
                src="/images/cleanup.png"
                alt="Rating Distribution Charts"
                width={400}
                height={250}
                className={styles.visual}
            />
            <p className={styles.caption}>Distribution of Ratings and User Activity</p>

        </div>
        <div className={styles.visualCard}>
            <Image
                src="/images/sample.png"
                alt="Sample Recommendations Output"
                width={400}
                height={500}
                className={styles.visual}
            />
            <p className={styles.caption}>Sample Movie Recommendations</p>

        </div>

      </aside>
    </div>
  );
}