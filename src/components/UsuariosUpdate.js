import React, { useState, useEffect } from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import Input from './elements/Input';
import { Formulario, Label, Select, GrupoInput } from '../elements/Formularios';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const UsuariosUpdate = () => {

    const params = useParams();
    const [dataUsuario, setdataUsuario] = useState([])
    const navegar = useNavigate();

    const [nombres, setNombres] = useState({ campo: '', valido: null });
    const [apellidos, setApellidos] = useState({ campo: '', valido: null });
    const [cargo, setCargo] = useState({ campo: '', valido: null });
    const [email, setEmail] = useState({ campo: '', valido: null });
    const [password, setPassword] = useState({ campo: '', valido: null });
    const [repassword, setRepassword] = useState({ campo: '', valido: null });
    const [rol, setRol] = useState({ campo: '', valido: null });
    const [bloqueado, setBloqueado] = useState(null);

    useEffect(() => {
        axios.get('/api/usuarios/read/' + params._id).then(res => {
            setdataUsuario(res.data[0]);
            console.log(res.data[0]);
            setNombres({campo: dataUsuario.nombres, valido: 'true'});
            setApellidos({campo: dataUsuario.apellidos, valido: 'true'});
            setCargo({campo: dataUsuario.cargo, valido: 'true'});
            setEmail({campo: dataUsuario.email, valido: 'true'});
            setPassword({campo: dataUsuario.contrasenia, valido: 'true'});
            setRepassword({campo: dataUsuario.contrasenia, valido: 'true'});
            setRol({campo: dataUsuario.rol, valido: 'true'});
            setBloqueado(dataUsuario.bloqueado);    
        }).catch(err => { console.log(err) })
        
    },[dataUsuario.apellidos, dataUsuario.bloqueado,
        dataUsuario.cargo, dataUsuario.contrasenia,
        dataUsuario.email, dataUsuario.nombres,
        dataUsuario.rol, params._id]);

    const cargos = [
        { id: '1', name: 'Administrador Junior' },
        { id: '2', name: 'Administrador Senior' },
        { id: '3', name: 'Administrador Elite' },
        { id: '4', name: 'Asistente Administrativo' },
        { id: '5', name: 'Aprendiz' }
    ]

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, //Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, //4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, //7 a 14 números
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, //Letras, números, guion y gion_bajo
    }

    const validarPassword = () => {
        if (password.campo.length > 0) {
            if (password.campo !== repassword.campo) {
                setRepassword((prevState) => {
                    return { ...prevState, valido: 'false' }
                });
            } else {
                setRepassword((prevState) => {
                    return { ...prevState, valido: 'true' }
                });
            }
        }
    }

    const onChangeBloqueado = (e) => {
        setBloqueado(e.target.checked);
    }

    const handleSelectChange = (e) => {
        setCargo({ ...cargo, campo: e.target.value, valido: 'true' });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (nombres.valido === 'true' && apellidos.valido === 'true'
            && cargo.valido === 'true' && email.valido === 'true'
            && password.valido === 'true' && repassword.valido === 'true'
            && rol.valido === 'true') {

            var usuario = {
                nombres: nombres.campo,
                apellidos: apellidos.campo,
                cargo: cargo.campo,
                email: email.campo,
                contrasenia: password.campo,
                bloqueado: bloqueado,
                rol: 1
            };

            axios.post('/api/usuarios/update/' + params._id, usuario)
                .then(res => {
                    setNombres({ campo: '', valido: null });
                    setApellidos({ campo: '', valido: null });
                    setCargo({ campo: '', valido: null });
                    setEmail({ campo: '', valido: null });
                    setPassword({ campo: '', valido: null });
                    setRepassword({ campo: '', valido: null });
                    setBloqueado(false);
                    mensaje(true, "Formulario enviado exitosamente!\n" + res.data);
                })
                .then(err => { console.log(err) })
        } else {
            mensaje(false, "Por favor rellena el formulario correctamente");
        }
    }

    function mensaje(valida, mensaje) {
        if (valida) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Buen trabajo!',
                text: mensaje,
            });
            navegar('/UsuariosList');
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error',
                text: mensaje,
            });
        }
    }

    return (
        <main>
            <div className="container">
                <div className="card text-white bg-secondary mb-3 m-4">
                    <h2 className="card-header">Editar Usuario</h2>
                    <div className="card-body">
                        <div className="row">
                            <Formulario className="row g-3" onSubmit={onSubmit}>
                                <Input
                                    estado={nombres}
                                    setEstado={setNombres}
                                    tipo="text"
                                    label="Nombres"
                                    placeholder="Nombres"
                                    name="nombres"
                                    leyendaError="El nombre es obligatorio, solo puede contener letras, espacios y un tamaño maximo de 50 caracteres."
                                    expresionRegular={expresiones.nombre}
                                    spanText="txt"
                                    clase="col-sm-6"
                                    focus={true}
                                    lectura={false}
                                />

                                <Input
                                    estado={apellidos}
                                    setEstado={setApellidos}
                                    tipo="text"
                                    label="Apellidos"
                                    placeholder="Apellidos"
                                    name="apellidos"
                                    leyendaError="El apellido es obligatorio, solo puede contener letras, espacios y un tamaño maximo de 50 caracteres."
                                    expresionRegular={expresiones.nombre}
                                    spanText="txt"
                                    clase="col-sm-6"
                                    focus={false}
                                    lectura={false}
                                />

                                <div className='col-sm-4'>
                                    <Label htmlfor="cargo">Cargo</Label>
                                    <GrupoInput>
                                        <Select
                                            className="form-select"
                                            id="cargo"
                                            onChange={handleSelectChange}
                                            value={cargo.campo}
                                        >
                                            <option disabled value="">Selecione un cargo...</option>
                                            {
                                                cargos.map(c => (<option key={c.id} value={c.name}>{c.name}</option>))
                                            }

                                        </Select>
                                    </GrupoInput>
                                </div>

                                <Input
                                    estado={email}
                                    setEstado={setEmail}
                                    tipo="email"
                                    label="Correo Electrónico"
                                    placeholder="ejemplo@correo.com"
                                    name="email"
                                    leyendaError="El correo es obligatorio, solo puede contener letras, numeros, puntos, guiones y guion bajo."
                                    expresionRegular={expresiones.correo}
                                    spanText="@"
                                    clase="col-sm-8"
                                    focus={false}
                                    lectura={false}
                                />

                                <Input
                                    estado={password}
                                    setEstado={setPassword}
                                    tipo="password"
                                    label="Contraseña"
                                    placeholder="Password"
                                    name="contrasenia"
                                    leyendaError="La constraseña es obligatoria, tiene que ser de 4 a 12 digitos."
                                    expresionRegular={expresiones.password}
                                    spanText="***"
                                    clase="col-sm-6"
                                    focus={false}
                                    lectura={false}
                                />

                                <Input
                                    estado={repassword}
                                    setEstado={setRepassword}
                                    tipo="password"
                                    label="Contraseña"
                                    placeholder="Password"
                                    name="recontrasenia"
                                    leyendaError="Ambas constraseñas deben ser iguales."
                                    funcion={validarPassword}
                                    spanText="***"
                                    clase="col-sm-6"
                                    focus={false}
                                    lectura={false}
                                />

                                <Input
                                    estado={rol}
                                    setEstado={setRol}
                                    tipo="text"
                                    label="Rol"
                                    placeholder="Rol"
                                    name="rol"
                                    leyendaError="El apellido es obligatorio, solo puede contener letras, espacios y un tamaño maximo de 50 caracteres."
                                    spanText="txt"
                                    clase="col-sm-6"
                                    focus={false}
                                    lectura={true}
                                />


                                <div className="col-sm-2 offset-5">
                                    <div className="form-check">
                                        <Label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="validationCheck"
                                                name="validationCheck"
                                                checked={bloqueado}
                                                onChange={onChangeBloqueado}
                                            />
                                            Bloqueado
                                        </Label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <a href="/UsuariosList" className="btn btn-dark btn-block">Cancelar</a>
                                </div>
                                <div className="col-sm-6">
                                    <button className="btn btn-primary btn-block" type="submit">Guardar</button>
                                </div>

                                <p className="card-text">Indetex e-commerce 2022®</p>

                            </Formulario>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default UsuariosUpdate;