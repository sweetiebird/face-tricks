let store = null;

class Storage {
  static init = (firebase) => {
    store = firebase.storage();
  };

  static get store() {
    return store;
  }

  static ref = path => (
    Storage
      .store
      .ref()
      .child(path)
  );

  static refFromUrl = url => (
    Storage
      .store
      .refFromURL(url)
  );

  static uploadFile = async (path, file) => {
    const md = { contentType: file.type };
    const ref = Storage.ref(path).child(file.name);
    await ref.put(file, md);
    return ref.getDownloadURL(); // async
  };

  static uploadFiles = async (path, fileList = []) => {
    const urls = [];

    await fileList.reduce(async (promise, file) => {
      await promise;
      const url = await Storage.uploadFile(path, file);
      urls.push(url);
    }, Promise.resolve());

    return urls;
  };

  static deleteFileAtPath = async path => (
    Storage
      .ref(path)
      .delete()
  );

  static deleteFileAtUrl = async downloadUrl => (
    Storage
      .refFromUrl(downloadUrl)
      .delete()
  );

  static downloadUrlFromPath = async path => (
    Storage
      .ref(path)
      .getDownloadURL()
  );
}


export default Storage;
