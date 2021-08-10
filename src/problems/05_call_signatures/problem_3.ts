/* // Task
type InnerCounter = unknown;
type Counter = unknown;

const count: Counter = () => {
  let i = 0;
  const newFunc: unknown = () => {
    return ++i;
  };
  return newFunc;
};

const counter = count();
const one = counter();
const two = counter();
*/


// This is the structure of the returned function
type InnerCounter = 
{
(): number;
}

// This is the structure of the function i.e. it has no structure other than it will return a function
type Counter = 
{
():InnerCounter;
}

const count: Counter = () => {
  let i = 0;
  const newFunc: InnerCounter = () => {
    return ++i;
  };
  return newFunc;
};

const counter = count();
const one = counter();
const two = counter();
