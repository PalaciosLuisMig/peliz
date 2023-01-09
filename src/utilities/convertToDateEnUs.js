
export const convertToDateEnUs = (date) => {

    if (date === "") {
        return "La fecha no esta fue encontrada"
    }else{
        let convertDate = new Date(date);
        const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
        let result = convertDate.toLocaleDateString('es-ES', options)
        
        return result[0].toUpperCase() + result.substring(1);
    }
    
} 

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}

function addRestoreDays(date, day){
    date.setDate(date.getDate() + day);
    return date;
}

export const convertToDateYYYYMMDD = (date, operation, number) =>{

    if(operation === "day"){
        date = addRestoreDays(date,number)
    }

    return formatDate(date);
}