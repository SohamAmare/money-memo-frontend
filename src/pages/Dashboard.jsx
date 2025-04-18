import React from "react";
import { useNavigate } from "react-router-dom";
import VoiceCommands from "../components/VoiceCommands";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Assuming token is stored in localStorage
    navigate("/loading"); // Navigate to login page on logout
  };

  const handleAddExpense = () => {
    navigate("/addExp"); // Navigate to add expense form
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex space-x-4">
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mx-auto py-10 px-4">
        {/* Voice Activated Feature */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
            MoneyMemo - Voice Activated Feature
          </h1>
          <p className="text-gray-600 text-center mb-6">
            <strong>User Tip:</strong> You can use voice commands like{" "}
            <span className="italic">
              "add expense", "track expense", "show splits", "show analytics",
              "split bills"
            </span>{" "}
            to interact with the system.
          </p>

          {/* Add some space before VoiceCommands */}
          <div className="mt-6">
            <VoiceCommands />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
          Welcome to Your Dashboard!
        </h2>
        {/* <p className="text-lg text-center text-gray-600">
          Explore the features below to manage your expenses.
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Add Expense Feature */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Add Expense
            </h3>
            <p className="text-gray-500 mb-4">
              Quickly add your expenses to track your budget efficiently.
            </p>
            <button
              onClick={handleAddExpense}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Add Expense
            </button>
          </div>

          {/* Analytics Feature */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Analytics
            </h3>
            <p className="text-gray-500 mb-4">
              Analyze your spending patterns and gain insights on your budget.
            </p>
            <button
              onClick={() => navigate("/analytics")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              View Analytics
            </button>
          </div>

          {/* Expense Tracker Feature */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Expense Tracker
            </h3>
            <p className="text-gray-500 mb-4">
              Keep track of your daily, weekly, or monthly expenses.
            </p>
            <button
              // onClick={() => navigate("/")}
              onClick={() => navigate("/expense-tracker")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Track Expenses
            </button>
          </div>

          {/* Bill Splitting Feature */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Bill Splitting
            </h3>
            <p className="text-gray-500 mb-4">
              Split bills and manage shared expenses with ease.
            </p>
            <button
              onClick={() => navigate("/details")}
              // onClick={() => navigate("/bill-splitting")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Split Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom"; // Import useHistory for navigation

// const Dashboard = () => {
//   const [userName, setUserName] = useState("");
//   const token = localStorage.getItem("authToken");
//   const history = useHistory(); // Hook for programmatic navigation

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/user", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch user data");
//         }

//         const userData = await response.json();
//         setUserName(userData.name); // Assuming userData has a 'name' field
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [token]);

//   const handleNavigation = (path) => {
//     history.push(path); // Navigate to the desired feature
//   };

//   return (
//     <div className="max-w-4xl mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
//       <h1 className="text-4xl font-bold text-center mb-6">
//         Welcome to Your Dashboard, {userName}!
//       </h1>
//       <p className="text-xl text-center mb-8 text-gray-600">
//         Manage your expenses with ease and track your financial health.
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         <button
//           onClick={() => handleNavigation("/add-expense")}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg shadow transition duration-300 transform hover:scale-105"
//         >
//           Add Expense
//         </button>
//         <button
//           onClick={() => handleNavigation("/analytics")}
//           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg shadow transition duration-300 transform hover:scale-105"
//         >
//           Analytics
//         </button>
//         <button
//           onClick={() => handleNavigation("/expense-tracker")}
//           className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 rounded-lg shadow transition duration-300 transform hover:scale-105"
//         >
//           Expense Tracker
//         </button>
//         <button
//           onClick={() => handleNavigation("/bill-splitting")}
//           className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 rounded-lg shadow transition duration-300 transform hover:scale-105"
//         >
//           Bill Splitting
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
