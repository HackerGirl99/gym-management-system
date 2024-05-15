# UOV-GYM Project - MERN Stack

Welcome to the Gym Management System Project built using the MERN (MongoDB, Express.js, React, Node.js) Stack. This project provides a robust gym management system for the University Gym with various functionalities to enhance the user experience.

**App Demo** : We'll soon update the link to see and interact using the live app demo

## Features

- **Equipment Booking System**: Efficient booking system for gym equipment with time slot allocation.
- **Leaderboard Integration**: Implement leaderboard functionality to track users' gym activity and rank them based on workout duration.
- **Equipment Reviews and Ratings**: Users can leave reviews and provide ratings for gym equipment.
- **Top Equipments Carousel**: Display a carousel of top-rated or featured gym equipment.
- **Equipment Pagination**: Navigate through equipment listings efficiently with pagination.
- **Equipment Search Feature**: Easily search for gym equipment based on keywords.
- **User Profile with Booking History**: Users can create profiles and track their booking history.
- **Admin Dashboard**: Comprehensive dashboard for administrators to manage admins, equipment, users, and bookings.
- **Admin Admin Management**: Manage admin accounts.
- **Admin Equipment Management**: Add, edit, and delete gym equipment from the platform.
- **Admin User Management**: Manage user accounts.
- **Admin Booking Details Page**: Access detailed information about each booking.
- **Mark Bookings as Completed Option**: Ability to update booking status to "completed."
- **Email Notifications**: Send email notifications for booking confirmations and updates.
- **Database Seeder**: Easily populate the database with sample equipment and users.
# Some features are yet to be completed

## Getting Started

### Prerequisites

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine

```bash
git clone https://github.com/HackerGirl99/gym-management-system.git
```

```bash
cd gym-management-system
```

3. Create a MongoDB database and obtain your MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

4. Create a Brevo account and generate a new SMTP Key from [Brevo](https://www.brevo.com/) //Not currently functional

### Env Variables

1. Rename the `.env.example` file to `.env` and add the following environment variables:

```dotenv
NODE_ENV=development
PORT=5000
JWT_SECRET=ADD_YOUR_JWT_SECRET_HERE
MONGO_URI=ADD_YOUR_MONGO_URI_HERE  //Example: mongodb://127.0.0.1:27017
PAGINATION_MAX_LIMIT=12 # This will show 12 equipments per page; you can change it.
EMAIL_HOST=smtp-relay.brevo.com
EMAIL_PORT=587
EMAIL_USER=ADD_YOUR_BREVO_LOGIN
EMAIL_PASS=ADD_YOUR_BREVO_PASSWORD
EMAIL_FROM=ADD_YOUR_BREVO_LOGIN
```

### Install Dependencies

Run the following commands to install dependencies for both the frontend and backend:

```bash
npm install
cd frontend
npm install
```

### Run
install the following dependencies in the backend:

```bash
npm install concurrently
npm install nodemon
```

To run both the frontend and backend concurrently, use:

```bash
npm run dev
```

To run only the backend:

```bash
npm run server
```

## Build & Deploy

To create a production build for the frontend:

```bash
cd frontend
npm run build
```

## Seed Database 

Use the following commands to seed the database with sample users and products, or destroy all data:

```bash
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

## Sample User Logins

- **For Admin Dashboard Login:**:

  - Email: admin@admin.com
  - Password: admin123

- **For User Login:**:
  - John Doe
    - Email: john@email.com
    - Password: john123
  - Alice Smith
    - Email: alice@email.com
    - Password: alice123


# Contributing to the GYM-MANAGEMENT-SYSTEM Project

We welcome and appreciate contributions from the community to enhance and improve the eCommerce Platform Project. Whether you're a developer, designer, tester, or someone with valuable feedback, your input is valuable. Here's how you can contribute:

## Getting Started

1. Fork the repository to your GitHub account.

2. Clone the forked repository to your local machine:

   ```bash
   git clone https://github.com/HackerGirl99/gym-management-system.git
   ```

3. Navigate to the project directory:

   ```bash
   cd gym-management-system
   ```

4. Create a new branch for your contributions:

   ```bash
   git checkout -b feature/your-feature-name
   git checkout -b issues/your-issue-name
   ```

## Making Changes

1. Implement your changes and improvements.

2. Ensure that your changes adhere to the project's coding style and conventions.

3. Test your changes thoroughly to avoid introducing bugs.

4. Update the project documentation if necessary.

## Committing Changes

1. Commit your changes with a descriptive commit message:

   ```bash
   git add .
   git commit -m "Add your descriptive commit message here"
   ```

2. Push your changes to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   git push origin issues/your-issue-name
   ```

## Creating a Pull Request (PR)

1. Visit your forked repository on GitHub.

2. Switch to the branch containing your changes.

3. Click on the "New Pull Request" button.

4. Provide a clear title and description for your pull request, explaining the purpose and scope of your changes.

5. Submit the pull request.

## Code Review

Your contribution will be reviewed by the project maintainers. Be prepared to address any feedback or suggestions to ensure the quality and compatibility of your changes.

## Thank You!

Thank you for considering contributing to the UOV-GYM Project. Your efforts help make this project better for everyone.
