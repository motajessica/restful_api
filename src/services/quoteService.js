export const calculateCarValue = (model, year) => {
  const sanitizedModel = model.replace(/[^a-zA-Z]/g, '').toUpperCase();
  let carValue = 0;
  for (let i = 0; i < sanitizedModel.length; i++) {
    const charCode = sanitizedModel.charCodeAt(i);
    carValue += charCode - 64; 
  }
  carValue = (carValue * 100) + year;
  
  if (carValue) {
    return {car_value: carValue}
   } else {
    return {error: "there is an error"}
  }
 
};


export const calculateRiskRating = () => {

}

export const calculateQuote  = () => {
  
}



