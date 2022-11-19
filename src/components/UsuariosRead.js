import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UsuariosRead() {
    const params = useParams();
    const [dataUsuario, setdataUsuario] = useState([])

    useEffect(() => {
        axios.get('/api/usuarios/read/' + params._id).then(res => {
            //console.log(res.data[0]);
            setdataUsuario(res.data[0]);
        }).catch(err => { console.log(err.stack) })
    }, [params._id]);

    return (
        <div className="container col-8">
            <div className="card border-info mb-3 m-4">
                <h2 className="card-header">Detalle de Usuario</h2>
                <div className="card-body">
                    <div className="row g-2">
                        <div className="form-group col-sm-5 m-1">
                            <label className="form-label" htmlFor="disabledID">ID</label>
                            <input className="form-control" id="disabledID" type="text" disabled
                                value={dataUsuario._id} />
                        </div>

                        <div className="form-group col-sm-6 m-1">
                            <label className="form-label" htmlFor="disabledNombre">NOMBRE</label>
                            <input className="form-control" id="disabledNombre" type="text" disabled
                                value={dataUsuario.nombres + " " + dataUsuario.apellidos} />
                        </div>

                        <div className="form-group col-sm-5 m-1">
                            <label className="form-label" htmlFor="disabledCargo">CARGO</label>
                            <input className="form-control" id="disabledCargo" type="text" disabled
                                value={dataUsuario.cargo} />
                        </div>

                        <div className="form-group col-sm-6 m-1">
                            <label className="form-label" htmlFor="disabledEmail">E-MAIL</label>
                            <input className="form-control" id="disabledEmail" type="text" disabled
                                value={dataUsuario.email} />
                        </div>

                        <div className="form-group col-sm-8 m-1">
                            <label className="form-label" htmlFor="disabledContrasenia">CONTRASEÑA</label>
                            <input className="form-control" id="disabledContrasenia" type="text" disabled
                                value={dataUsuario.contrasenia} />
                        </div>

                        <div className="form-group col-sm-3 m-1">
                            <label className="form-label" htmlFor="disabledBloqueado">BLOQUEADO</label>
                            <input className="form-control" id="disabledBloqueado" type="text" disabled
                                value={dataUsuario.bloqueado === false ? "NO" : "SI"} />
                        </div>

                        <div className="form-group col-sm-5 m-1">
                            <label className="form-label" htmlFor="disabledRol">ROL</label>
                            <input className="form-control" id="disabledRol" type="text" disabled
                                value={dataUsuario.rol} />
                        </div>

                        <div className="col-sm-1 offset-2">
                            <a href="/UsuariosList" className="btn btn-dark btn-lg mt-4">Regresar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsuariosRead;