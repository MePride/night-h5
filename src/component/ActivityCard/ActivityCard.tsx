import React from 'react';
import { Button } from '@arco-design/mobile-react';
import '@arco-design/mobile-react/dist/style.css'; // 确保正确导入样式

interface ActivityCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ imageSrc, title, description }) => {
    return (
        <div style={styles.card}>
        <div style={styles.imageContainer}>
        <img src={imageSrc} alt={title} style={styles.image} />
    </div>
    <div style={styles.content}>
    <div style={styles.title}>{title}</div>
        <div style={styles.description}>{description}</div>
        </div>
        <div style={styles.buttonContainer}>
    <Button type="primary" size="small">查看</Button>
        </div>
        </div>
);
};

const styles: { [key: string]: React.CSSProperties } = {
    card: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid #eaeaea',
        borderRadius: '8px',
        marginBottom: '10px',
        backgroundColor: '#fff',
    },
    imageContainer: {
        width: '60px',
        height: '60px',
        marginRight: '10px',
        flexShrink: 0,
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '4px',
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '4px',
    },
    description: {
        fontSize: '14px',
        color: '#666',
    },
    buttonContainer: {
        marginLeft: '10px',
    },
};

export default ActivityCard;
