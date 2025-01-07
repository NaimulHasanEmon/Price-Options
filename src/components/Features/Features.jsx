import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle  } from "react-icons/fa";


const Features = ({features}) => {
    return (
        <div className='flex gap-1 '>
            <div className='mt-[5px] text-sm text-green-500'>
                <FaCheckCircle />
            </div>
            <li>
                {features}
            </li>
        </div>
    );
};

Features.propTypes = {
    features: PropTypes.string.isRequired
};

export default Features;