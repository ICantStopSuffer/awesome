"use client"
import Sidebar from "@/modules/sidebar";
import { employeeAddSubmit } from "./recieve";
import { useEffect, useState } from "react";

export default function addEmployee({ params }) {

    const [id, setId] = useState(1)
    const [department, setDepartment] = useState(1)
    const [name, setName] = useState("")

    const [departments, setDepartments] = useState([])

    const [skills, setSkills] = useState([])
    const [selectedSkills, setSelectedSkills] = useState([])

    const [projects, setProjects] = useState([])
    const [selectedProjects, setSelectedProjects] = useState([])

    useEffect(() => {
        async function getDepartments() {
            const thisId = (await params).id
            setId(thisId)

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

             const response4 = await fetch('/api/skill/getSkillsFromEmployee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id: thisId})
            });

            const result4 = await response4.json();
            setSelectedSkills(result4)

            const response5 = await fetch('/api/project/getProjectsFromEmployee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id: thisId})
            });

            const result5 = await response5.json();
            setSelectedProjects(result5)


        }

        getDepartments()
    }, [])

    async function addSelected(value) {

        if (selectedSkills.find((svalue) => svalue.id === value.id)) {
            return
        }
        
        setSelectedSkills(prev => [...prev, value])

        await fetch('/api/skill/addBridge', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                skill: value.id,
            })
        });
    }

    async function removeSelected(value) {
        setSelectedSkills(prev => prev.filter(v => v.id !== value.id))

        await fetch('/api/skill/removeBridge', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                skill: value.id,
            })
        });
    }

    async function addSProject(value) {

        if (selectedProjects.find((svalue) => svalue.id === value.id)) {
            return
        }
        
        setSelectedProjects(prev => [...prev, value])

        await fetch('/api/project/addBridge', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                project: value.id,
            })
        });
    }

    async function removeSProject(value) {
        setSelectedProjects(prev => prev.filter(v => v.id !== value.id))

        await fetch('/api/project/removeBridge', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                project: value.id
            })
        });
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

        await fetch('/api/employee/update', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                name: name,
                department: department
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
            selected skills: 
            {selectedSkills.map((selectedSkill) => (
                <button key={selectedSkill.id} onClick={() => removeSelected(selectedSkill)} type="button">
                    {selectedSkill.name}
                </button>
            ))}
            <br/>
            choosable skills:
            {skills.map((skill) => (
                <button key={skill.id} onClick={() => addSelected(skill)} type="button">{skill.name}</button>
            ))}
            <br/>
            selected projects: 
            {selectedProjects.map((selectedProject) => (
                <button key={selectedProject.id} onClick={() => removeSProject(selectedProject)} type="button">
                    {selectedProject.name}
                </button>
            ))}
            <br/>
            choosable projects:
            {projects.map((project) => (
                <button key={project.id} onClick={() => addSProject(project)} type="button">{project.name}</button>
            ))}
            <br/>
            <button onClick={submitAdd}>
                Submit
            </button>
        </Sidebar>
    )
}