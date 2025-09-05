# Student Registration Form (MVC)

This is a simple **Student Registration Form** project built using **HTML, CSS, and JavaScript** with an **MVC (Model-View-Controller)** structure. It allows students to register by entering their personal information, and displays a success message after submission.  

## Project Structure
registration/
│
├── index.html <-- Main page (View)
├── assets/
│ ├── css/
│ │ └── style.css <-- CSS styles
│ ├── js/
│ │ ├── student.js <-- Model: Student class
│ │ └── controller.js <-- Controller: form logic and validation
│ └── image/
│ └── blurry.jpg <-- Background image

## How It Works
### 1. **Model (student.js)**
- The `Student` class stores all student information such as:
  - First Name
  - Middle Name
  - Last Name
  - Suffix
  - Contact Number
  - Email
  - Course
  - Batch
  - ID

### 2. **View (index.html)**
- The HTML page shows:
  - Student registration form
  - Success message after registration
- Includes a background image for better design.

### 3. **Controller (controller.js)**
- Handles form logic:
  - Validate input fields (letters for names, numbers for ID and contact, etc.)
  - Display error messages for invalid inputs
  - Submit the form and display student details in a success message
- Connects **Model** and **View**:
  - Collects data from the form (View)
  - Creates a `Student` object (Model)
  - Updates the page with success details (View)

## Features
- Validates user input without using regular expressions (easy for beginners)
- Optional fields like Middle Name and Suffix
- Shows a success message with all entered information
- Background image included for design
- MVC structure separates **data**, **logic**, and **view**

## How to Run
1. Clone or download this repository.
2. Open `index.html` in a web browser.
3. Fill in the form and click **Register**.
4. View the success message after submission.

## Notes for Beginners
- **MVC** helps organize code:
  - Model → Data (Student)
  - View → HTML & CSS (Form & Success message)
  - Controller → JavaScript logic (Validation & Submission)
- Using MVC makes it easier to maintain and extend the project.
- Try changing the background image by updating the `src` in CSS.

## Author
- Christian C. Niones
- Student at CITE (Center for Industrial Technology and Enterprise)

