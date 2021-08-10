/* // Task
type NumOrString = unknown;

const isNumberOrString: NumOrString = (item) => {
  if (typeof item === "number") return "num";
  else return "string";
};
*/

// because the function could be past a number or a string
type NumOrString = 
{
  (a: number|string): string
}


const isNumberOrString: NumOrString = (item) => {
  if (typeof item === "number") {
    return "num";
  } else {  
    return "string";
  }
};
