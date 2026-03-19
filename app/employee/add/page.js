import Sidebar from "@/modules/sidebar";
import { employeeAddSubmit } from "./recieve";

export default async function addEmployee() {
    return (
        <Sidebar>
            <form action={employeeAddSubmit}>
                name: <input name="name" id="name" type="text"/>
                <br/>
                department: <input name="department" id="department" type="text"/>
                <br/>
                <button type="submit">
                    Submit
                </button>
            </form>
        </Sidebar>
    )
}