import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <h1>Hello World !</h1>
      <Button />
      <p className="class">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum harum
        corrupti beatae eius ex facere, optio perspiciatis eaque dolores nobis
        officiis nesciunt et incidunt unde ab, culpa excepturi deserunt aliquid?
      </p>
      <p id="id">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, rem
        molestiae perferendis itaque recusandae facere perspiciatis veritatis
        deleniti odit iste cupiditate maiores magnam, maxime esse? Tempore magni
        quis ut quisquam!
      </p>
      <p style={{ color: "green" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        corrupti cum, error hic modi velit nisi facere, sapiente culpa fuga
        necessitatibus inventore in omnis ipsa porro incidunt iure, animi nemo!
      </p>
    </>
  );
}

export default App;
