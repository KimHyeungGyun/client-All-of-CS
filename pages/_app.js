import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import wrapper from '../store/configureStore';

const AllofCS = ({ Component }) => {
    return (
        //<Provider store={store}></Provider>
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>모두의 고객센터</title>
            </Head>
            <Component />
        </>
    );
};

AllofCS.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(AllofCS);