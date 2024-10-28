import {TextInput} from "flowbite-react";
import { IoSearch } from "react-icons/io5";

function TaskTableHeader() {
  return (
        <div className="flex justify-between items-center mt-5 mb-8">
                <h1 className="text-3xl font-bold text-rose-700">Your Task</h1>
                <div className="max-w-lg">
                    <TextInput id="email4" type="email" rightIcon={IoSearch} required />
                </div>
        </div>
  )
}

export default TaskTableHeader