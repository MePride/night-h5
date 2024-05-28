// src/pages/activity/index.tsx
import React from 'react';
import { NavBar } from '@arco-design/mobile-react';
import '@arco-design/mobile-react/dist/style.css'; // 确保正确导入样式
import setRootPixel from '@arco-design/mobile-react/tools/flexible';
import ActivityCard from "../../component/ActivityCard/ActivityCard.tsx";

setRootPixel();

const ActivityPage: React.FC = () => {
    const navBarRef = React.useRef(null);

    return (
        <>
            <NavBar
                ref={navBarRef}
                fixed={true}
                title="Title"
                hasBottomLine={false}
            />
            <div style={{ padding: '20px' }}>
                <ActivityList />
            </div>
        </>
    );
};

const ActivityList: React.FC = () => {
    const activities = [
        {
            imageSrc: "https://via.placeholder.com/60",
            title: "活动标题1",
            description: "这是活动的描述信息1。"
        },
        {
            imageSrc: "https://via.placeholder.com/60",
            title: "活动标题2",
            description: "这是活动的描述信息2。"
        },
        {
            imageSrc: "https://via.placeholder.com/60",
            title: "活动标题2",
            description: "这是活动的描述信息2。"
        }
    ];

    return (
        <div style={styles.list}>
            {activities.map((activity, index) => (
                <ActivityCard
                    key={index}
                    imageSrc={activity.imageSrc}
                    title={activity.title}
                    description={activity.description}
                />
            ))}
        </div>
    );
};

const styles = {
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px' // 调整卡片之间的间距
    }
};

export default ActivityPage;
