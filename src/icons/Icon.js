import React from 'react';
import ForkAndKnife from './ForkAndKnife/ForkAndKnife';

const icon = ({ iconName }) => {
    let i = null;

    switch (iconName) {
        case 'forkandknife':
            i = <ForkAndKnife />;
            break;
        default: i = null;
    }

    return (
        <>{i}</>
    );
}

export default icon;