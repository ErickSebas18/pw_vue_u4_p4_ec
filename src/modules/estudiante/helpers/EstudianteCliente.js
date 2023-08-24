import axios from "axios"

const obtenerEstudianteFacade = async (cedula) => {
    console.log("Entrando")
    return await obtenerEstudianteAxios(cedula)    
}

const obtenerEstudianteAPI = async (cedula) => {
    const data = await fetch(`http://localhost:8080/API/v1/Matricula/estudiantes/${cedula}`).then(r => r.json())
    console.log(data);
}

const obtenerEstudianteAxios = async (cedula) => {
    //En el config vamos a enviar todos los datos de cabecera
    //Lo declaro como si fuese un json
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFcmljayIsImlhdCI6MTY5Mjg0MjMyNywiZXhwIjoxNjkyODcyMzI3fQ.AsQ_z5_OmYqv3NjtNW5THrsWR88GSpouRVvMzXkGRYJgGbVOVnNdIfrcKDAu1qVEWKezOCxKWsU75J25Vf-BGQ",
        "Mensaje": "Valor1"
    }
    const data = axios.get(`http://localhost:8080/API/v1/Matricula/estudiantes/${cedula}`, {headers: headers}).then(r => r.data)
    console.log(data)
    return data
}

const ingresarEstudianteFacade =  (bodyEstudiante) => {
   ingresarEstudiante(bodyEstudiante)
}

const ingresarEstudiante = (bodyEstudiante) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFcmljayIsImlhdCI6MTY5Mjg0MjMyNywiZXhwIjoxNjkyODcyMzI3fQ.AsQ_z5_OmYqv3NjtNW5THrsWR88GSpouRVvMzXkGRYJgGbVOVnNdIfrcKDAu1qVEWKezOCxKWsU75J25Vf-BGQ",
        "Mensaje": "Valor1"
    } 
    axios.post(`http://localhost:8080/API/v1/Matricula/estudiantes`, bodyEstudiante, {headers: headers}).then(r => r.data)
}

const actualizarEstudianteFacade = async (id, bodyEstudiante) => {
    actualizarEstudiante(id,bodyEstudiante)
    console.log("Se ha actualizado")
}

const actualizarEstudiante = async (id, bodyEstudiante) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFcmljayIsImlhdCI6MTY5Mjg0MjMyNywiZXhwIjoxNjkyODcyMzI3fQ.AsQ_z5_OmYqv3NjtNW5THrsWR88GSpouRVvMzXkGRYJgGbVOVnNdIfrcKDAu1qVEWKezOCxKWsU75J25Vf-BGQ",
        "Mensaje": "Valor1"
    }
    axios.put(`http://localhost:8080/API/v1/Matricula/estudiantes/${id}`, bodyEstudiante, {headers: headers}).then(r => r.data)
}

const eliminarEstudianteFacade = async (id) => {
    eliminarEstudiante(id)
    console.log("Se ha eliminado")
}

const eliminarEstudiante = async (id) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFcmljayIsImlhdCI6MTY5Mjg0MjMyNywiZXhwIjoxNjkyODcyMzI3fQ.AsQ_z5_OmYqv3NjtNW5THrsWR88GSpouRVvMzXkGRYJgGbVOVnNdIfrcKDAu1qVEWKezOCxKWsU75J25Vf-BGQ",
        "Mensaje": "Valor1"
    }
    axios.delete(`http://localhost:8080/API/v1/Matricula/estudiantes/${id}`, {headers: headers}).then(r => r.data)
}


export { obtenerEstudianteFacade, ingresarEstudianteFacade, actualizarEstudianteFacade, eliminarEstudianteFacade }