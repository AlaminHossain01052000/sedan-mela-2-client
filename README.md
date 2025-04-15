
# 🚗 Sedan Mela

**Live Link:** _[Live Link](https://sedan-mela.netlify.app/)_

**Sedan Mela** is a full-featured MERN stack web application for exploring, purchasing, and managing sedan cars. It includes both user and admin functionalities with secure authentication, Stripe payment integration, and a dynamic dashboard experience.

---

## 🌟 Features

### 👤 **User Functionality**
- 🔍 View the home page with:
  - Navigation Bar
  - Featured Sedans (6)
  - About Us
  - Testimonials (User Reviews)
  - Footer Section
- 🛒 Click on **Purchase** → Redirects to **Login/Register** (via Email/Password or Google)
- ✅ After Login:
  - **User Email:** `john@gmail.com`  
    **Password:** `123456`
  - Purchase a sedan by entering address and phone number
  - Explore sedans using filters:
    - Engine
    - Gear & Gear Type
    - Fuel Type
    - Price Range
  - Access **User Dashboard**:
    - 📦 **My Orders**: 
      - Pay via Stripe
      - Cancel/Delete if not paid
    - ✍️ **Add a Review**
    - 🚪 **Logout**

---

### 🔑 **Admin Functionality**
- 👤 Admin Login:  
  **Email:** `sheikh@gmail.com`  
  **Password:** `123456`
  
- 🧰 Admin Dashboard:
  - 🔧 **Make Admin** – Promote users by providing their email
  - 📋 **Manage All Orders** – View & delete any order
  - ➕ **Add Product** – Add new sedans with detailed descriptions
  - 🗃️ **Manage All Products** – Delete or manage all sedan entries
  - 🚪 **Logout**

---

## 🚀 Technologies Used

| Frontend       | Backend      | Authentication | Payment |
|----------------|--------------|----------------|---------|
| React.js       | Express.js   | Firebase Auth  | Stripe  |
| Material UI    | MongoDB      | Google Sign-In |         |
| React Router   |              |                |         |

---

## 🔗 Project Repositories

- 🧩 **Frontend Code:** [GitHub - sedan-mela-2-client](https://github.com/AlaminHossain01052000/sedan-mela-2-client)  
- 🔧 **Backend Code:** [GitHub - sedan-mela-2-server](https://github.com/AlaminHossain01052000/sedan-mela-2-server)

---

## 🧪 Test the App Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/AlaminHossain01052000/sedan-mela-2-client
   git clone https://github.com/AlaminHossain01052000/sedan-mela-2-server
   ```

2. Navigate to client and install dependencies:
   ```bash
   cd sedan-mela-2-client
   npm install
   ```

3. Set up your server:
   ```bash
   cd ../sedan-mela-2-server
   npm install
   ```

4. Create `.env` files for both client and server with the necessary environment variables (MongoDB URI, Stripe keys, Firebase config, etc.)

5. Run both servers:
   ```bash
   # In one terminal for backend
   nodemon

   # In another terminal for frontend
   npm start
   ```

---

## 💬 Feedback

Found a bug or want to contribute? Open an [issue](https://github.com/AlaminHossain01052000/sedan-mela-2-client/issues) or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

