export const guardarTareas = async( tareas = [] )=>{
    try {
        const {REACT_APP_API_URL} = process.env;
        const resp = await fetch(`${REACT_APP_API_URL}/mantenimiento/agregar/tareas`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
              }, 
            body: [
                ...tareas
            ]
        });

        return {
            ok : resp.ok,
            status : resp.statusText,
        } ;
        
    } catch (error) {
        console.log(error);
        return {
            ok : false,
            status : 500,
            error
        }
    }
    

   

}