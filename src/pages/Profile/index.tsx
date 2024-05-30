import React from 'react';
import { NavBar } from '@arco-design/mobile-react';
import '@arco-design/mobile-react/dist/style.css'; // 确保正确导入样式
import setRootPixel from '@arco-design/mobile-react/tools/flexible';

setRootPixel();

const ProfilePage: React.FC = () => {
    const navBarRef = React.useRef(null);

    return (
        <>
            <NavBar
                ref={navBarRef}
                fixed={true}
                title="隐私政策"
                hasBottomLine={false}
            />
            <div style={styles.page}>
                <PrivacyPolicy />
            </div>
        </>
    );
}

const PrivacyPolicy: React.FC = () => {
    return (
        <div style={styles.privacyPolicy}>
            {/* 隐私政策内容 */}
            <p style={styles.text}>这里是隐私政策内容。</p>
            <p style={styles.text}>另一段内容。</p>
            {/* 继续添加隐私政策的其他内容 */}
        </div>
    );
}

const styles = {
    page: {
        padding: '0', // 移除多余的填充
        width: '100%', // 确保页面占据整个宽度
        boxSizing: 'border-box',
    },
    privacyPolicy: {
        padding: '20px', // 适当添加填充
        textAlign: 'left', // 文本左对齐
    },
    text: {
        fontSize: '14px', // 设置合适的字体大小
    },
};

export default ProfilePage;
