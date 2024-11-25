'use client';
import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectPage() {
 return (
   <div className={styles.projectContainer}>
  
     
     <article className={styles.content}>
       <h1>Optimized Threadpool</h1>
       
       <section className={styles.overview}>
         <h2>Project Overview</h2>
         <p>An advanced implementation of a multi-lock, work-helping/stealing thread pool in C. This system pre-initializes threads for concurrent task execution, featuring sophisticated optimization techniques to enhance application performance. The implementation includes work stealing mechanisms that allow idle threads to acquire tasks from busy ones, maximizing thread utilization and overall system efficiency.</p>
       </section>

       <section className={styles.performance}>
          <h2>Performance Achievement</h2>
          <p>The implementation achieved exceptional performance metrics, ranking 2nd fastest out of 250 students in benchmark testing. This outstanding result demonstrates the effectiveness of the optimization techniques employed in the system.</p>
          <div className={styles.benchmarkContainer}>
            <Image
              src="/images/benchmark.png"
              alt="Threadpool Benchmark Results"
              width={800}
              height={400}
              className={styles.benchmarkImage}
            />
            <p className={styles.imageCaption}>Benchmark Results: Achieved 2nd fastest implementation (cristianv: 15.88ms)</p>
          </div>
        </section>


       <section className={styles.features}>
         <h2>Key Features</h2>
         <ul>
           <li>Dual-queue system with global and local task distribution</li>
           <li>Work stealing mechanism for optimal load balancing</li>
           <li>CPU pinning for enhanced cache utilization</li>
           <li>False sharing prevention through strategic padding</li>
           <li>Barrier synchronization for coordinated thread execution</li>
           <li>Graceful shutdown handling</li>
           <li>Fisher-Yates based random work stealing algorithm</li>
         </ul>
       </section>

       <section className={styles.technical}>
         <h2>Technical Implementation</h2>
         <ul>
           <li>Implemented in C for maximum performance and low-level control</li>
           <li>Custom doubly linked list implementation for task management</li>
           <li>Thread-safe future system for task result handling</li>
           <li>Memory-efficient structure padding to prevent cache line sharing</li>
           <li>Advanced synchronization mechanisms using locks and condition variables</li>
         </ul>
       </section>

       <section className={styles.architecture}>
         <h2>System Architecture</h2>
         <p>The thread pool is built around three main components:</p>
         <ul>
           <li><strong>Worker Threads:</strong> Self-contained units with local task queues and thread-specific locks</li>
           <li><strong>Thread Pool Manager:</strong> Coordinates task distribution and worker thread management</li>
           <li><strong>Future System:</strong> Handles task submission, result retrieval, and synchronization</li>
         </ul>
       </section>

       <section className={styles.optimization}>
         <h2>Performance Optimizations</h2>
         <ul>
           <li>CPU core pinning to reduce context switching overhead</li>
           <li>Cache-aligned structure padding to prevent false sharing between threads</li>
           <li>Randomized work stealing to minimize contention and improve load distribution</li>
           <li>Efficient barrier synchronization for coordinated thread startup</li>
           <li>Minimal lock contention through local task queues</li>
         </ul>
       </section>

       <section className={styles.outcome}>
         <h2>Project Impact</h2>
         <p>The implementation achieves several key performance goals:</p>
         <ul>
           <li>Minimized thread creation overhead through pre-initialization</li>
           <li>Reduced contention through sophisticated queue management</li>
           <li>Optimized cache utilization via careful memory layout</li>
           <li>Enhanced load balancing through intelligent work stealing</li>
           <li>Reliable task execution with graceful shutdown capabilities</li>
         </ul>
       </section>
     </article>
   </div>
 );
}