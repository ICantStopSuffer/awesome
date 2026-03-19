import Sidebar from "@/modules/sidebar";
import { projectUpdateSubmit } from "./recieve";

export default async function editProject({params}) {
    const id = (await params).id;

    return (
        <Sidebar>
            <form action={projectUpdateSubmit}>
                <div className="info">
                    <input
                        name="name"
                        id="name"
                        type="text"
                        />
                    <input type="hidden" value={id} name="id"/>
                </div>

                <div className="info">
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </Sidebar>
    );
}