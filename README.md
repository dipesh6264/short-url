# URL Shortener Application

The URL Shortener Application allows users to shorten long URLs, track analytics, and manage their shortened URLs. This project includes modules for user registration and login, URL shortening, and analytics viewing.

## Modules

### 1. User Registration and Login

- **Registration**: Users can create an account by providing their name, email, and password. An error message is shown if the email is already registered.
- **Login**: Registered users can log in using their email and password. Invalid credentials will display an error message.

### 2. URL Shortening

- Users can shorten a long URL by providing the original URL. The application generates a unique short ID for the URL.

### 3. Analytics

- **View Analytics**: Users can view detailed analytics for their shortened URLs, including the number of clicks and the IP addresses of users who clicked on the URL. Analytics are displayed in a table format with timestamps.

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB

### Steps to Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/Dipesh6264/short-url.git
    ```
2. Navigate to the project directory:
    ```sh
    cd short-url
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the application:
    ```sh
    node index.js
    npm start
    ```

## Demonstration

### User Registration and Login

1. **Registration**: Go to `/signup`, enter your details, and register. If the email is already registered, an error message will be displayed.
2. **Login**: Go to `/login`, enter your credentials, and log in. Invalid credentials will result in an error message.

### URL Shortening

1. **Shorten URL**: After logging in, go to the URL shortening page, enter the original URL, and click **Generate**. The shortened URL will be displayed.

### Analytics

1. **View Analytics**: Click on the **View Details** button next to a shortened URL to see its analytics. The analytics page displays the total number of clicks, the original URL, and a table of click timestamps and IP addresses.

## Example Screenshots

### Registration Page
![image](https://github.com/user-attachments/assets/40995c2d-4908-42b5-a0bd-7d02409681c7)


### Login Page
![image](https://github.com/user-attachments/assets/be7d617f-f303-49be-9511-b0da60722e34)


### URL Shortening Page
![image](https://github.com/user-attachments/assets/e47ca0b8-e428-4b71-a805-17185e7aafb1)


### Analytics Page
<img width="1070" alt="image" src="https://github.com/user-attachments/assets/eea34a43-0b03-46a4-acab-2770d906e712">


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
