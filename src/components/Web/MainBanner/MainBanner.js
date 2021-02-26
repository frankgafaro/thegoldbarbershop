import React from "react";
import "./MainBanner.scss";

const img = require("../../../assets/img/banner.png")

const MainBanner = () => {
    return (
        <div className="img">
            <img src={img} alt="/"/>
        </div>
    )
}

export default MainBanner
