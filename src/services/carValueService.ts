const minimumYear = new Date().getFullYear();
export const modelErrorMessage = 'Invalid input, model can\'t be empty '
export const yearErrorMessage =  `Invalid input, year must be a number bigger than 1990 and smaller than ${minimumYear}`

const isYearInvalid = (year: number) => {
return (!year ||typeof year !== "number" ||year < 1990 ||year > minimumYear ||!Number.isInteger(year))
} 

const isModelInvalid = (model: string) => {
  return (!model || typeof model !== "string")
}

export const calculateCarValue = (
  model: string,
  year: number
): { car_value?: number; errors?: object } => { 
  const errors: { year?: string; model?: string } = {};

  if ( isYearInvalid(year) ) {
    errors.year = yearErrorMessage
  }
  if ( isModelInvalid(model) ) {
    errors.model = modelErrorMessage
  }

  if (Object.keys(errors).length > 0) {
    return { errors }  
  }

  const sanitisedModel = model.replace(/[^a-zA-Z]/g, "").toUpperCase();
  let charSet = 0;
  for (let i = 0; i < sanitisedModel.length; i++) {
    const charCode = sanitisedModel.charCodeAt(i);
    charSet += charCode - 64;
  }
  const carValue = charSet * 100 + year;
  
  return { car_value: carValue };
};