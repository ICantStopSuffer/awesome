"use client"
import Sidebar from "@/modules/sidebar";
import { employeeAddSubmit } from "./recieve";
import { useEffect, useState } from "react";

export default function addEmployee() {

    const [department, setDepartment] = useState([])
    const [name, setName] = useState([])

    const [departments, setDepartments] = useState([])

    const [skills, setSkills] = useState([])
    const [selectedSkills, setSelectedSkills] = useState([])

    const [projects, setProjects] = useState([])
    const [selectedProjects, setSelectedProjects] = useState([])

    useEffect(() => {
        async function getDepartments() {
            const response = await fetch('/api/department/getAll', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = await response.json();
            setDepartments(result)

            const response2 = await fetch('/api/skill/getAll', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result2 = await response2.json();
            setSkills(result2)

            const response3 = await fetch('/api/project/getAll', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result3 = await response3.json();
            setProjects(result3)
        }

        getDepartments()
    }, [])

    function addSelected(value) {

        if (selectedSkills.find((svalue) => svalue.id === value.id)) {
            return
        }
        
        setSelectedSkills(prev => [...prev, value])
    }

    function removeSelected(value) {
        setSelectedSkills(prev => prev.filter(v => v.id !== value.id))
    }

     function addSProject(value) {

        if (selectedProjects.find((svalue) => svalue.id === value.id)) {
            return
        }
        
        setSelectedProjects(prev => [...prev, value])
    }

    function removeSProject(value) {
        setSelectedProjects(prev => prev.filter(v => v.id !== value.id))
    }

    async function submitAdd(event) {
        /*console.log(name)
        console.log(department)
        for (const gg of selectedProjects) {
            console.log(gg)
        }

        for (const gg of selectedSkills) {
            console.log(gg)
        }*/

        await fetch('/api/employee/add', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                department: department,
                skills: selectedSkills,
                projects: selectedProjects,
            })
        });
    }

    return (
        <Sidebar>
            name: <input name="name" id="name" type="text" onChange={(event) => setName(event.currentTarget.value)}/>
            <br/>
            <select name="department" onChange={(event) => setDepartment(event.currentTarget.value)}>
                {departments.map((department) => (
                    <option key={department.id} value={department.id}>{department.name}</option>
                ))}
            </select>
            <br/>
            <button onClick={submitAdd}>
                Submit
            </button>
        </Sidebar>
    )
}