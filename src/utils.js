import FetchWrapper from './fetchWrapper.js';

const API = new FetchWrapper('https://us-central1-js-capstone-backend.cloudfunctions.net/api/');
const user = document.querySelector('#name');
const score = document.querySelector('#score');

export default class Utils {
  static startLoader(elem1, elem2) {
    elem2.classList.add('loading-spinner');
    elem1.innerHTML = 'Loading';
  }

  static stopLoader(elem1, elem2, value) {
    elem2.classList.remove('loading-spinner');
    elem1.innerHTML = value;
  }

  static render(data) {
    document.querySelector('.list').innerHTML = data.sort((a, b) => b.score - a.score)
      .map((result) => `<li>${result.user} : ${result.score}</li>`)
      .join('');
  }

  static getLocal() {
    return JSON.parse(localStorage.getItem('ID'));
  }

  static setLocal(id, data) {
    localStorage.setItem(id, JSON.stringify(data));
  }

  static async generateID() {
    const { result } = await API.post('games/', { name: 'My cool new game' });
    return result.substr(14, 20);
  }

  static clearFields() {
    user.value = '';
    score.value = '';
  }

  static showModal(result) {
    Utils.inputChecker();
    const elem = document.querySelector('.modal');
    elem.innerHTML = result;
    elem.style.top = '-7vh';
    setTimeout(() => {
      elem.style.top = '-100vh';
    }, 3000);
  }

  static inputChecker() {
    if (user.value === '' || score.value === '') {
      Utils.displayError('The user and score inputs can not be empty');
    } else {
      Utils.displayError('');
    }
  }

  static inputFocus() {
    user.focus();
  }

  static checkScores(result) {
    if (result.length === 0) {
      document.querySelector('.list').innerHTML = '<li>No Leaderboard scores added yet</li>';
    } else {
      Utils.render(result);
    }
  }

  static displayError(value) {
    document.querySelector('.error').innerHTML = `${value}`;
  }
}