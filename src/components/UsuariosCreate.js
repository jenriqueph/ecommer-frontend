import axios from "axios";
import React, { useState } from "react";
import Select from 'react-select';
import uniqid from 'uniqid';
import Swal from 'sweetalert2';

const cargos = [
    { id: '1', name: 'Administrador Junior' },
    { id: '2', name: 'Administrador Senior' },
    { id: '3', name: 'Administrador Elite' },
    { id: '4', name: 'Asistente Administrativo' },
    { id: '5', name: 'Aprendiz' }
]

function UsuariosCreate() {

    //const [_id, setId] = useState('')
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    //const [cargo, setCargo] = useState('')
    const [email, setEmail] = useState('')
    const [contrasenia, setContrasenia] = useState('')
    const [bloqueado, setBloqueado] = useState('')
    const [rol, setRol] = useState('')

    const [selectCargo, setSelectCargo] = useState();

    const handleSelectChange = ({ value }) => {
        setSelectCargo(value);
    }

    function createUsuario() {
        var usuario = {
            _id: uniqid(),
            nombres: nombres,
            apellidos: apellidos,
            cargo: selectCargo,
            email: email,
            contrasenia: contrasenia,
            bloqueado: bloqueado,
            rol: rol
        };
        console.log(usuario);
        axios.post('api/usuarios/create', usuario)
            .then(res => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Good job!' + res.data,
                    showConfirmButton: false,
                    timer: 2000
                })
            })
            .then(err => { console.log(err) })
    }

    return (
        <div className="container">
            <div className="card text-white bg-secondary mb-3 m-4">
                <h2 className="card-header">Crear un nuevo Usuario</h2>
                <div className="card-body">
                    <div className="row">

                        <form className="row g-3 needs-validation" novalidate>
                            <div className="col-md-6">
                                <label htmlfor="validationNombres" className="form-label">Nombres</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">txt</span>
                                    <input type="text" className="form-control" id="validationNombres" value={nombres} onChange={(e) => { setNombres(e.target.value) }} placeholder="Nombres" aria-describedby="inputGroupPrepend" autoFocus required />
                                    <div className="invalid-feedback">
                                        Los nombres son obligatorios!
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlfor="validationApellidos" className="form-label">Apellidos</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend2">txt</span>
                                    <input htmlfor="text" className="form-control" id="validationApellidos" value={apellidos} onChange={(e) => { setApellidos(e.target.value) }} placeholder="Apellidos" aria-describedby="inputGroupPrepend2" required />
                                    <div className="invalid-feedback">
                                        Los apellidos son obligatorios!
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label htmlfor="validationCargo" className="form-label">Cargo</label>
                                <Select className="form-control" id="validationCargo"
                                    //defaultValue = {{label : 'Eliga una opción', value : '0'} }
                                    //defaultValue = { cargos[0] }
                                    options={cargos.map(c => ({ label: c.name, value: c.id }))}
                                    onChange={handleSelectChange}
                                    theme={(theme) => ({
                                        ...theme,
                                        borderRadius: 0,
                                        colors: {
                                          ...theme.colors,
                                          primary25: 'hotpink',
                                          primary: 'blue',
                                        },
                                      })}
                                />
                                <div className="invalid-feedback">
                                    Por favor seleccion una opción valida.
                                </div>
                            </div>

                            <div className="col-md-8">
                                <label htmlfor="validationCorreo" className="form-label">Correo Electrónico</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend3">@</span>
                                    <input type="email" className="form-control" id="validationCorreo" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="ejemplo@correo.com" aria-describedby="inputGroupPrepend3" required />
                                    <div className="invalid-feedback">
                                        Por favor ingrese un correo electrónico!
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlfor="validationContrasenia" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" value={contrasenia} onChange={(e) => { setContrasenia(e.target.value) }} placeholder="Password" id="validationContrasenia" required />
                                <div className="invalid-feedback">
                                    Por favor ingrese una contraseña.
                                </div>
                            </div>

                            <div class="col-md-4 offset-1">
                                <label htmlfor="validationRol" class="form-label">Rol</label>
                                <select class="form-select" value={rol} onChange={(e) => { setRol(e.target.value) }} id="validationRol" required>
                                    <option selected disabled value="">Selecione un rol...</option>
                                    <option>Administrador</option>
                                    <option>Cliente</option>
                                </select>
                                <div class="invalid-feedback">
                                    Por favor seleccion una opción valida.
                                </div>
                            </div>

                            <div className="col-2 offset-5">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={bloqueado} onChange={(e) => { setBloqueado(e.target.value) }} id="invalidCheck" />
                                    <label className="form-check-label" htmlfor="invalidCheck">
                                        Bloqueado
                                    </label>
                                    <div className="invalid-feedback">
                                        .
                                    </div>
                                </div>
                            </div>

                            <h5 className="card-title">Que desea hacer?</h5>
                            <div className="col-sm-6">
                                <a href="/UsuariosList" className="btn btn-dark btn-block">Cancelar</a>
                            </div>
                            <div className="col-sm-6">
                                <button className="btn btn-primary btn-block" onClick={createUsuario} onSubmit="">Guardar</button>
                            </div>

                            <p className="card-text">Indetex e-commerce 2022®</p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default UsuariosCreate;