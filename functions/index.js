const functions = require('firebase-functions');
const admin = require('firebase-admin');
const uuidv1 = require('uuid/v1');
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const db = admin.firestore();
exports.requsetFriend = functions.https.onRequest((req, res) => {
    // Grab the text parameter.
    const user = req.query.user;
    const me = req.query.me;
    const uid = uuidv1()
    let docRef = db.collection(`friendShip`).doc(me).collection(user).doc(uid);
    docRef.set({
        status: "unconfirmed"
    });
    docRef = db.collection(`friendShip`).doc(user).collection(user).doc(uid);
    docRef.set({
        status: "unconfirmed"
    });
    res.send("ok");
  });

exports.getAllFriendShip = functions.https.onRequest((req, res) => {
    const user = req.query.user;
    const frendShip = db.collection('friendShip').doc(user)
    frendShip.getCollections().then(collections => {
        res.send(collections)
    });
});
  