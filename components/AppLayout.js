import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => (
        <div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/main/second'><a>Second</a></Link>
            <Link href='/main/third'><a>Third</a></Link>
        </div>
    )

AppLayout.PropTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout