export const isNumericInput = (event: any) => {
  const key = event.keyCode;
  return (
    (key >= 48 && key <= 57) || // Allow number line
    (key >= 96 && key <= 105) // Allow number pad
  );
};

const isModifierKey = (event: any) => {
  const key = event.keyCode;
  return (
    event.shiftKey === true ||
    key === 35 ||
    key === 36 ||
    key === 8 ||
    key === 9 ||
    key === 13 ||
    key === 46 ||
    (key > 36 && key < 41) ||
    // Allow Ctrl/Command + A,C,V,X,Z
    ((event.ctrlKey === true || event.metaKey === true) && (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
  );
};

export const enforceFormat = (event: any) => {
  // Input must be of a valid number format or a modifier key, and not longer than ten digits
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault();
  }
};

export const formatToPhone = (event: any) => {
  if (isModifierKey(event)) {
    return;
  }

  const target = event.target;
  const input = event.target.value.replace(/\D/g, ''); // First ten digits of input only
  const first = input.substring(0, 3);
  const middle = input.substring(3, 5);
  const last = input.substring(5);

  if (input.length > 5) {
    target.value = `${first} ${middle} ${last}`;
  } else if (input.length > 3) {
    target.value = `${first} ${middle}`;
  } else if (input.length > 0) {
    target.value = `${first}`;
  }
};
