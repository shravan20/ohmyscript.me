import Document, { Html, Head, Main, NextScript } from 'next/document';
import ScriptTag from 'react-script-tag';
import { withPrefix } from '../utils';


class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        return (
            <Html data-theme="light">
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function() {
                                    const theme = localStorage.getItem('theme') || 
                                                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                                    document.documentElement.setAttribute('data-theme', theme);
                                })();
                            `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <ScriptTag src={withPrefix('js/init.js')}/>
                    <ScriptTag src={withPrefix('js/page-load.js')}/>
                    <ScriptTag src={withPrefix('js/page-unload.js')}/>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
