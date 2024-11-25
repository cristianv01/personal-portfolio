'use client';
import styles from './style.module.scss'
import { useRouter } from 'next/navigation';

export default function Project({index, title, manageModal}) {
    const router = useRouter();

    const handleProjectClick = () => {
        // Define the route based on the project title
        let route = '';
        switch(title) {
            case "TA Assignment":
                route = '/proj/tassignment';
                break;
            case "Optimized Threadpool":
                route = '/proj/threadpool';
                break;
            case "VT Marketplace":
                route = '/proj/vt-market';
                break;
            case "DNN Movie Recommender System-IN PROGRESS":
                route = '/proj/recommender';
                break;
            default:
                route = '/projects';
        }
        router.push(route);
    };

    return (
        <div 
            className={styles.project}
            onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}}
            onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}}
            onClick={handleProjectClick}
        >
            <h2>{title}</h2>
            <p>Design & Development</p>
        </div>
    )
}