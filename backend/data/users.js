// //user.js 
// import bcrypt from 'bcrypt';

// const users = [
//   {
//     name: 'Admin User',
//     email: 'admin@admin.com',
//     password: bcrypt.hashSync('admin123', 10),
//     userType: 'STUDENT',
//     isAdmin: true
//   },
//   {
//     name: 'John Doe',
//     email: 'john@email.com',
//     password: bcrypt.hashSync('john123', 10),
//     userType: 'STAFF',
//     isAdmin: true
//   },
//   {
//     name: 'Alice Smith',
//     email: 'alice@email.com',
//     password: bcrypt.hashSync('alice123', 10),
//     userType: 'STAFF',
//     isAdmin: false
//   },
//   {
//     name: 'Eva Brown',
//     email: 'eva@email.com',
//     password: bcrypt.hashSync('eva123', 10),
//     userType: 'STAFF',
//     isAdmin: false
//   },
//   {
//     name: 'David Miller',
//     email: 'david@email.com',
//     password: bcrypt.hashSync('david123', 10),
//     userType: 'STUDENT',
//     isAdmin: false
//   }
// ];

// export default users;

//user.js
import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("admin123", 10),
    userType: "STUDENT",
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@email.com",
    password: bcrypt.hashSync("john123", 10),
    userType: "STAFF",
    isAdmin: true,
  },
  {
    name: "Alice Smith",
    email: "alice@email.com",
    password: bcrypt.hashSync("alice123", 10),
    userType: "STUDENT",
    isAdmin: false,
  },
  {
    name: "Eva Brown",
    email: "eva@email.com",
    password: bcrypt.hashSync("eva123", 10),
    userType: "STAFF",
    isAdmin: false,
  },
  {
    name: "David Miller",
    email: "david@email.com",
    password: bcrypt.hashSync("david123", 10),
    userType: "STUDENT",
    isAdmin: false,
  },
];

export default users;
