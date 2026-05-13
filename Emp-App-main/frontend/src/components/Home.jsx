import {useContext} from 'react'
import {counterContextObject} from '../contexts/ContextProvider'
import React from "react";
import { Link } from "react-router";

function Home() {
  const {counter,changeCounter}=useContext(counterContextObject)
  return (
    <div>
      <h1 className='text-5xl'>Counter: {counter}</h1>
      <button onClick={changeCounter} className='p-4 bg-amber-400'>Change Count</button>
    </div>
    <div className="bg-gradient-to-br from-slate-100 to-blue-100 min-h-screen text-gray-800">

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg">
        <h1 className="text-5xl font-bold mb-5">
          Employee Management System
        </h1>

        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
          A modern MERN Stack Employee Management Application that helps
          organizations manage employee information efficiently with
          simplicity, speed, and security.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
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
              Easily add, update, remove, and manage employee records with a
              clean and user-friendly interface.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Fast Performance
            </h3>
            <p>
              Built using React and Node.js for smooth performance and quick
              loading times.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Secure Database
            </h3>
            <p>
              MongoDB stores employee details securely while Express handles
              backend APIs efficiently.
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
            This Employee Management System is a full-stack MERN application
            developed to simplify employee information handling in an
            organization. Instead of manually storing employee records in
            spreadsheets or documents, this application allows administrators
            and organizations to maintain employee details digitally in a more
            structured and professional way. The application provides features
            such as adding employees, editing employee information, viewing
            employee details, and deleting records whenever required. By using
            this system, organizations can reduce manual errors, improve
            productivity, and maintain data consistency. The application is
            designed with a clean user interface to provide a better experience
            for users. Since it uses modern web technologies, it is fast,
            responsive, and easy to access from different devices including
            desktops, laptops, and mobile phones.
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
            This application can be used in many professional environments where
            employee data needs to be organized efficiently. Companies can use
            this system to maintain employee profiles, job roles, departments,
            email information, and contact details in one centralized platform.
            Educational institutions may also use it to manage staff records.
            Startups and small businesses can benefit greatly because the app
            provides a simple and affordable way to organize workforce
            information digitally. Another major use is quick employee searching
            and editing, which saves time compared to paper-based systems.
            Instead of maintaining files physically, organizations can instantly
            update employee details and retrieve information whenever required.
            This improves management efficiency and helps decision-making become
            faster and more reliable.
          </p>
        </div>
      </section>

      {/* Why This App */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-purple-700 mb-5">
            Why Choose This App?
          </h2>

          <p className="text-lg leading-9 text-justify">
            This Employee Management System stands out because of its
            simplicity, speed, and modern architecture. Unlike traditional
            employee record systems that require manual handling, this app
            automates data management and makes information easily accessible.
            The interface is designed to be simple enough for beginners while
            still looking modern and professional. Since the application is
            powered by the MERN stack, it provides high performance, better
            scalability, and improved security. Users can manage employee data
            without confusion, thanks to organized pages and clean navigation.
            The application also reduces paperwork and minimizes human errors,
            making it a reliable solution for organizations. It is lightweight,
            responsive, and suitable for academic projects as well as real-world
            business requirements.
          </p>
        </div>
      </section>

      {/* How to Use */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-orange-600 mb-5">
            How to Use This Application
          </h2>

          <p className="text-lg leading-9 text-justify">
            Using this Employee Management System is very simple and
            user-friendly. First, users can open the application and navigate
            through the homepage to understand its functionality. To add a new
            employee, users can select the "Add Employee" option and enter
            employee details such as name, designation, company name, mobile
            number, and email address. Once submitted, the information is saved
            in the database. Users can also view all employees through the
            employee list page where details are displayed clearly. If any
            information needs correction, the edit feature can be used to modify
            employee details instantly. Similarly, unwanted records can be
            removed using delete functionality. This simple workflow makes the
            system efficient, practical, and easy to understand even for new
            users.
          </p>
        </div>
      </section>

      {/* MERN */}
      <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-3xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-cyan-300 mb-5">
            About MERN Stack
          </h2>

          <p className="text-lg leading-9 text-justify">
            MERN is one of the most popular full-stack development technologies
            used for building modern web applications. The term MERN stands for
            MongoDB, Express.js, React.js, and Node.js. MongoDB is used as the
            database to store data efficiently in document format. Express.js is
            used to create APIs and manage backend server logic. React.js helps
            build fast and interactive user interfaces with reusable components.
            Node.js acts as the runtime environment that allows JavaScript to
            run on the server side. Together, these technologies create a
            powerful development ecosystem that enables developers to build
            scalable, secure, and responsive applications. MERN stack is widely
            preferred because it uses JavaScript throughout the entire
            application, making development easier and more consistent.
          </p>
        </div>
      </section>
    </div>
  );
}
  )
}

export default Home
