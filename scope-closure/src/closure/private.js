
const person = () => {
    var  saveName = "Name";

    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

const newPerson = person();
console.log(newPerson.getName());

newPerson.setName('Steven');
console.log(newPerson.getName());

/**
 * Usando getter y setter 
 * @returns 
 */

const person = () => {
    let name = 'Name'
  
    return {
      get name () {
        return name
      },
  
      set name (value) {
        name = value
      }
    }
  }
  
  const newPerson = person()
  console.log(newPerson.name)

  newPerson.name = 'Steven'
  console.log(newPerson.name)
  