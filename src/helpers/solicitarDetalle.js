
export const solicitarDetalle = async(idDet = null)=>{
    try {
        const {REACT_APP_API_URL} = process.env;

        const resp = await fetch(`${REACT_APP_API_URL}/mantenimiento/ver/mant/${idDet}`);

        const data = await resp.json();
        
        return {
            ok : data.ok,
            status : resp.status,
            data : data.data
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