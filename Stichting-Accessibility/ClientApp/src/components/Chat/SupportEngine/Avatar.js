// Avatar.js
import React, { useState } from "react";
import { styles } from './styles';

const Avatar = (props) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            style={{
                ...props.style,
                position: 'fixed',
                bottom: '24px',
                right: '24px',
            }}
        >
            <div
                className='transition-3'
                style={{
                    ...styles.avatarHello,
                    ...{ opacity: hovered ? '1' : '0' },
                }}
            >
                Hallo!
            </div>

            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => props.onClick && props.onClick()}
                className='transition-3'
                style={{
                    ...styles.chatWithMeButton,
                    ...{ border: hovered ? '1px solid #2B50EC' : '4px solid #2B50EC' },
                }}
            />
        </div>
    );
};

export default Avatar;





