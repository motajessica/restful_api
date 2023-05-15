export const calculateCarValue = (model, year) => {

  if (!model || !year || typeof model !== 'string' || typeof year !== 'number' || year < 1985 || year > 2023 || !Number.isInteger(year)) {
    return { error: 'Invalid input' };
  }

  const sanitizedModel = model.replace(/[^a-zA-Z]/g, '').toUpperCase();
  let carValue = 0;
  for (let i = 0; i < sanitizedModel.length; i++) {
    const charCode = sanitizedModel.charCodeAt(i);
    carValue += charCode - 64; 
  }
  carValue = (carValue * 100) + year;
  
  if (carValue) {
    return { car_value: carValue };
  } else {
    return { error: 'There was an error calculating the car value' };
  }
 
};