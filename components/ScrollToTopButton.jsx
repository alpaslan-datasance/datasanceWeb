"use client"
import { useState, useEffect } from 'react';
import styles from './ScrollToTopButton.module.css';
import Image from 'next/image';
import useMediaQuery from './mq.hook';

const ScrollToTopButton = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div
            className={`${styles.scrollToTop} ${isVisible ? styles.show : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <Image
                src="/images/up-button.webp"
                style={{ width: !isMobile ? '1.5rem' : '0.8rem' }}
                loading='eager'
                width={1}
                height={1}
                sizes="100vw"
                alt="pot"
                priority={false}
            />
        </div>
    );
};

export default ScrollToTopButton;
