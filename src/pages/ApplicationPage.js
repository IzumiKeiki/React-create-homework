import Calculator from "../components/Calculator";
import Todo from "../components/Todo";
// import Addtocart from "../components/Addtocart";

function ApplicationPage() {
  return (
    <div className="app-page">
      <h1>Application Page</h1>
      <Calculator />
      <Todo />
      {/* <Addtocart /> */}
    </div>
  );
}

export default ApplicationPage;
