import React, { useState } from 'react';
import '@arco-design/mobile-react/dist/style.css'; // Ensure styles are imported

interface ActivityCardProps {
    imageSrc: string;
    title: string;
    description: string;
    onClick: () => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ imageSrc, title, description, onClick }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseDown = () => {
        setIsPressed(true);
    };

    const handleMouseUp = () => {
        setIsPressed(false);
    };

    return (
        <div
            style={{
                ...styles.card,
                ...(isPressed ? styles.cardPressed : {}),
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // Prevent state from not resetting when the mouse leaves
            onTouchStart={handleMouseDown} // Support touch events
            onTouchEnd={handleMouseUp} // Support touch events
            onClick={onClick} // Trigger onClick handler
        >
            <div style={styles.imageContainer}>
                <img src={imageSrc} alt={title} style={styles.image} />
            </div>
            <div style={styles.content}>
                <div style={styles.title}>{title}</div>
                <div style={styles.description}>{description}</div>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    card: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '10px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: '10px',
        backgroundColor: '#fff',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'transform 0.1s ease, box-shadow 0.1s ease',
    },
    cardPressed: {
        transform: 'scale(0.98)',
        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
    },
    imageContainer: {
        width: '80px',
        height: '80px',
        marginRight: '10px',
        flexShrink: 0,
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '4px',
        textAlign: 'left',
    },
    description: {
        fontSize: '14px',
        color: '#666',
        textAlign: 'left',
    },
};

export default ActivityCard;
