import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.section}>
                <h4>About Us</h4>
                <p>Learn more about our mission and team.</p>
            </div>
            <div style={styles.section}>
                <h4>Contact</h4>
                <p>Email: info@example.com</p>
                <p>Phone: +1 234 567 890</p>
            </div>
            <div style={styles.section}>
                <h4>Follow Us</h4>
                <div style={styles.socialLinks}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <span role="img" aria-label="Facebook">📘</span>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <span role="img" aria-label="Twitter">🐦</span>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <span role="img" aria-label="Instagram">📸</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        background: '#222',
        color: '#fff',
        padding: '30px 40px',
        marginTop: '40px'
    },
    section: {
        flex: 1,
        margin: '0 20px'
    },
    socialLinks: {
        display: 'flex',
        gap: '15px',
        marginTop: '10px'
    },
    icon: {
        color: '#fff',
        fontSize: '1.5rem',
        textDecoration: 'none'
    }
};

export default Footer;