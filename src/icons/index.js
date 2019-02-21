import React from 'react';
import ForkAndKnife from './ForkAndKnife';

const icon = props => {
    let i = null;

    switch (props.iconName) {
        case 'forkandknife':
            i = <ForkAndKnife {...props} />;
            break;
        default: i = null;
    }

    return (
        <>{i}</>
    );
}

export default icon;