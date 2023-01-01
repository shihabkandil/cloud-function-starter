const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Replace with the name of the field you want to match
const fieldToMatch = 'matchField';
// Replace with the value of the field you want to match
const valueToMatch = 'matchValue';

exports.sendNotification = functions.firestore.document('your-collection/{docId}').onCreate((snapshot, context) => {
  // Get the newly created document
  const newDoc = snapshot.data();

  // If the field and value match, send a notification
  if (newDoc[fieldToMatch] === valueToMatch) {
    // Get all documents in the "users" collection that have a matching value in the specified field
    return admin.firestore().collection('users').where(fieldToMatch, '==', valueToMatch).get()
      .then(querySnapshot => {
        // Build an array of device tokens to send the notification to
        const tokens = [];
        querySnapshot.forEach(doc => {
          tokens.push(doc.data().deviceToken);
        });
        // Replace with the title and body of the notification you want to send
        const notification = {
          title: 'New Document',
          body: 'A new document has been created with a matching field and value.'
        };
        // Send the notification to all devices with a matching device token
        return admin.messaging().sendToDevice(tokens, notification);
      });
  }
  return null;
});
