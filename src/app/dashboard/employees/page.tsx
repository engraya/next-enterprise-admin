import { deleteEmployee } from "../../../../lib/actions";
import { fetchEmployees } from "../../../../lib/data";
import Pagination from "@/app/appComponents/Dashboard/Pagination/Pagination";
import Search from "@/app/appComponents/Dashboard/Search/Search";
import styles from "../../appComponents/Dashboard/Users/Users.module.css"
import Image from "next/image";
import Link from "next/link";
async function EmployeesPage({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, employees } = await fetchEmployees(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/employees/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Phone Number</td>
            <td>Email</td>
            <td>Nationality</td>
            <td>Age</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={employee.image || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {employee.username}
                </div>
              </td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.phonenumber}</td>
              <td>{employee.email}</td>
              <td>{employee.nationality}</td>
              <td>{employee.age}</td>
              <td>{employee.createdAt?.toString().slice(4, 16)}</td>
              <td>{employee.isAdmin ? "Admin" : "Client"}</td>
              <td>{employee.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/employees/${employee.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteEmployee}>
                    <input type="hidden" name="id" value={(employee.id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default EmployeesPage
