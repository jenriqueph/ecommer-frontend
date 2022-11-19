import React from 'react';
import { faFaceTired, faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import {
    Label,
    GrupoInput,
    Input,
    Span,
    LeyendaError,
    IconoValidacion,
} from '../../elements/Formularios';

const ComponentInput = ({estado, setEstado, tipo, label, placeholder,
                        name, leyendaError, expresionRegular, funcion,
                        spanText, clase, focus, lectura}) => {
    const onChange = (e) => {
        setEstado({...estado, campo: e.target.value});
    }

    const validacion = () => {
        if (expresionRegular) {
            if (expresionRegular.test(estado.campo)){
                setEstado({...estado, valido: 'true'})
            } else {
                setEstado({...estado, valido: 'false'})
            }
        }

        if (funcion) {
            funcion();
        }
    }

    return (
        <div className={clase}>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <GrupoInput>
                <Span className='input-group-text'>{spanText}</Span>
                <Input 
                    type={tipo}
                    className="form-control"
                    placeholder={placeholder}
                    id={name}
                    autoFocus={focus}
                    readOnly={lectura}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                />
                <IconoValidacion
                    icon={estado.valido === 'true' ? faFaceSmileBeam : faFaceTired}
                    valido={estado.valido}
                />
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    );
}

export default ComponentInput;