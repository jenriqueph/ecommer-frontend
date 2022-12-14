import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

function UsuariosDelete () {
    const params = useParams();
    const [dataUsuario, setdataUsuario] = useState([]);
    const navegar = useNavigate();

    useEffect(() => {
        axios.get('/api/usuarios/read/' + params._id).then(res => {
            //console.log(res.data[0]);
            setdataUsuario(res.data[0]);
        }).catch(err => { console.log(err.stack) })
    }, [params._id]);

 
    function eliminarUsuario (idUsuario) {
        Swal.fire({
            title: '¿Estas Segur@?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, eliminarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('/api/usuarios/delete/' + idUsuario)
                    .then(res => {
                        Swal.fire(
                            '¡Eliminado!',
                            'El usuario ha sido eliminado.',
                            'success'
                        )
                        console.log(res);
                        navegar('/UsuariosList')
                    }).catch(err => {
                        Swal.fire(
                            '¡Error!',
                            'El usuario no se puedo eliminar. \n ' + err,
                            'error'
                        )
                        console.log(err)
                    })
            } else {
                Swal.fire(
                    '¡Cancelado!',
                    'El proceso fue cancelado.',
                    'info'
                )
            }
        })
    }
    
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

                        <div className="col-sm-3">
                            <a href="/UsuariosList" className="btn btn-dark btn-lg mt-4">Regresar</a>
                        </div>

                        <form onSubmit={eliminarUsuario(dataUsuario._id)} className="col-sm-3">
                            <div >
                                <button type="submit" className="btn btn-danger btn-lg mt-4">Eliminar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsuariosDelete;