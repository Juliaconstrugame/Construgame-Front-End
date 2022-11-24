import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header"

export default function Template({ children, full }) 
{ 
    return ( 
        <React.Fragment>
            <div className="flex flex-col">
                <Header />
                <Content full={full}>
                    { children }
                </Content>
                <Footer />
            </div>
        </React.Fragment>
    )
}