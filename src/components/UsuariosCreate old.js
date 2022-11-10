import uniqid from 'uniqid';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Navigate } from 'react-router';
import Swal from 'sweetalert2'
import axios from 'axios';

function UsuarioCreate() {
    const [_id, setId] = useState('')
    const [nombres, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [cargo, setCargo] = useState('')
    const [email, setEmail] = useState('')
    const [contrasenia, setcontrasenia] = useState('')
    const [bloqueo, setbloqueo] = useState('')
    const [rol, setRol] = useState('')

    function CreateUsuario() {
        const createCliente = {
            _id: uniqid(),
            nombres: nombres,
            apellidos: apellidos,
            cargo: cargo,
            email: email,
            contrasenia: contrasenia,
            bloqueo: bloqueo,
            rol: rol
        }

        axios.post('api/usuarios/create').then(res => {
            console.log(createCliente)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Good job!',
                showConfirmButton: false,
                timer: 2000
            })
            Navigate('/UsuariosList')
        }).catch(err => { console.log(err.stack) })
    }

    function usuarioRegresar() {
        Navigate('./UsuarioList')
    }

    return(
        <div className='container mt-5'>
            <h4>Nuevo Usuario</h4>
            <div className='row justify-content-center align-items-center g-2'>
                <div className='col-md-12'>
                    <input type="text"></input>
                </div>
            </div>
        </div>
    )
}

export default UsuarioCreate