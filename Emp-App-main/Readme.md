#  Employee Management App

> A full-stack employee management application built with the MERN stack, enabling organizations to efficiently manage employee records, track attendance, and monitor performance with role-based access control.

**Live Demo:** [https://mern-mini-app-two.vercel.app/](https://mern-mini-app-two.vercel.app/)

---

##  Project Overview

Employee Management App is a comprehensive HR management platform that supports multiple user roles:
- **EMPLOYEE** - View personal profile, track attendance, and check performance metrics
- **MANAGER** - Manage team members, approve attendance, and generate reports
- **ADMIN** - Oversee all employees, manage users, and configure system settings

The application follows a monorepo structure with separate frontend and backend implementations, featuring JWT authentication, secure data storage with MongoDB, and a responsive user interface.

---

##  Key Features

###  Authentication & Authorization
- **User Registration** - Support for EMPLOYEE, MANAGER, and ADMIN roles
- **Secure Login** - JWT-based authentication with token-based sessions
- **Session Management** - HTTP-only cookies for secure token storage
- **Password Security** - Bcryptjs for password hashing
- **Role-Based Access Control** - Protected routes based on user roles
- **Password Change** - Users can update their passwords securely

###  Employee Management
- **Employee Profiles** - Create and maintain comprehensive employee records
- **Department Organization** - Organize employees by departments
- **Position Management** - Track employee positions and roles
- **Contact Information** - Store and update employee contact details
- **Employment Status** - Monitor active/inactive employee accounts

###  Attendance Tracking
- **Attendance Records** - Log daily attendance for employees
- **Check-in/Check-out** - Track work hours and punctuality
- **Attendance Reports** - Generate attendance summaries and analytics
- **Leave Management** - Process and track employee leave requests
- **Approval Workflow** - Manager approval for attendance and leaves

###  Performance Management
- **Performance Reviews** - Create and manage employee performance evaluations
- **Rating System** - Score employees on predefined criteria
- **Feedback Collection** - Document and store feedback and comments
- **Historical Tracking** - Maintain records of past reviews and improvements

###  User Management (Admin)
- **User Listing** - View all registered employees
- **Role Assignment** - Assign and modify user roles
- **User Status Tracking** - Monitor active/inactive accounts
- **Bulk Operations** - Manage multiple users efficiently

---

##  App Behavior & User Flows

###  User Registration Flow
1. Admin navigates to employee registration
2. Enters employee details (name, email, department, position)
3. Assigns initial role (EMPLOYEE, MANAGER, or ADMIN)
4. Backend validates input and creates user account
5. Password is hashed with bcryptjs
6. Employee document created in MongoDB
7. Confirmation notification sent

###  Authentication Flow
1. User enters email and password on login page
2. Backend searches for user by email
3. Password compared with stored hash
4. JWT token generated with `{id, email, role, department}` payload
5. Token set as HTTP-only cookie
6. User redirected to appropriate dashboard based on role
7. Frontend stores user data in state management

###  Employee Profile View (EMPLOYEE Flow)
1. Employee logs in to dashboard
2. Navigates to personal profile
3. Views profile information, department, and position
4. Can update contact information
5. Views attendance history
6. Checks performance reviews and ratings

###  Attendance Check-in (EMPLOYEE Flow)
1. Employee navigates to check-in section
2. Clicks "Check In" button
3. System records current timestamp
4. Backend validates employee status and creates attendance record
5. Confirmation message displayed
6. Employee can check out at end of day
7. Work duration calculated automatically

###  Attendance Management (MANAGER Flow)
1. Manager logs in and navigates to team attendance
2. Views team members' attendance records
3. Can approve or reject attendance entries
4. Processes leave requests with comments
5. Generates attendance reports for the team
6. Monitors attendance patterns and issues

###  Performance Review (MANAGER Flow)
1. Manager navigates to performance management
2. Selects employee for review
3. Fills performance evaluation form with criteria and ratings
4. Adds comments and feedback
5. Submits review to system
6. Employee receives notification of review
7. Historical reviews maintained for comparison

###  System Administration (ADMIN Flow)
1. Admin accesses admin dashboard
2. Views all employees and their details
3. Creates new employee accounts
4. Manages user roles and permissions
5. Views system analytics and reports
6. Configures departments and positions
7. Manages system settings

###  Protected Routes
- `/employee-dashboard` → EMPLOYEE role only
- `/manager-dashboard/**` → MANAGER role only
- `/admin-dashboard/**` → ADMIN role only
- `/profile` → All authenticated roles
- **Unauthorized Access** → Redirected to `/unauthorized` page

###  Session Validation
- On app load, frontend calls `/auth/check-auth`
- Backend validates JWT token from cookie
- If valid: user data returned, session maintained
- If invalid: token cleared, user redirected to login
- Session persists across page refreshes

---

##  Role-Based Behaviors

###  EMPLOYEE Role
| Action | Behavior |
|--------|----------|
| View Profile | ✅ View personal information |
| Check-in/Check-out | ✅ Log attendance |
| View Attendance | ✅ View personal attendance history |
| Request Leave | ✅ Submit leave requests |
| View Reviews | ✅ View performance reviews |
| Manage Attendance | ❌ Not allowed |
| Manage Users | ❌ Not allowed |

###  MANAGER Role
| Action | Behavior |
|--------|----------|
| View Team | ✅ See team members |
| Approve Attendance | ✅ Approve/reject attendance |
| Manage Leave | ✅ Process leave requests |
| Create Reviews | ✅ Create performance reviews |
| Generate Reports | ✅ Create team reports |
| Manage Users | ❌ Limited to team only |
| System Settings | ❌ Not allowed |

###  ADMIN Role
| Action | Behavior |
|--------|----------|
| View All Users | ✅ See all employees |
| Manage Roles | ✅ Assign and modify roles |
| System Settings | ✅ Configure system |
| Create Reports | ✅ Generate system-wide reports |
| View Analytics | ✅ Access analytics dashboard |
| Edit All Records | ✅ Modify any employee data |

---

## 🛠️ Tech Stack

### 🎨 Frontend
- **React** - Modern UI framework with hooks
- **React Router** - Client-side routing
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Axios** - HTTP client for API calls
- **React Hook Form** - Form state management
- **Zustand** - Lightweight state management
- **React Hot Toast** - Toast notifications
- **Chart.js** - Data visualization and analytics

### 🔧 Backend
- **Node.js** with ES Modules - Server runtime
- **Express** - Web server framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Token-based authentication
- **Bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie middleware
- **Dotenv** - Environment variable management

---

##  Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
