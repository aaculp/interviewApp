// Libraries

import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';

// Dependencies

// Private

const StyledContainer = styled.div`
    background: #F3C6CF;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const StyledButton = styled(Link)`
    font-size: 50px;
    position: absolute;
    left: 0;
    text-decoration: none;

    &&:visited {
        color: black;
    }

    &&:hover {
        color: hotpink;
    }
`;

const StyledInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    label {
        align-items: flex-start;
        justify-content: flex-start;
    }
`;

const StyledTypography = styled.span`
    ${({ $textSize}) => `
        font-size: ${$textSize};
    `}
`;

// Public 

const NavBar = () => {
    const location = useLocation()
    const [playerName] = useState(location.state.playerName);

    return (
        <StyledContainer>
            <StyledButton 
                type="submit" value="Submit"
                to="/" 
                state={{
                    playerName
                }}
            >Back</StyledButton> 
            <StyledInfoContainer>
                <StyledTypography $textSize="50px">Good Luck, {playerName}</StyledTypography>
            </StyledInfoContainer>

        </StyledContainer>
    )
}

export default NavBar;