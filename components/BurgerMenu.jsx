import { useState, useEffect, useRef } from 'react';
import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Menü dışında tıklamayı kapatmak için
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

    const clamp = (value) => Math.max(0, value);

    const isBetween = (value, floor, ceil) =>
        value >= floor && value <= ceil;

    // hooks
    const useScrollspy = (ids, offset = 0) => {
        const [activeId, setActiveId] = useState("");

        useLayoutEffect(() => {
            const listener = () => {
                const scroll = window.pageYOffset;

                const position = ids
                    .map((id) => {
                        const element = document.getElementById(id);

                        if (!element) return { id, top: -1, bottom: -1 };

                        const rect = element.getBoundingClientRect();
                        const top = clamp(rect.top + scroll);
                        const bottom = clamp(rect.bottom + scroll);

                        return { id, top, bottom };
                    })
                    .find(({ top, bottom }) => isBetween(scroll, top, bottom));

                setActiveId(position?.id || "");
            };

            listener();

            window.addEventListener("resize", listener);
            window.addEventListener("scroll", listener);

            return () => {
                window.removeEventListener("resize", listener);
                window.removeEventListener("scroll", listener);
            };
        }, [ids, offset]);

        return activeId;
    };

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
