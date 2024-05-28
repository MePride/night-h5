import React from 'react';
import { NavBar, Button } from '@arco-design/mobile-react';
import '@arco-design/mobile-react/dist/style.css'; // 确保正确导入样式
import setRootPixel from '@arco-design/mobile-react/tools/flexible';

setRootPixel();

const ActivityPage = () => {
    const navBarRef = React.useRef();
    return (
        <>
            <NavBar
                ref={navBarRef}
                fixed={true}
                title="Title"
                hasBottomLine={false}
            />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', paddingTop: '126px'}}>
                <Button type="primary">活动页面按钮</Button>
            </div>
        </>
    );
};

export default ActivityPage;
