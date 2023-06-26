import CreateTemplates from "./CreateTemplates";
import {Link} from 'react-router-dom'


const Templates = () => {
  return (
    <div className="">
      <button
        className="btn green hoverable"
        style={{ width: "80%", textAlign: "left", marginBottom: "20px", marginTop: "20px" }}
      >
        <i class="material-icons right">keyboard_arrow_right</i>Product Manager
      </button>

      <button
        className="btn green hoverable"
        style={{ width: "80%", textAlign: "left", marginBottom: "20px" }}
      >
        <i class="material-icons right">keyboard_arrow_right</i>Software
        Engineer
      </button>

      <button
        className="btn green hoverable"
        style={{ width: "80%", textAlign: "left", marginBottom: "20px" }}
      >
        <i class="material-icons right">keyboard_arrow_right</i>Designer
      </button>

      <button
        className="btn green hoverable"
        style={{ width: "80%", textAlign: "left", marginBottom: "20px" }}
      >
        <i class="material-icons right">keyboard_arrow_right</i>Customer Success
        Manager
      </button>
      <br></br>
      <div className="create-btn waves-effect waves-light btn black">
        <Link to="/createtemplate" >Create</Link>
      </div>

    </div>
  );
};

export default Templates;
