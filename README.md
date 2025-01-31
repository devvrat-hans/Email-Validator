# Email Validator

A simple email validation web application that verifies the validity of an email address using an external API.

## Project Structure

```plaintext
email-validator/
│
├── index.html      # Main HTML structure of the app
├── css/
│   └── style.css   # Styles for the email validator UI
├── js/
│   └── index.js    # JavaScript to manage validation functionality
├── images/
│   └── email.svg   # Email icon used in the UI
├── README.md       # Project documentation
└── LICENSE         # License file (MIT License)
```

### 1. `css/` 
- **`style.css`**: Contains the styling of the web application.

### 2. `js/` 
- **`index.js`**: Handles the core functionality of email validation and result display.

### 3. `images/` 
- **`email.svg`**: Contains an image used for the email icon.

### 4. `index.html`
- The main HTML file for the application, which provides the structure of the page and links to the required CSS and JavaScript files.


## How to Use

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Enter an email address into the input field.
4. Click the "Check Email" button.
5. The result will be displayed below the button, showing various details about the email validity.


## Features
-  Validates email addresses in real-time.
-  Uses an external API to check the validity of the email.
-  Displays detailed information about the email, such as domain, status, and more.
-  Responsive design using CSS.

##  Technologies Used
- **HTML** – For structuring the webpage.
- **CSS** – For styling the webpage.
- **JavaScript (ES6+)** – For handling API calls and updating UI.
- **Email Validation API** – For checking email authenticity.


## API Used

This application uses the **EmailValidation.io API** to check the validity of the email. The API provides various details like deliverability, domain, and more. 

- **API Documentation:** [EmailValidation.io API Docs](https://emailvalidation.io/docs/)

## Demo
[Live Demo](https://droll-validator.netlify.app)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
