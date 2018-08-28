const PROXY = "https://cors-anywhere.herokuapp.com";
const DOG_URL = "http://shibe.online";
const CAT_URL = "https://aws.random.cat/meow";

export default class AnimalAdapter {
  static getDog() {
    return fetch(`${PROXY}/${DOG_URL}/api/shibes`)
      .then(res => res.json())
      .then(json => json[0])
  }

  static getCat() {
    return fetch(`${PROXY}/${CAT_URL}`)
      .then(res => res.json())
      .then(json => json.file)
  }
}
