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
    const data = axios.get(`http://localhost:8080/API/v1/Matricula/estudiantes/${cedula}`).then(r => r.data)
    console.log(data)
    return data
}

const ingresarEstudianteFacade = async (bodyEstudiante) => {
    ingresarEstudiante(bodyEstudiante)
}

const ingresarEstudiante = async (bodyEstudiante) => {
    axios.post(`http://localhost:8080/API/v1/Matricula/estudiantes`, bodyEstudiante).then(r => r.data)
}

const actualizarEstudianteFacade = async (id, bodyEstudiante) => {
    actualizarEstudiante(id,bodyEstudiante)
    console.log("Se ha actualizado")
}

const actualizarEstudiante = async (id, bodyEstudiante) => {
    axios.put(`http://localhost:8080/API/v1/Matricula/estudiantes/${id}`, bodyEstudiante).then(r => r.data)
}

const eliminarEstudianteFacade = async (id) => {
    eliminarEstudiante(id)
    console.log("Se ha eliminado")
}

const eliminarEstudiante = async (id) => {
    axios.delete(`http://localhost:8080/API/v1/Matricula/estudiantes/${id}`).then(r => r.data)
}


export { obtenerEstudianteFacade, ingresarEstudianteFacade, actualizarEstudianteFacade, eliminarEstudianteFacade }