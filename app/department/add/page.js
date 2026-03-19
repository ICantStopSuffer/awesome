import Sidebar from "@/modules/sidebar";
import { skillAddSubmit } from "./recieve";

export default async function addProject() {
    return (
        <Sidebar>
            <form action={skillAddSubmit}>
                name: <input name="name" id="name" type="text"/>
                <button type="submit">
                    Submit
                </button>
            </form>
        </Sidebar>
    )
}