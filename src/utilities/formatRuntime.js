// para formatear el tiempo de la movie eje: 3h 12min
export const formatRuntime = (runtime) =>{
    let time = (runtime/60).toString();
    time = time.split('.');
    if(time.length===1){
        return `${time[0]}h `
    }else{
        return `${time[0]}h ${time[1].substring(0,2)}min`
    }
}