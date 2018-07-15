let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const stash = [];
const state = {
    open: [],
    active: null,
};

export default class PersonService {
    get state() {
        return state;
    }

    getPersons() { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 250);
        });
    }

    getPerson(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data.find(o => o.id === id));
            }, 250);
        });
    }

    getStash() {
        return stash;
    }

    pushPerson(id) {
        console.log('Stashing', id);
        stash.push(id);
    }

    slicePerson(id) {
        const i = stash.indexOf(id);
        if (i >= 0) {
            stash.slice(id);
        }
    }
}