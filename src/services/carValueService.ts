export const calculateCarValue = (model: string, year: number): { car_value?: number; error?: string } => {
   if (!model || !year) {
    return { error: 'Invalid input: Model and year are required' };
  }

  if (typeof model !== 'string') {
    return { error: 'Invalid input: Model must be a string' };
  }

  if (typeof year !== 'number' && typeof year !== 'string') {
    return { error: 'Invalid input: Year must be a number or a string' };
  }

  const parsedYear = Number(year);
  if (Number.isNaN(parsedYear)) {
    return { error: 'Invalid input: Year must be a valid number' };
  }

  if (parsedYear < 1985 || parsedYear > 2023 || !Number.isInteger(parsedYear)) {
    return { error: 'Invalid input: Year must be an integer between 1985 and 2023' };
  }
  const sanitizedModel = model.replace(/[^a-zA-Z]/g, '').toUpperCase();
  let carValue = 0;
  for (let i = 0; i < sanitizedModel.length; i++) {
    const charCode = sanitizedModel.charCodeAt(i);
    carValue += charCode - 64;
  }
  carValue = carValue * 100 + year;

  if (carValue) {
    return { car_value: carValue };
  } else {
    return { error: 'There was an error calculating the car value' };
  }
};
