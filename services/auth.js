let auth = null;
let authStatic = null;

class Auth {
  static init = (firebase) => {
    auth = firebase.auth();
    authStatic = firebase.auth;
  };

  static get auth() {
    return auth;
  }

  static get user() {
    return auth.currentUser;
  }
}


export default Auth;
