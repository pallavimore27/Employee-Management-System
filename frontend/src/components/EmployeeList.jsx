import { useState, useEffect, useContext } from "react";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";
import { AuthContext } from "../context/AuthContext";

const API_URL = "http://localhost:5000/api";
const ITEMS_PER_PAGE = 10;

const EmployeeList = () => {
  const { token } = useContext(AuthContext);

  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔍 Search & Filters
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [position, setPosition] = useState("all");

  // 📄 Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // 🔃 Sorting
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "asc",
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(`${API_URL}/employees`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Reset page on filter/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, department, position]);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this employee?")) {
      try {
        await axios.delete(`${API_URL}/employees/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEmployees(employees.filter((emp) => emp._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleEdit = (employee) => {
    setEditEmployee(employee);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditEmployee(null);
    fetchEmployees();
  };

  // 🔍 FILTER
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "all" || emp.department === department;

    const matchesPosition = position === "all" || emp.position === position;

    return matchesSearch && matchesDepartment && matchesPosition;
  });

  // 🔃 SORTING LOGIC
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (!sortConfig.key) return 0;

    let valueA = a[sortConfig.key];
    let valueB = b[sortConfig.key];

    if (sortConfig.key === "joiningDate") {
      valueA = new Date(valueA);
      valueB = new Date(valueB);
    }

    if (typeof valueA === "string") {
      valueA = valueA.toLowerCase();
      valueB = valueB.toLowerCase();
    }

    if (valueA < valueB) return sortConfig.direction === "asc" ? -1 : 1;
    if (valueA > valueB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  // 📄 PAGINATION
  const totalPages = Math.ceil(sortedEmployees.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedEmployees = sortedEmployees.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const sortArrow = (key) =>
    sortConfig.key === key
      ? sortConfig.direction === "asc"
        ? " ▲"
        : " ▼"
      : "";

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="employee-container">
      <div className="employee-header">
        <h1>Employee Management</h1>
        <button onClick={() => setShowForm(true)} className="btn-primary">
          Add Employee
        </button>
      </div>

      {/* SEARCH & FILTER */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="all">All Departments</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>

        <select value={position} onChange={(e) => setPosition(e.target.value)}>
          <option value="all">All Positions</option>
          <option value="Developer">Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Manager">Manager</option>
          <option value="Intern">Intern</option>
        </select>
      </div>

      {showForm && (
        <EmployeeForm employee={editEmployee} onClose={handleFormClose} />
      )}

      {/* TABLE */}
      <div className="employee-table">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("name")}>
                Name{sortArrow("name")}
              </th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Position</th>
              <th onClick={() => handleSort("salary")}>
                Salary{sortArrow("salary")}
              </th>
              <th onClick={() => handleSort("joiningDate")}>
                Joining Date{sortArrow("joiningDate")}
              </th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedEmployees.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  No employees found
                </td>
              </tr>
            ) : (
              paginatedEmployees.map((emp) => (
                <tr key={emp._id}>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.department}</td>
                  <td>{emp.position}</td>
                  <td>${emp.salary.toLocaleString()}</td>
                  <td>{new Date(emp.joiningDate).toLocaleDateString()}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(emp)}
                      className="btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(emp._id)}
                      className="btn-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
