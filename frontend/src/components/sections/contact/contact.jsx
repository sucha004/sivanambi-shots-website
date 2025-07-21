import { Mail, Phone, MapPin, Instagram, InstagramIcon } from 'lucide-react';
import styles from './contact.module.css';

export default function Contact() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Get in Touch</h2>
                <ul className={styles.contactInfo}>
                    <li className={styles.hove}>
                        <Phone className={styles.icon} />
                        <span>90432 43640, 93847 05945</span>
                    </li>
                    <li className={styles.hove}>
                        <Mail className={styles.icon} />
                        <span>sivanambishots@gmail.com</span>
                    </li>
                    <li className={styles.hove}>
                        <MapPin className={styles.icon} />
                        <span>28-1/1, Perumal Kovil Street, Dalapathi Samudram Keeloor, Nanguneri 627101</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}
