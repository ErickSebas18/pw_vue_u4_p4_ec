import axios from "axios"

const obtenerEstudianteFacade = async (cedula) => {
    return await obtenerEstudianteAPI(cedula)    
}

const obtenerEstudianteAPI = async (cedula) => {
    const data = await fetch(`http://localhost:8080/API/v1/Matricula/estudiantes/${cedula}`).then(r => r.json())
    console.log(data);
}

const obtenerEstudianteAxios = (cedula) => {

}

const ingresarEstudianteFacade = (bodyEstudiante) => {

}

const actualizarEstudianteFacade = (id, bodyEstudiante) => {

}

const eliminarEstudianteFacade = (id) => {

}



export { obtenerEstudianteFacade, ingresarEstudianteFacade, actualizarEstudianteFacade, eliminarEstudianteFacade }