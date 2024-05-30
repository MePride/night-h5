import React, { useState } from 'react';
import '@arco-design/mobile-react/dist/style.css'; // 确保正确导入样式

interface ActivityCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ imageSrc, title, description }) => {
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
            onMouseLeave={handleMouseUp} // 防止鼠标离开时状态未重置
            onTouchStart={handleMouseDown} // 支持触摸事件
            onTouchEnd={handleMouseUp} // 支持触摸事件
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
        alignItems: 'flex-start', // 修改此处
        padding: '10px',
        borderRadius: '12px', // 圆角边框
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // iOS风格的阴影
        marginBottom: '10px',
        backgroundColor: '#fff',
        width: '100%', // 确保卡片占据父容器的全部宽度
        boxSizing: 'border-box', // 包括 padding 和 border 在内的宽度和高度计算
        transition: 'transform 0.1s ease, box-shadow 0.1s ease', // 添加过渡效果
    },
    cardPressed: {
        transform: 'scale(0.98)', // 缩小
        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)', // 加重阴影
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
        borderRadius: '8px', // 图片的圆角
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // 确保内容从顶部开始对齐
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '4px',
        textAlign: 'left', // 显式地设置左对齐
    },
    description: {
        fontSize: '14px',
        color: '#666',
        textAlign: 'left', // 显式地设置左对齐
    },
};

export default ActivityCard;
