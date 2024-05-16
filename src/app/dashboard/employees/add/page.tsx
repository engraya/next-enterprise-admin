import { addEmployee } from "../../../../../lib/actions";
import styles from "../../../appComponents/Dashboard/Users/AddUser/AddUser.module.css"
function AddEmployeePage() {
  return (
    <div className={styles.container}>
      <form action={addEmployee} className={styles.form}>
        <input type="text" placeholder="firstname" name="firstname" required />
        <input type="text" placeholder="lastname" name="lastname" required />
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="phone" placeholder="phone" name="phonenumber" />
        <input type="number" placeholder="age" name="age" />
        <input type="text" placeholder="nationality" name="nationality" />
        <input type="text" placeholder="address" name="address" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  )
}

export default AddEmployeePage
