import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from '../context/AuthContext';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, Link } from "react-router-dom";
import "../componentsStyle/ContactFormStyles.css";
import LogoutButton from "./Logout.Auth0.Form";
import { UserContext } from "../context/UserContext";
import axios from 'axios';

function ProfileForm() {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
    const { user, isLoading, isAuthenticated } = useAuth0();
    const [apiData, setApiData] = useState({});
    const [pintaData, setPintaData] = useState([]);

    const handleLogout = () => {
        logout();
        localStorage.removeItem('user');
        navigate('/');
    };

    useEffect(() => {
        if (isLoading || !isAuthenticated) {
            navigate("/login");
            return;
        }

        const userId = user.sub.split('|')[1];
        const fetchData = async () => {
            try {
                const result = await axios(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona/User/${userId}`);
                if (result.data) {
                    setApiData(result.data.body);
                    // Obtén y guarda los datos de Pinta
                    const pintaResult = await axios(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta/Cedula/${result.data.body.Cedula_Persona}`);
                    if (pintaResult.data) {
                        setPintaData(pintaResult.data.body);
                    }
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, [isLoading, isAuthenticated, user, navigate]);

    const userId = user && user.sub ? user.sub.split('|')[1] : null;

    return (
        <>
            <div className="from-continer1">
                <h1> Datos del Usuario</h1>
                <p>User ID: {userId}</p>

                <h3>Cédula: {apiData.Cedula_Persona}</h3>
                <h3>Nombre: {apiData.Nombre_Persona}</h3>
                <h3>Apellido: {apiData.Apellido_Persona}</h3>
                <h3>Email: {apiData.Correo_Persona}</h3>
                <h3>Fecha de Nacimiento: {apiData.FechaNacimiento_Persona ? apiData.FechaNacimiento_Persona.split("T")[0] : ''}</h3>
                <h3>Número de Contacto: {apiData.Numero_Persona}</h3>
                <h3>Tipo de Sangre: {apiData.Tipo_Sangre_Persona}</h3>

                <h2>Listado de pintas donadas</h2>
                <div className="table-container1"> {/* Aplica la clase "table-container" */}
                    {pintaData.length > 0 && (
                        <table>
                            <thead>
                                <tr>
                                    <th>Fecha de Donación</th>
                                    <th>Nombre del Banco de Sangre</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pintaData.map((pinta, index) => (
                                    <tr key={index}>
                                        <td>{pinta.FechaDonacion_Pinta ? pinta.FechaDonacion_Pinta.split("T")[0] : ''}</td>
                                        <td>{pinta.Nombre_BancoSangre}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <br></br>
                <p className="actualizar">
                    <Link to="/register">Actualiza tu perfil</Link>
                </p>
                <br></br>
                <LogoutButton />
            </div>

        </>
    );
}

export default ProfileForm;
