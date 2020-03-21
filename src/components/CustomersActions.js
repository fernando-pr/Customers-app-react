import React, { Children } from 'react';
import PropTypes from 'prop-types';

const CustomersActions = ({ children }) => {
    return (
        <div>
            <div className="customers-actions">
                <div>{children}</div>
            </div>
        </div>
        
    );
};

CustomersActions.propTypes = {
    Children: PropTypes.node,  
};

export default CustomersActions;