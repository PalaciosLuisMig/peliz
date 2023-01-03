
export const convertToDateEnUs = (date) => {

    var convertDate = new Date(date);
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    return convertDate.toLocaleDateString('en-us', options);

} 