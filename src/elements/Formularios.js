import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colors = {
    border: "#0075FF",
    error: "#BB2929",
    exito: "#1ED12D"
}

const Formulario = styled.form`
    color: black;
    font-weight: bold;
    font-size: 20px;
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
    display: flex;
    margin-left: 20px;
`;

const LeyendaError = styled.p`
    font-size: 16px;
    margin-bottom: 0;
    color: ${colors.error};
    display: none;

    ${props => props.valido === 'false' && css`
        display: block;
    `}    
`;

const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    font-size: 24px;
    opacity: 0;

    ${props => props.valido === 'false' && css`
        opacity: 1;
        color: ${colors.error};
    `}

    ${props => props.valido === 'true' && css`
        opacity: 1;
        color: ${colors.exito};
    `}
`;

const Input = styled.input`
    font-size: 20px;
    font-weight: 400;
    padding: 0 50px 0 10px;
    transition: 0.3s ease all;

    &:focus {
        border: 1px solid ${colors.border};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4)
    }

    ${props => props.valido === 'false' && css`
        border: 1px solid ${colors.error} !important;
    `}
`;

const Label = styled.label`
    font-weight: 700;
    padding: 10px;
    cursor: pointer;

    ${props => props.valido === 'false' && css`
        color: ${colors.error};
    `}
`;

const Span = styled.span`
    color: black;
    font-weight: bold;
`;

const Select = styled.select`
    font-size: 20px;
    font-weight: 400;
    line-heigth: 45px;
    padding: 8px 50px 8px 10px;
    transition: 0.3s ease all;

    &:focus {
        border: 1px solid ${colors.border};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4)
    }
`;

export {
    Formulario,
    Label,
    GrupoInput,
    Input,
    Span,
    LeyendaError,
    IconoValidacion,
    Select
};