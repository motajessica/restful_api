const minimumYear = new Date().getFullYear();
const modelErrorMessage = 'Invalid input, model can\'t be empty '
const yearErrorMessage =  `Invalid input, year must be a number bigger than 1990 and smaller than ${minimumYear}`
const baseErrorMessage =  "Invalid input, both year and model can\'t be empty"

const isYearInvalid = (year: string | null) => {
const parsedYear = Number(year);
  return (!parsedYear ||typeof parsedYear !== "number" ||parsedYear < 1990 ||parsedYear > minimumYear ||!Number.isInteger(parsedYear))
} 

const isModelInvalid = (model: string| null) => {
  return (!model || typeof model !== "string")
}

export const calculateCarValue = (
  model: string | null,
  year: string| null
): { car_value?: number; errors?: object } => {
  
  if(!model || !year) {
    return {errors: {base: baseErrorMessage}}
  } 
  const errors: { year?: string; model?: string } = {};

  if ( isYearInvalid(year) ) {
    errors.year = yearErrorMessage
  }
  const parsedYear = Number(year);

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
  const carValue = charSet * 100 + parsedYear;
  
  return { car_value: carValue };
};