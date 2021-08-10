/* // Task
type CreateUser = unknown;

const createUser: unknown = (name, age, occupation) => {
  const newUser: unknown = { name, age, occupation };
  return newUser;
};
*/

// This is the structure of the Object
type NewUser = {name:string; age:number; occupation:string}

// This is the structure of the function
type CreateUser = {
  (name:string, age:number, occupation:string): NewUser
}

const createUser: CreateUser = (name, age, occupation) => {
  
  const newUser: NewUser = { name, age, occupation };
  return newUser;

};

createUser('justin',21,'dude')
