import Container from "../../Component/container"
import bannerImage from "../../images/task img.png"

function Banner() {
  return (
    <Container className="grid grid-cols-2 mt-10">
        <div>
            <h1 className="text-5xl font-bold mb-3 text-rose-700">Task  Management</h1>
            <p className="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
        </div>
        <div>
            <img className="max-w-md ml-72" src={bannerImage} alt="bannerimg" />
        </div>
    </Container>
  )
}

export default Banner