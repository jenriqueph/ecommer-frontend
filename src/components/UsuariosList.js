import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './UsuariosList.css'
import { Link } from 'react-router-dom';

//Crear un método para trabajar
function UsuariosListar() {
    const [dataUsuario, setdataUsuario] = useState([])
    const [nombres, setNombres] = useState('')
    useEffect(() => {
        axios.get('api/usuarios/list').then(res => {
            console.log(res.data);
            setdataUsuario(res.data);
        }).catch(err => { console.log(err.stack) })
    }, [])
    return (
        <div className='container mt-5'>

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="/">Gestionar Usuarios</a>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <a className="btn btn-secondary my-2 my-sm-0" href="UsuariosCreate">Crear Usuario</a>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <input type="text" className="form-control me-sm-2" placeholder="Buscar por nombres" value={nombres} onChange={(e) => { setNombres(e.target.value) }}></input>
                        <button className="btn btn-dark" type="submit">Buscar</button>
                    </div>
                </div>
            </nav>

            <div class="table-responsive">
                <table class="table table-striped-columns
                                        table-hover	
                                        table-borderless
                                        align-middle">
                    <caption>Usuarios oficiales Indetex© 2022®</caption>
                    <thead className="table-primary">
                        <tr>
                            <th>ID</th>
                            <th>NOMBRES</th>
                            <th>APELLIDOS</th>
                            <th>CARGO</th>
                            <th>EMAIL</th>
                            <th>CONTRASEÑA</th>
                            <th>BLOQUEADO</th>
                            <th>ROL</th>
                            <th>Detalle</th>
                            <th>Editar</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            dataUsuario.map(misusuarios => (
                                <tr className="table-active">
                                    <td scope="row">{misusuarios._id}</td>
                                    <td>{misusuarios.nombres}</td>
                                    <td>{misusuarios.apellidos}</td>
                                    <td>{misusuarios.cargo}</td>
                                    <td>{misusuarios.email}</td>
                                    <td>{misusuarios.contrasenia}</td>
                                    <td>{misusuarios.bloqueado}</td>
                                    <td>{misusuarios.rol}</td>
                                    <td>
                                        <Link to={`/read/${misusuarios._id}`}>
                                            <a className="btn btn-info">
                                                <i className="fas fa-info-circle fa-lg"></i>
                                            </a>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/read/${misusuarios._id}`}>
                                            <a className="btn btn-success">
                                                <i className="fas fa-address-book fa-lg"></i>
                                            </a>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/read/${misusuarios._id}`}>
                                            <a className="btn btn-danger">
                                                <i className="fas fa-trash fa-lg"></i>
                                            </a>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot className='tfoot-j'>
                        <td colSpan={7}>Total</td>
                        <td>reg?</td>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default UsuariosListar;