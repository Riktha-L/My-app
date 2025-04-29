import { hover } from "framer-motion"

function Button(){
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  }
  const button = {
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  }
  return(
    <div style={containerStyle}>
    <button style={button}>Click me</button>
    </div>
  )
}
export default Button;