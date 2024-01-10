export default function cleanSet(inputSet, startString) {
  if (startString === '') {
    return '';
  }
  const valuesArray = [...inputSet];
  const filteredValues = valuesArray.filter((value) => value.startsWith(startString));
  const resultString = filteredValues.map((value) => value.slice(startString.length)).join('-');

  return resultString;
}
