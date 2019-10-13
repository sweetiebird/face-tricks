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

  static get authStatic() {
    return authStatic;
  }

  static get user() {
    return auth.currentUser;
  }

  static login = async () => {
    try {
      const provider = new Auth.authStatic.GoogleAuthProvider();
      return Auth.auth.signInWithRedirect(provider);
    } catch (err) {
      const { code, message, email, credential } = err;
      console.log(code, message, email, credential);
      return undefined;
    }
  };
}


export default Auth;
