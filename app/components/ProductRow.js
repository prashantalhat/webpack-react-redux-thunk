import PropTypes from 'prop-types';
import React from 'react';

const ProductRow = ({ data }) =>
    <div>
        <p>{data.title}</p>
    </div>;

ProductRow.propTypes = {
    data: PropTypes.object
};

export default ProductRow;
