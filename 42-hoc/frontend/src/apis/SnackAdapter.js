import { NoSnacksForYouError, AuthenticationError } from './SnackExceptions';

const API_URL = 'http://localhost:3000';

export default class SnackAdapter {
  static getToken() {
    return localStorage.getItem('token');
  }

  static clearToken() {
    return localStorage.removeItem('token');
  }

  static isLoggedIn() {
    return !!SnackAdapter.getToken();
  }

  static getSnacks() {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": SnackAdapter.getToken(), //localStorage.getItem('user_id'),
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
        "Authorization": SnackAdapter.getToken(),
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

  static getProfile() {
    if (!SnackAdapter.isLoggedIn()) {
      return new Promise((resolve, reject) => {
        resolve({});
      })
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": SnackAdapter.getToken(),
      },
    };

    return fetch(`${API_URL}/profile`, config)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new AuthenticationError();
      })
      .catch(err => {
        console.warn(`Invalid auth credentials.`, err);
        SnackAdapter.clearToken();
        return {};
      });
  }
}
