import Head from "next/head";
import React from 'react';

// Hook
function useScript(src) {
    React.useEffect(
        () => {
            // remove the script if already exists
            let script = document.querySelector(`script[src="${src}"]`);

            if (script) {
                script.remove()
            }

            // add script to DOM
            script = document.createElement("script");
            script.src = src;
            document.body.appendChild(script);

            return () => {
                // remove the script on unmount
                document
                    .querySelector(`script[src="${src}"]`)
                    .remove()
            };
        },
        [src]
    );
}


export default function Search() {
    useScript('/export/search.js');


    return <>
        <Head>
            <link rel="stylesheet" async href="/export/search.css"/>
        </Head>
        <div id="search-button"/>
    </>
}

