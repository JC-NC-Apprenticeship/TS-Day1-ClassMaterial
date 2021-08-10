/* // Task
type Double = unknown;
const double: Double = (num) => {
  return num * 2;
};
double(2);
*/

type Double = {
(num: number): number
}

const double: Double = (num) => {
  return num * 2;
};

double(2);
