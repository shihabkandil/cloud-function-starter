# Cloud Function with Firestore DB Event Starter

Welcome to the Cloud Function with Firestore DB Event Starter! This project provides a basic setup to kickstart your development with Google Cloud Functions and Firestore database events using Node.js.
Cloud Function triggered by the creation of a document in a Firestore collection. It sends a notification to devices associated with users whose data matches a specific field and value in the Firestore database.

## Getting Started

Follow these steps to get started with the project:

1. **Clone the repository**: Clone this repository to your local machine using `git clone`.

    ```bash
    git clone https://github.com/shihabkandil/cloud-function-starter.git
    ```

2. **Install dependencies**: Navigate into the cloned directory and install the necessary dependencies using npm or yarn.

    ```bash
    npm install
    ```

3. **Setup Firebase Project**: Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/) if you haven't already done so. Make sure to enable Firestore database in your project.

4. **Initialize Firebase**: Install the Firebase CLI if you haven't already, and initialize Firebase in your project directory.

    ```bash
    npm install -g firebase-tools
    firebase login
    firebase init
    ```

    During initialization, select Firestore as one of the features you want to set up, and make sure to associate it with your Firebase project.

5. **Deploy the Cloud Function**: Deploy the cloud function to your Firebase project.

    ```bash
    firebase deploy --only functions
    ```

6. **Test the Function**: After deployment, test the cloud function by adding, updating, or deleting documents in your Firestore database and observing the logs in the Firebase console.

## Project Structure

The project structure is organized as follows:

## Customize the Cloud Function

Feel free to customize the cloud function in `main.js` according to your project requirements. You can listen for different Firestore events such as `onCreate`, `onUpdate`, `onDelete`, etc., and perform actions based on these events.

## Contributing

Contributions are welcome! If you find any issues or want to add enhancements, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding!


