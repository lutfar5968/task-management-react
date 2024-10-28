

function Container(props) {
  return (
    <div className={`max-w-screen-xl m-auto items-center ${props.className}`}>{props.children}</div>
  )
}

export default Container