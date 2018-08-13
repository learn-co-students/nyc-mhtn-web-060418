import uuid from 'uuid';
import profiles from '../data/profiles';

let database = {
  cats: profiles,
};

class CatAdapter {
  static getCats() {
    return new Promise((resolve, reject) => {
      resolve({ json: () => [...database.cats] });
    })
  }

  static getCat(id) {
    const cat = database.cats.find(cat => cat.id === id);

    return new Promise((resolve, reject) => {
      resolve({ json: () => cat });
    })
  }

  static postCat(name, description, avatar) {
    return new Promise((resolve, reject) => {
      const newCat = { id: uuid(), name, description, avatar };
      database.cats.push(newCat);
      resolve({ json: () => { return {...newCat} } });
    })
  }

  static patchCat(cat) {
    return new Promise((resolve, reject) => {
      const cats = database.cats.map(c => {
        if (c.id === cat.id) {
          return cat;
        }
        return c;
      });
      database.cats = cats;
      resolve({ json: () => { return {...cat} } });
    })
  }
}

export default CatAdapter;
