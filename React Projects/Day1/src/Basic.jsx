export default function Basic() {
  let userName = "Dhiraj";

  let userAge = 22;

  let userCity = "Lingdeo";

  function addition() {
    let sum = 10 + 20;
    console.log(sum);
  }

  function goodEvening() {
    console.log("Good Evening");
  }

  let arr = [30, 20, 40, 50, 30];

  let student = ["Dhiraj", "Jay", "Adesh"];

  let studentObject = {student: "Dhiraj", roll: 55};

  let studentDetails = [{
    sName : "Dhiraj",
    sNo: 20
  },
  {
    sName: "jay",
    sNo: 21
  }
 ] 


  for (let arrElement of arr) {
    console.log(arrElement);
  }

  return (
    <>
      <div>
        <h1>This Is Our Basic Component</h1>
        <div>Name: {userName}</div>
        <div>age: {userAge}</div>
        <div>userCity: {userCity}</div>
        <button onClick={addition}>Add Two Numbers</button>
        <button onClick={goodEvening}>Click here</button>
        {/* <p>{ arr[0] }</p>
        <p>{ arr[1] }</p>
        <p>{ arr[2] }</p>
        <p>{ arr[3] }</p>
        <p>{ arr[4] }</p> */}

        {arr.map((a) => {
          return <p>Using return Statement {a}</p>; // when we write code inside the curly braces at that time we need the write return keyword also.
        })}

        {arr.map((a) => (
          <p>using Parenthesis {a}</p> // When we write code inside the parenthesis at that time we dont need to write return keyword.
        ))}

        <ul>
            {
              student.map((s) => (
                <li> {s} </li>
              ))
            }
        </ul>

        <select >
            {
              student.map((s) => (
                <option> {s} </option>
              ))
            }
        </select>

    
            <p>Student Object - {studentObject.student}</p>
            <p>Student Object - {studentObject.roll}</p>

         

        {
          studentDetails.map((details) => (
            <p>Student Name: {details.sName} - Student RollNo: {details.sNo}</p>
          ))
        }

        {/* ul, select, table */}

        {/* ul */}
        <ul>
          {
            studentDetails.map((info)=> (
              <li>{info.sName}</li>
            ))
          }
        </ul>

        {/* Select */}
        <select>
          {
            studentDetails.map((info)=>(
              <option value="">{info.sName} - {info.sNo} </option>
            ))
          }
        </select>
        
        {/* Table */}
        <table border={1}>
          <thead>
            <th>
              Username
            </th>
            <th>
              Roll-No
            </th>
          </thead>
          <tbody>
          {
            studentDetails.map((info)=>(
           
                <tr>
                <td>{info.sName}</td>
                <td>{info.sNo}</td>
                </tr>
                
           
            ))
          }
          </tbody>
        </table>

      </div>
    </>
  );
}
