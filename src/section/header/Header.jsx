import Container from "../../Component/container"
import logo from '../../images/logo.png'
import { CiLight } from "react-icons/ci";

function header() {
  return (
    <div className="py-3 border-b">
        <Container className="flex justify-between items-center">
            <img src={logo} alt="brand logo" />
            <CiLight className="text-xl cursor-pointer" />
        </Container>
    </div>
  )
}

export default header