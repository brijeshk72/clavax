import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import {useState, useEffect} from 'react';
import Pagination from "react-js-pagination";

function App() {

const studentList =[{
      studentName:"Brijeh1",
      fatherName:"Parma",
      dob:"18/08/1995",
      address:"shahbazkuli",
      city:"ghazipur",
      state:"up",
      pinCode:233227,
      phone:7275558348,
      email:"brijesh@gmail.com",
      classOpt:"1",
      mark:"40%",
      dateEnroll:"18/08/1995"
      },
      {
      studentName:"Brijeh2",
      fatherName:"Parma",
      dob:"18/08/1995",
      address:"shahbazkuli",
      city:"ghazipur",
      state:"up",
      pinCode:233227,
      phone:7275558348,
      email:"brijesh@gmail.com",
      classOpt:"1",
      mark:"40%",
      dateEnroll:"18/08/1995"
      },
      {
      studentName:"Brijeh3",
      fatherName:"Parma",
      dob:"18/08/1995",
      address:"shahbazkuli",
      city:"ghazipur",
      state:"up",
      pinCode:233227,
      phone:7275558348,
      email:"brijesh@gmail.com",
      classOpt:"1",
      mark:"40%",
      dateEnroll:"18/08/1995"
      },{
      studentName:"Brijeh4",
      fatherName:"Parma",
      dob:"18/08/1995",
      address:"shahbazkul4i",
      city:"ghazipur",
      state:"up",
      pinCode:233227,
      phone:7275558348,
      email:"brijesh@gmail.com",
      classOpt:"1",
      mark:"40%",
      dateEnroll:"18/08/1995"
      }
]


const [students, setStudents]=useState(studentList);
const [studentPerPage, setStudentPerPage]=useState(null)
const [activePage, setActivePage]=useState(1);
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [studentForm, setStudentForm]=useState({
    studentName:"",
      fatherName:"",
      dob:"",
      address:"",
      city:"",
      state:"",
      pinCode:"",
      phone:"",
      email:"",
      classOpt:"",
      mark:"",
      dateEnroll:""
  })

  const {studentName,fatherName,dob,address,city, state, pinCode,phone, email,classOpt, mark, dateEnroll } = studentForm;

const [error, setError]=useState(null);

const handleChange=(e)=>{
setStudentForm({...studentForm, [e.target.name]:e.target.value});
setError(null)

}

const handleFormSubmit=()=>{

    if (studentName==="") {
      setError("Field Required");
      return 0;
    }

    if (fatherName==="") {
      setError("Field Required");
      return 0;
    }

    if (dob==="") {
      setError("Field Required");
      return 0;
    }

    if (address==="") {
      setError("Field Required");
      return 0;
    }

    if (city==="") {
      setError("Field Required");
      return 0;
    }

    if (state==="") {
      setError("Field Required");
      return 0;
    }

    if (pinCode==="") {
      setError("Field Required");
      return 0;
    }

    if (phone==="") {
      setError("Field Required");
      return 0;
    }

    if (email==="") {
      setError("Field Required");
      return 0;
    }

    if (classOpt==="") {
      setError("Field Required");
      return 0;
    }

    if (mark==="") {
      setError("Field Required");
      return 0;
    }

     if (dateEnroll==="") {
      setError("Field Required");
      return 0;
    }

  console.log("studentForm===>", studentForm);
  studentList.push(studentForm)
  setStudents(studentList)
  setShow(false); 
  console.log("studentList===>", studentList)

}


const handlePageChange = (pageNumber)=>{
  setActivePage(pageNumber)
  setStudentPerPage(students.slice(((pageNumber-1)*2),((pageNumber*2))));
}


useEffect(()=>{
 setStudentPerPage(students.slice(0,2));
},[students])


 const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength)
    }
  }


  return (
    <div className="App container my-5">


 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>


    <section>
      <div className="form-group">
        <label for="studentName">Student Name </label>
        <input
        type="text"
        className="form-control"
        id="studentName"
        placeholder="Enter Student Name"
        name="studentName"
        onChange={handleChange}
        />
        <span>{error}</span>
      </div>

       <div className="form-group">
        <label for="fatherName">Father’s Name</label>
        <input
        type="text"
        className="form-control"
        id="fatherName"
        placeholder="Enter Father Name"
        name="fatherName"
        onChange={handleChange}
        />
      </div>

      <div claclassNamess="form-group">
        <label for="dob">DOB</label>
        <input
        type="date"
        className="form-control"
        id="dob"
        placeholder="date"
        name="dob"
        onChange={handleChange}
        />
      </div>


      <div className="form-group">
        <label for="address">Address</label>
        <input
        type="text"
        className="form-control"
        id="address"
        placeholder="Enter address"
        name="address"
        onChange={handleChange}
        />
      </div>


      <div className="form-group">
        <label for="city">City</label>
        <input
        type="text"
        className="form-control"
        id="city"
        placeholder="Enter city"
        name="city"
        onChange={handleChange}
        />
      </div>


      <div className="form-group">
        <label for="state">State</label>
        <input
        type="text"
        className="form-control"
        id="state"
        placeholder="Enter state"
        name="state"
        onChange={handleChange}
        />
      </div>


      <div className="form-group">
        <label for="pinCode">Pin code</label>
        <input
        type="number"
        className="form-control"
        id="pinCode"
        placeholder="Enter pinCode"
        name="pinCode"
        onChange={handleChange}
        maxLength={6}
        onInput={maxLengthCheck}
        onKeyDown={e => /[+\-.,]$/.test(e.key) && e.preventDefault()}
        />
      </div>


      <div className="form-group">
        <label for="phone">Phone No </label>
        <input
        type="number"
        className="form-control"
        id="phone"
        placeholder="Enter phone number"
        name="phone"
        onChange={handleChange}
        maxLength={10}
        onInput={maxLengthCheck}
        onKeyDown={e => /[+\-.,]$/.test(e.key) && e.preventDefault()}
        />
      </div>


      <div className="form-group">
        <label for="email">Email</label>
        <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Enter email"
        name="email"
        onChange={handleChange}
        />
      </div>

    <div className="form-group">
     <label for="classOpt">Class opted</label>
      <select onChange={handleChange} name="classOpt" className="form-control" id="classOpt">
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </select>
  </div>

      <div className="form-group">
        <label for="mark">Marks</label>
        <input
        type="number"
        className="form-control"
        id="mark"
        placeholder="Enter mark"
        name="mark"
        onChange={handleChange}
        maxLength={2}
        onInput={maxLengthCheck}
        onKeyDown={e => /[+\-.,]$/.test(e.key) && e.preventDefault()}
        />
      </div>

      <div className="form-group">
        <label for="dateEnroll">Date enrolled</label>
        <input
        type="date"
        className="form-control"
        id="dateEnroll"
        placeholder="Enter dateEnroll"
        name="dateEnroll"
        onChange={handleChange}
        />
      </div>


   
    </section>

        </div>
        
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={handleFormSubmit}>
            Submit
          </button>
          <button className="btn btn-primary" onClick={handleClose}>
            close
          </button>
        </Modal.Footer>
      </Modal>




    
      <div className="row">
        <div className="col">
         <button  className="btn btn-primary">Enroll</button>
        </div>
      </div>


      <div className="row">
        <div className="col">
            <div className="text-right">
            <button onClick={handleShow} className="btn btn-primary">Add Student</button>
          </div>
        </div>

      </div>


<table className="table mt-4" >
  <thead>
    <tr>
      <th scope="col">SNo.</th>
      <th scope="col">Student Name</th>
      <th scope="col">Phone#</th>
      <th scope="col">Class</th>
      <th scope="col">Mark%</th>
    </tr>
  </thead>
  <tbody>

{ studentPerPage && studentPerPage.map((student, index)=>{
  return(
    <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{student.studentName}</td>
      <td>{student.phone}</td>
      <td>{student.classOpt}</td>
       <td>{student.mark}</td>
      <td>
   
      </td>
    </tr>
  )
})}
    

   
  </tbody>
</table>

              <div className="pagination-custom">
                        <Pagination
                            hideDisabled
                            activePage={activePage}
                            itemsCountPerPage={2}
                            totalItemsCount={students.length}
                            pageRangeDisplayed={5}
                            hideNavigation
                            onChange={handlePageChange}
                        />
              </div>      
    </div>
  );
}

export default App;
