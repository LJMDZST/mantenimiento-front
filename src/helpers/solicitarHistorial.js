
const {DIR,PUERTO} = process.env;

export const solicitarHistorial = async()=>{
    try {
        const resp = await fetch(`http://${DIR}:${PUERTO}/mant`);

        const data = await resp.json();

        return {
            ok : resp.statusText,
            status : resp.status,
            data
        } ;
        
    } catch (error) {
        return {
            ok : false,
            status : 500,
            error
        }
    }
    

   

}