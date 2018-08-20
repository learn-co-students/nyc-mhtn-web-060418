import { NoSnacksForYouError } from './SnackExceptions';

const API_URL = 'http://localhost:3000';

export default class SnackAdapter {
  static getSnacks() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`${API_URL}/snacks`, config)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new NoSnacksForYouError();
      })
      .catch(err => {
        console.warn(`Failed to fetch snacks.`, err);
        return [];
      });
  }

  static getMySnacks(userId) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`${API_URL}/users/${userId}/snacks`, config)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new NoSnacksForYouError();
      })
      .catch(err => {
        console.warn(`Failed to fetch my snacks for USER_ID: ${userId}.`, err);
        return [];
      });
  }

  static postLogin(username, password) {
    const config = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({ username, password })
    };

    return fetch(`${API_URL}/sessions`, config)
      .then(res => res.json());
  }

  static postRegistration(username, password) {
    const config = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({ username, password })
    };

    return fetch(`${API_URL}/users`, config)
      .then(res => res.json());
  }
}
