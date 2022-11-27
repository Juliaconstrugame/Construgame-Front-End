import Head from "next/head"
import React from "react"

export default function Layout({ children, title }) {
    return (
        <React.Fragment>
            <Head>
                <title>
                    {`${title} | Construgame`}
                </title>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                <link rel="shortcut icon" href="/favicon.ico" />

            </Head>
            {children}
        </React.Fragment>
    )

}