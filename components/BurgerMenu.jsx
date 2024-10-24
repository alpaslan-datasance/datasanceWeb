import { useState, useEffect, useRef } from 'react';
import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className={styles.container} ref={menuRef}>
            <div className={`${styles.burger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <nav className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href={`#${"product"}`}>Product</a></li>
                    <li><a href={`#${"Industries"}`}>Industries</a></li>
                    <li><a href={`https://alpaslan-datasance.github.io/datasanceDocusaurus/`}>Documents</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default BurgerMenu;
