# Employee's Record Web App

## Overview

This project is a simple CRUD application for managing employee records. It is built using Next.js, MongoDB, and Tailwind CSS. The application supports creating, reading, updating, and deleting employee records. Additionally, authentication is implemented using NextAuth.js to ensure that only logged-in users can manage records.

## Features

- Create a record (Firstname, LastName, Email, Phone, Role: Admin/Staff).
- Read all records and display them in a list.
- Update the First Name, LastName, Phone.
- Delete a record.
- User authentication with sign up, log in, and log out functionalities.
- JWT-based authentication with NextAuth.js.
- Server-side rendering (SSR) or static generation (SSG).
- Error handling and proper validations.

## Technologies Used

- Next.js
- MongoDB with Mongoose
- React
- Tailwind CSS
- NextAuth.js for authentication

## Approach

1. **Project Setup**: Initialized a Next.js project and set up MongoDB with Mongoose for database operations.
2. **UI Development**: Used React and Tailwind CSS to build a responsive and clean user interface.
3. **CRUD Operations**: Implemented API routes in Next.js to handle create, read, update, and delete operations for employee records.
4. **Authentication**: Integrated NextAuth.js for user authentication, ensuring that only authenticated users can perform CRUD operations.
5. **Error Handling & Validation**: Added proper error handling and validations to ensure data integrity and a smooth user experience.
6. **Deployment**: Deployed the application on Vercel/Netlify for easy access and sharing.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   cd employees-crud
   npm install
   ```
3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the following variables:
     ```
     MONGODB_URI=<your-mongodb-uri>
     NEXTAUTH_URL=<your-nextauth-url>
     NEXTAUTH_SECRET=<your-nextauth-secret>
     ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

- Access the application at `http://localhost:3000`.
- Sign up or log in to manage employee records.

## Deployment

- Deploy the application on Vercel/Netlify and share the link.

## Evaluation Criteria

- **Code Quality**: Well-structured and readable code.
- **Functionality**: Meets the specified requirements.
- **Best Practices**: Proper use of Next.js, React, and MongoDB.
- **UI & UX**: Clean and responsive design.
- **Documentation**: A clear README.md explaining the approach.

## Submission

- Push your code to GitHub and share the repository link.
- Host the application on Vercel/Netlify and send the link to `career@deboik.com`.

## Deadline

- 48 hours from receiving this assessment.
