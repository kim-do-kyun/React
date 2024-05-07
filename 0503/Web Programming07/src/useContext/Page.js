import React, {useContext} from "react";
import Content from "./Content"
import Header from "./Header"
import Footer from "./Footer"

const Page = ({isDark, setIsDark}) => {
    return (
        // <div className="page">
        //     <Header isDark={isDark}/>
        //     <Content isDark={isDark}/>
        //     <Footer isDark={isDark} setIsDark={setIsDark}/>
        // </div>
        <div className="page">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default Page;