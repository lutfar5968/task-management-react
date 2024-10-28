import { Table } from "flowbite-react";

function TaskItem() {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>01</Table.Cell>
            <Table.Cell>API Build</Table.Cell>
            <Table.Cell>Create an API by using laravel platform</Table.Cell>
            <Table.Cell>Lutfar Rahman</Table.Cell>
            <Table.Cell>Height</Table.Cell>
            <Table.Cell>
            <a href="#" className="font-medium text-green-700 hover:underline mr-2 dark:text-cyan-500">
                Edit
            </a>
            <a href="#" className="font-medium text-rose-700 hover:underline dark:text-cyan-500">
                delete
            </a>
            </Table.Cell>
    </Table.Row>
  )
}

export default TaskItem