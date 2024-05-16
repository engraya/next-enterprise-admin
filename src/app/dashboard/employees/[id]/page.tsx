import { updateEmployee } from "../../../../../lib/actions";
import { fetchEmployee } from "../../../../../lib/data";
import styles from "../../../appComponents/Dashboard/Users/SingleUser/SingleUser.module.css"
import Image from "next/image";


async function EmployeePage({ params }) {
    const { id } = params;
    const employee = await fetchEmployee(id);
  
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={employee.image || "/noavatar.png"} alt="" fill />
        </div>
        {employee.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateEmployee} className={styles.form}>
          <input type="hidden" name="id" value={employee.id}/>
          <label>Username</label>
          <input type="text" name="username" placeholder={employee.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={employee.email} />
          <label>Nationality</label>
          <input type="text" name="nationality" placeholder={employee.nationality} />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={employee.phonenumber} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={employee.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={employee.isAdmin}>Yes</option>
            <option value={false} selected={!employee.isAdmin}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={employee.isActive}>Yes</option>
            <option value={false} selected={!employee.isActive}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default EmployeePage
