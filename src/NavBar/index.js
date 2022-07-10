// Libraries

import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';

// Dependencies

// Private

const StyledContainer = styled.div`
    background: #F3C6CF;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`;

const StyledButtonContainer = styled.div`
    position: absolute;
    left: 25px;
    top: 0;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
`;

const StyledInfoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;

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

const StyledButton = styled(Link)`
    font-size: 50px;
    text-decoration: none;

    &&:visited {
        color: black;
    }

    &&:hover {
        color: hotpink;
    }
`;

// Public 

const NavBar = () => {
    const location = useLocation()
    const [playerName] = useState(location.state.playerName);

    return (
        <StyledContainer>
            <StyledButtonContainer>
                <StyledButton 
                    type="submit" value="Submit"
                    to="/" 
                    state={{
                        playerName
                    }}
                >
                Back 
                </StyledButton> 
            </StyledButtonContainer>
            <StyledInfoContainer>
                <StyledTypography $textSize="50px">Good Luck, {playerName}</StyledTypography>
            </StyledInfoContainer>

        </StyledContainer>
    )
}

export default NavBar;