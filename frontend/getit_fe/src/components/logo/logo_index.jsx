import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GetiTLogo from "../../static/getiT.svg"

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`
    width: 80px;
    height: 50px;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
    }
`;

const LogoText = styled.h2`
    font-size: 16px;
    margin: 0;
    margin-left: 4px;
    color: #222;
    font-weight: 500;
`;


export function Logo(props) {
    return (
        <LogoWrapper>
            <Link to="/home">
                <LogoImg>
                    <img src={GetiTLogo} alt="getiT" />
                </LogoImg>
            </Link>
            {/* <LogoText>Greenland</LogoText> */}
        </LogoWrapper>
    )
}