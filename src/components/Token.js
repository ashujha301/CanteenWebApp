import { db } from "../firebase";


function generateRandomToken() {
  // Generate a random number between 0 and 1
  const randomNumber = Math.random(6);

  // Convert the random number to a string
  const randomToken = randomNumber.toString();

  return randomToken;
}

function saveTokenToFirestore(token) {
    // Get a reference to the Firestore database
    db.firestore();
  
    // Add the token to the 'tokens' collection
    db.collection('tokens').add({
      token: token
    });
  }


const token = generateRandomToken();
saveTokenToFirestore(token);

export default token;

