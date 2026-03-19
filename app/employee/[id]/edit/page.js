"use client"
import Sidebar from "@/modules/sidebar";
import { useEffect, useState } from "react";
import { submitTest } from "./recieve.js"
import "./page.css"

export default function getEmployeeId({params}) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function doSHIT() {
        const response = await fetch('/api/skills/getAll', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });

        const result = await response.json();
        setSkills(result)
    }
    doSHIT()
  }, [])


  return (
    <Sidebar>
        <form action={submitTest}>
            <div className="info">
                <input
                    name="name"
                    id="name"
                    type="text"
                    />
            </div>

            <div className="info">
                <select name="skill">
                    {skills.map((skill) => (
                        <option key = {skill.id} value={skill.id}>
                            {skill.name}
                        </option>
                    ))}
                </select>
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