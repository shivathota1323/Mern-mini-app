import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { counterContextObject } from "../contexts/ContextProvider";

function Home() {
  const { counter, changeCounter } =
    useContext(counterContextObject);

  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-slate-100 to-blue-100 min-h-screen text-gray-800">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg">
        <h1 className="text-5xl md:text-7xl font-bold mb-5">
          Employee Management System
        </h1>

        <p className="text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed">
          A modern MERN Stack Employee Management Application
          that helps organizations manage employee information
          efficiently with simplicity, speed, and security.
        </p>

        {/* COUNTER SECTION */}
        <div className="mt-10 bg-white text-gray-800 inline-block px-8 py-6 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Counter: {counter}
          </h2>

          <button
            onClick={changeCounter}
            className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
          >
            Change Count
          </button>
        </div>

        {/* NAVIGATION BUTTONS */}
        {/* <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <button
            onClick={() => navigate("/list-emps")}
            className="bg-white text-blue-700 px-8 py-4 rounded-2xl text-xl font-semibold shadow-xl hover:scale-105 transition duration-300"
          >
            View Employees
          </button>

          <button
            onClick={() => navigate("/create-emp")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-2xl text-xl font-semibold shadow-xl hover:scale-105 transition duration-300"
          >
            Add Employee
          </button>
        </div>
      </section> */}

      {/* KEY FEATURES */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Employee Management
            </h3>
            <p className="text-gray-600">
              Easily add, update, remove, and organize
              employee records with a smooth and
              user-friendly experience.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Fast Performance
            </h3>
            <p className="text-gray-600">
              Built with React and Node.js to provide
              fast loading speed and better user
              experience.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Secure Database
            </h3>
            <p className="text-gray-600">
              Employee information is securely stored
              in MongoDB with proper backend handling.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT APP */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-blue-700 mb-5">
            About This App
          </h2>

          <p className="text-lg leading-9 text-justify">
            This Employee Management System is a modern
            MERN stack web application created to simplify
            employee information management in organizations.
            Instead of maintaining employee records manually
            using files or spreadsheets, this application
            allows businesses and institutions to digitally
            manage all employee details in one secure place.
            Users can add new employee records, update
            information whenever required, delete outdated
            records, and access details quickly through a
            clean interface. The application improves work
            efficiency, reduces paperwork, and minimizes
            human errors. Since it is responsive and built
            using modern technologies, users can access it
            from desktops, laptops, and mobile devices.
            This system is useful for both academic learning
            and real-world company management solutions.
          </p>
        </div>
      </section>

      {/* USES */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-green-700 mb-5">
            Uses of This Application
          </h2>

          <p className="text-lg leading-9 text-justify">
            This application can be used in multiple
            professional environments where employee
            management is important. Companies can use
            this platform to store employee information
            such as names, mobile numbers, email
            addresses, company details, and job roles.
            Human Resource departments can update
            employee data instantly whenever changes
            occur. Educational institutions may also
            use this system to manage staff information.
            Startups and small businesses can benefit
            because the application provides an easy and
            affordable way to organize records digitally.
            Instead of searching through paperwork,
            managers can instantly retrieve employee
            details, saving valuable time and improving
            overall productivity.
          </p>
        </div>
      </section>

      {/* WHY THIS APP */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-purple-700 mb-5">
            Why Choose This App?
          </h2>

          <p className="text-lg leading-9 text-justify">
            This Employee Management System stands out
            because of its simplicity, speed, and
            professional design. Unlike traditional
            employee record systems that require
            spreadsheets or manual paperwork, this app
            makes employee management digital and easy.
            The user-friendly interface allows even
            beginners to navigate the system without
            confusion. Since it uses the MERN stack,
            the application offers high performance,
            scalability, and secure data handling.
            Organizations can save time, reduce errors,
            and improve productivity by maintaining all
            employee records in one place. Whether for
            educational projects or real business use,
            this app provides a modern and reliable
            solution.
          </p>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-100 p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-orange-600 mb-5">
            How to Use This Application
          </h2>

          <p className="text-lg leading-9 text-justify">
            Using this Employee Management System is
            simple and user-friendly. First, users can
            visit the homepage to understand the
            application's features and functionalities.
            To add a new employee, click on the
            “Add Employee” button and fill in details
            such as employee name, email address,
            mobile number, designation, and company
            name. After submitting the form, the data
            will be stored in the database. Users can
            view employee details through the employee
            list section. If any details need to be
            updated, users can edit information easily.
            Unwanted records can also be deleted.
            Overall, the workflow is designed to be
            simple, efficient, and easy for beginners.
          </p>
        </div>
      </section>

      {/* ABOUT MERN */}
      <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-cyan-300 mb-5">
            About MERN Stack
          </h2>

          <p className="text-lg leading-9 text-justify">
            MERN Stack is one of the most popular
            technologies used for modern full-stack web
            development. The term MERN stands for
            MongoDB, Express.js, React.js, and Node.js.
            MongoDB is used to store data efficiently in
            a flexible format. Express.js helps build
            backend APIs and server-side functionality.
            React.js creates fast and interactive user
            interfaces through reusable components.
            Node.js enables JavaScript to run on the
            server side. Together, these technologies
            form a powerful ecosystem for building
            scalable, secure, and responsive
            applications. MERN stack is highly preferred
            because developers can use JavaScript
            throughout the frontend and backend,
            making development easier and more
            efficient.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
