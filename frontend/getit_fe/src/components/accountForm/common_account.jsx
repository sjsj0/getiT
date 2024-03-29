import styled from "styled-components";

//Total 6 styled components present..


export const BoxContainer = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 45px;
    ${'' /* display: flex; */}
    flex-direction: column;
    ${'' /* padding: 10px 0; */}
    background-color: #05445E;
    font-size: 30px;
    color: white;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15,15,15, 0.19);
`;

// export const MutedLink = styled.div`
//     font-size: 11px;
//     color: rgba(200, 200, 200, 0.8);
//     font-weight: 500;
//     text-decoration: none;
// `;

// export const BoldLink = styled.a`
//     font-size: 12px;
//     color: #5963c3;
//     font-weight: 500;
//     text-decoration: none;
//     margin: 0 4px;
// `;

export const Input = styled.input`
    width: 100%;
    height: 42px; 
    outline: none;
    border: 1px solid rgba(200,200,200, 0.3);
    padding: 0px 10px;
    ${'' /* border-bottom: 1.4px solid transparent; */}
    transition: all 200ms ease-in-out;
    font-size: 18px;

    &:plceholder{
        color: rgba(200, 200, 200, 1);
    }

    &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }

    &:focus{
        outline: none;
        border-bottom: 2px solid #5963c3;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: linear-gradient(to right,#2ebf91,#8360c3);
    
    &:hover {
        filter: brightness(1.03);
    }
`;


export const TextLabel = styled.label`
    align-items: left;
    display: flex;
    justify-content: start;
    padding: 2px 5px 2px 5px;
    background-color: #D4F1F4;
    font-size: 16px;
`;