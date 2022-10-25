/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Listens for new messages added to /users/:documentId and does
// something with them. In this case just sets a new field
// called `actionOccurred` to true but obviously this would
// be where you would kick off whatever algo you have.
//
// These can also be in other languages since I'm assuming
// your stuff is in Python or something.
const kickOffFunction = async (snap: any, context: any) => {
  try {
    await admin.firestore().doc(`users/${context.params.documentId}`).set({
      actionOccurred: true,
    }, {merge: true}); // says to update the doc instead of overwriting it
  } catch (e) {
    functions.logger.log(
        "Failed to update data for goal",
        context.params.documentId
    );

    functions.logger.log(e);
  }
};

module.exports = {
  kickOffFunction: functions.firestore
      .document("/users/{documentId}").onCreate(kickOffFunction),
};
