let db = null;

class Database {
  static init = (firebase) => {
    db = firebase.database();
  };

  static get db() {
    return db;
  }

  static ref = path => (
    Database
      .db
      .ref()
      .child(path)
  );

  static push = async (path, data) => {
    const ref = await Database
      .ref(path)
      .push(data);

    return ref.key;
  };

  static set = async (path, data) => (
    Database
      .ref(path)
      .set(data)
  );

  static update = async (path, data) => (
    Database
      .ref(path)
      .update(data)
  );

  static get = async (path) => {
    const snapshot = await Database
      .ref(path)
      .once('value');

    return snapshot.val();
  };

  static listen = (path, callback, event = 'value') => (
    Database
      .ref(path)
      .on(event, callback)
  );

  static unlisten = (path, listener = undefined) => (
    Database
      .ref(path)
      .off(listener)
  );
}


export default Database;
