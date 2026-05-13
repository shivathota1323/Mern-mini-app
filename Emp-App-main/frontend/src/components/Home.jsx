import React, { useContext } from "react";
import { Link } from "react-router";
import { counterContextObject } from "../contexts/ContextProvider";

function Home() {
  const { counter, changeCounter } =
    useContext(counterContextObject);

  return (
    <div className="bg-gradient-to-br from-slate-100 to-blue-100 min-h-screen text-gray-800">

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg">
        <h1 className="text-5xl md:text-6xl font-bold mb-5">
          Employee Management System
        </h1>

        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
          A powerful and modern MERN Stack Employee Management
          Application designed to simplify employee management,
          improve productivity, and provide a clean user experience.
        </p>

        {/* Counter Section */}
        <div className="mt-10 bg-white text-gray-800 inline-block px-8 py-6 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Counter: {counter}
          </h2>

          <button
            onClick={changeCounter}
            className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            Change Count
          </button>
        </div>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">
          <Link
            to="/employees"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition"
          >
            View Employees
          </Link>

          <Link
            to="/create-emp"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition"
          >
            Add Employee
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Employee Management
            </h3>
            <p>
              Add, edit, delete, and organize employee
              records with a professional and clean interface.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Fast Performance
            </h3>
            <p>
              Built using modern MERN technologies for fast
              loading speed and smooth user experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Secure Database
            </h3>
            <p>
              Employee information is securely stored in
              MongoDB for reliable data management.
            </p>
          </div>
        </div>
      </section>

      {/* About App */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-blue-700 mb-5">
            About This App
          </h2>

          <p className="text-lg leading-9 text-justify">
            This Employee Management System is a complete
            MERN stack application developed to simplify
            employee information management for organizations,
            institutions, and businesses. Instead of storing
            employee details manually in files or spreadsheets,
            this application enables users to digitally manage
            records in an organized manner. It allows users
            to add employee information, update details when
            required, view employee records, and delete data
            whenever necessary. The application focuses on
            speed, simplicity, and user experience. Since it
            is built with modern technologies, it performs
            efficiently and works across multiple devices.
            Organizations can reduce paperwork, improve
            productivity, and save valuable time by using
            this system in day-to-day operations.
          </p>
        </div>
      </section>

      {/* Uses */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-green-700 mb-5">
            Uses of This Application
          </h2>

          <p className="text-lg leading-9 text-justify">
            This application is useful in organizations,
            startups, offices, schools, and institutions
            where employee or staff data needs proper
            organization. Businesses can use this system to
            maintain records such as employee names, emails,
            phone numbers, company information, and job
            roles. Instead of handling paper documents,
            everything is digitally managed inside one
            platform. HR teams can quickly search for
            employees and update information instantly.
            Small businesses benefit because the application
            is lightweight and easy to maintain. Educational
            institutions can also adapt this system for
            managing staff records. Overall, the app improves
            efficiency and reduces manual errors.
          </p>
        </div>
      </section>

      {/* Why This */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-purple-700 mb-5">
            Why Choose This App?
          </h2>

          <p className="text-lg leading-9 text-justify">
            This application stands out because it is simple,
            modern, fast, and highly practical. Traditional
            employee management methods often involve
            paperwork, Excel sheets, and manual updates,
            which can consume a lot of time and effort.
            This app provides a digital solution where
            everything can be managed from one interface.
            Since the project uses the MERN stack, it offers
            high performance, better scalability, and smooth
            functionality. The clean design makes navigation
            easier for users of all experience levels. It
            also reduces errors and improves productivity.
            Whether for academic purposes or real-world
            business use, this project offers a professional
            and effective solution.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-orange-600 mb-5">
            How to Use This Application
          </h2>

          <p className="text-lg leading-9 text-justify">
            Using this Employee Management System is very
            easy. Users can start by opening the homepage
            and exploring the available features. To add
            a new employee, click on the Add Employee
            button and enter details such as employee name,
            email, mobile number, designation, and company
            information. Once submitted, the employee data
            gets stored in the database. Users can then
            view employee records from the employee list
            section. If information changes, the edit
            feature allows modifications instantly. Users
            can also remove employee records if needed.
            The workflow is simple, making it suitable for
            beginners and professional users alike.
          </p>
        </div>
      </section>

      {/* About MERN */}
      <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-3xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-cyan-300 mb-5">
            About MERN Stack
          </h2>

          <p className="text-lg leading-9 text-justify">
            MERN Stack is one of the most popular
            technologies used for modern web development.
            The term MERN represents MongoDB, Express.js,
            React.js, and Node.js. MongoDB acts as the
            database for storing employee information in a
            flexible format. Express.js manages backend APIs
            and handles requests from the frontend. React.js
            is used to build fast and dynamic user interfaces
            through reusable components. Node.js provides
            server-side execution for JavaScript. Together,
            these technologies create a powerful ecosystem
            for developing scalable, secure, and efficient
            applications. Since JavaScript is used
            throughout the stack, development becomes easier
            and more consistent.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
