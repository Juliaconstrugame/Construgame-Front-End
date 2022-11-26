import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header"

export default function Template({ children, full, name, id, company, type }) {
    return (
        <React.Fragment>
            <div className="flex flex-col">
                <Header name={name} id={id} company={company} type={type} />
                <Content full={full}>
                    {children}
                    </Content>
                <Footer />
            </div>
        </React.Fragment>
    )
}