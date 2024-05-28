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
            <div style={styles.page}>
                <ActivityList />
            </div>
        </>
    );
};

const ActivityList: React.FC = () => {
    const activities = [
        {
            imageSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfWrLOTDrl80mHW8uAtI6amaE1blo_IdKi73R69yhzaqoAOSe0nywrGHaHOdFMXFbVdwBUSVnW18BatgVxDnM7bTVQ763oprFVnjJs_-ZUAEsLJq48NdOsFQ&usqp=CAc",
            title: "活动标题1",
            description: "这是活动的描述信息1。"
        },
        {
            imageSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfWrLOTDrl80mHW8uAtI6amaE1blo_IdKi73R69yhzaqoAOSe0nywrGHaHOdFMXFbVdwBUSVnW18BatgVxDnM7bTVQ763oprFVnjJs_-ZUAEsLJq48NdOsFQ&usqp=CAc",
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
    page: {
        padding: '0', // 移除多余的填充
        width: '100%', // 确保页面占据整个宽度
        boxSizing: 'border-box',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px', // 调整卡片之间的间距
        width: '100%', // 确保列表占据父容器的全部宽度
        padding: '10px 20px', // 确保左右有一些间距
        boxSizing: 'border-box',
    }
};

export default ActivityPage;
