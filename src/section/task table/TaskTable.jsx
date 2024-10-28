import Container from "../../Component/container"
import { Button, Label, TextInput} from "flowbite-react";
import { IoSearch } from "react-icons/io5";
import { Table } from "flowbite-react";
import TaskItem from "./TaskItem";
import TaskTableHeader from "./TaskTableHeader";


function TaskTable() {
  return (
    <Container className={"mt-10"}>
        <div className="flex justify-end p-4">
            <Button className="mr-2" gradientMonochrome="pink">Add Task</Button>
            <Button gradientMonochrome="purple">Clear Task</Button>
        </div>
        <div className="p-2 rounded-sm border my-6">

            <TaskTableHeader/>

            
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>#</Table.HeadCell>
                        <Table.HeadCell> Title</Table.HeadCell>
                        <Table.HeadCell>Description</Table.HeadCell>
                        <Table.HeadCell>Assigned To</Table.HeadCell>
                        <Table.HeadCell>Priority </Table.HeadCell>
                        <Table.HeadCell>Action </Table.HeadCell>
                   
                    </Table.Head>
                    <Table.Body className="divide-y">

                        <TaskItem/>
                        <TaskItem/>
                        <TaskItem/>
                        <TaskItem/>
                        <TaskItem/>
                        <TaskItem/>


                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell colSpan={6} className="text-center">No data found</Table.Cell>

                    </Table.Row>
                    
                    
                    </Table.Body>
                </Table>
            </div>
        </div>
    </Container>
  )
}

export default TaskTable