import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import { config }  from '../config';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang={config.locale.split('_')[0]}>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                        crossOrigin="anonymous"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;500&display=swap"
                        rel="stylesheet"></link>
                    <script
                        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                        crossOrigin="anonymous"
                    />
                    <script
                        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
                        crossOrigin="anonymous"
                    />
                    <script
                        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
                        crossOrigin="anonymous"
                    />
                    <link rel="stylesheet" type="text/css" href="/nprogress.css" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
