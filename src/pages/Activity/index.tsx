import React, { useState, useRef } from 'react';
import { NavBar, PopupSwiper } from '@arco-design/mobile-react';
import '@arco-design/mobile-react/dist/style.css'; // Ensure styles are imported
import setRootPixel from '@arco-design/mobile-react/tools/flexible';
import ActivityCard from "../../component/ActivityCard/ActivityCard.tsx";

setRootPixel();

interface Activity {
    imageSrc: string;
    title: string;
    description: string;
}

const ActivityPage: React.FC = () => {
    const navBarRef = useRef<never>(null); // 使用 any 类型
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

    const handleCardClick = (activity: Activity) => {
        setSelectedActivity(activity);
        setPopupVisible(true);
    };

    return (
        <>
            <NavBar
                ref={navBarRef}
                fixed={true}
                title="活动"
                hasBottomLine={false}
            />
            <div style={styles.page}>
                <ActivityList onCardClick={handleCardClick} />
            </div>
            <PopupSwiper visible={popupVisible} close={() => setPopupVisible(false)} direction="bottom" allowSwipeDirections={["down" as never]}>
                <div style={styles.popupContent}>
                    {selectedActivity && (
                        <>
                            <div style={styles.popupTitle}>{selectedActivity.title}</div>
                            <div style={styles.popupDescription}>{selectedActivity.description}</div>
                        </>
                    )}
                </div>
            </PopupSwiper>
        </>
    );
};

interface ActivityListProps {
    onCardClick: (activity: Activity) => void;
}

const ActivityList: React.FC<ActivityListProps> = ({ onCardClick }) => {
    const activities: Activity[] = [
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
                    onClick={() => onCardClick(activity)} // Pass activity data to the onClick handler
                />
            ))}
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    background: {
        background: 'linear-gradient(to bottom right, #aaf, transparent)',
    },
    page: {
        padding: '0',
        width: '100%',
        boxSizing: 'border-box',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
        padding: '10px 20px',
        boxSizing: 'border-box',
    },
    popupContent: {
        height: 330,
        width: 290,
        padding: '20px', // Add padding for better spacing
        boxSizing: 'border-box',
    },
    popupTitle: {
        fontSize: '18px', // Adjust font size for the title
        fontWeight: 'bold',
        marginBottom: '10px', // Add margin to separate title and description
        textAlign: 'center', // Center align the title
    },
    popupDescription: {
        fontSize: '14px', // Adjust font size for the description
        color: '#666',
        textAlign: 'center', // Center align the description
    },
};

export default ActivityPage;
