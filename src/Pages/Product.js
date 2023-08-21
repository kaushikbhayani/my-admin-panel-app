import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import ProductModal from "../CommonComponent/ProductModal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ClearIcon from "@mui/icons-material/Clear";
import { animate, motion } from "framer-motion";
import EditIcon from "@mui/icons-material/Edit";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
const data = [
  {
    id: 1,
    Category: "kaushik",
    discount: "50%",
    image: require("../Images/abc.png"),
    Day: "Saterday",
  },
  {
    id: 2,
    discount: "50%",
    Category: "mohit",
    image: require("../Images/abc.png"),
    Day: "Saterday",
  },
  {
    id: 3,
    discount: "50%",
    Category: "sagar",
    image: require("../Images/abc.png"),
  },
  {
    id: 4,
    discount: "50%",
    Category: "dhaval",
    image: require("../Images/abc.png"),
    Day: "Saterday",
  },
  {
    id: 5,
    discount: "50%",
    Category: "sanket",
    image: require("../Images/abc.png"),
    Day: "Saterday",
  },
  {
    id: 6,
    discount: "50%",
    Category: "sakir",
    image: require("../Images/abc.png"),
    Day: "Saterday",
  },
];

function Product(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const handleremove = () => {
    alert("Remove the button");
  };
  const handleedit = () => {
    alert("Edit the button");
  };
  return (
    <div className="container">
      <div className="container-fluid text-center my-5">
        <Button onClick={() => setModalShow(true)}>Add Product</Button>
      </div>
      <div className="row">
        {data.map((item, i) => (
          <React.Fragment>
            <div className="col-lg-4">
              <div className="my-3">
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top bg-dark"
                    alt="..."
                    height="400px"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{item.Category}</h4>
                    <h3 className="card-offers">
                      {item.discount} <sapn>off</sapn>
                    </h3>
                    <p className="card-text">
                      lorem welcome to pizza shop i have a big sale in the
                      market
                    </p>
                    {/* <a href='#' className='btn btn-primary'>Edit</a> */}
                    <button onClick={handleremove} className="btn btn-danger">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <Button onClick={() => props.handleDrawerOpen}>sfuysdg</Button>
      <ProductModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Product;

// export default function Product(props) {
//   //===============================image upload crud START==========================================
//   // state to store the selected file.
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Create a FormData object
//     const formData = new FormData();

//     // Append file to the formData object here
//     formData.append("image", selectedFile);

//     try {
//       const resp = await axios.post(
//         "http://127.0.0.1:8000/api/uploads",
//         formData
//       );
//       console.log(resp.data);
//     } catch (err) {
//       // Handle Error Here
//       console.error(err);
//     }
//   };

//   const handleFileSelect = (event) => {
//     // we only get the selected file from input element's event
//     setSelectedFile(event.target.files[0]);
//   };

//   //===============================image upload crud  END==========================================

//   //===============================image Get crud  START==========================================

//   const [imageFile, setImageFile] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/show")
//       .then((resp) => {
//         console.log(resp.data);
//         setImageFile(resp.data);
//       })
//       .catch((err) => {
//         // Handle Error Here
//         console.error(err);
//       });
//   }, []);

//   const HandleDelete = async (id)=>{
//     try {
//       const resp = await axios.delete(
//         `http://127.0.0.1:8000/api/show/${id}`,

//       );
//       console.log(resp.data);
//     } catch (err) {
//       // Handle Error Here
//       console.error(err);
//     }
//   };

//   //===============================image Get crud  END==========================================

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileSelect} />
//         <input type="submit" value="Upload File" />
//       </form>
//       <div className="my-5">
//         {imageFile.map((item, i) => (
//           <>
//             <img src={item.image} key={i} width={250} />
//             <button onClick={() => HandleDelete(item.id)}>Delete</button>
//           </>
//         ))}
//       </div>
//     </>
//   );
// }
