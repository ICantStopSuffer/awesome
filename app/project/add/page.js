import Sidebar from "@/modules/sidebar";
import { projectAddSubmit } from "./recieve";

export default async function addProject() {
    return (
        <Sidebar>
            <form action={projectAddSubmit}>
                name: <input name="name" id="name" type="text"/>
                <button type="submit">
                    Submit
                </button>
            </form>
        </Sidebar>
    )
}