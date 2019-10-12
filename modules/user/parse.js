export const userData = data => ({
  displayName: data.displayName,
  email: data.email,
  isAnonymous: data.isAnonymous,
  photoUrl: data.photoURL,
  providerData: data.providerData,
  uid: data.uid,
});
