import Sidebar from "@/modules/sidebar";
import { skillUpdateSubmit } from "./recieve";

export default async function editSkill({params}) {
    const id = (await params).id;

    return (
        <Sidebar>
            <form action={skillUpdateSubmit}>
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