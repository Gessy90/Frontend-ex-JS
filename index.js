const url1 =
  "https://ln1rp.e-learningportal.com/sandbox/frontendexercise/getAttributes.cfm?customerID=customerA";

const postData1 = async () => {
  const response = await fetch(url, {
    method: "POST",headers:{customerID: 'customerA'},
    body: JSON.stringify()
  });
  const test = await response.json();
  console.log("json", test);
};


// //Since I wasn't getting any data I've tried to do it this way where I was trying to work with
// //some mock data but I didn't finish the whole process.
const url2 =
  "https://ln1rp.e-learningportal.com/sandbox/frontendexercise/register.cfm";

const getForm = customerID => {
  if (customerID === "customerA") {
    return [
      {
        attribute: "firstname",
        name: "First name",
        type: "text",
        required: true
      },
      {
        attribute: "lastname",
        name: "Last name",
        type: "text",
        required: true
      },
      { attribute: "email", name: "Email", type: "email", required: true },
      { attribute: "country", name: "Country", type: "text", required: false },
      { attribute: "hireDate", name: "Hire date", type: "date", required: true }
    ];
  } else if (customerID === "customerB") {
    return [
      {
        attribute: "firstname",
        name: "First name",
        type: "text",
        required: true
      },
      {
        attribute: "lastname",
        name: "Last name",
        type: "text",
        required: true
      },
      { attribute: "country", name: "Country", type: "text", required: false },
      {
        attribute: "date of birth",
        name: "Date of birth",
        type: "date",
        required: true
      }
    ];
  }
};

const formId = document.getElementById("myForm");

let customerA = getForm("customerA");

const formInput = customerA.forEach(val => {
  let input = document.createElement("input");
  input.attribute = val.attribute;
  input.type = val.type;
  input.placeholder = val.name;
});





// //FIRST METHOD
// // async function postData(url = '', customer = '') {
// //     //     const response = await fetch(url, {
// //       method: 'POST', 
// //       body: {customerID: customer} // body data type must match "Content-Type" header
// //     });

// //     return await response.json(); // parses JSON response into native JavaScript objects
// // }

// // postData('https://ln1rp.e-learningportal.com/sandbox/frontendexercise/getAttributes.cfm', 'customerA' )
// // .then((response) => {
// //     console.log(response); // JSON data parsed by `response.json()` call
// // });

// // var cors =https://cors-anywhere.herokuapp.com/


// //SECOND METHOD
// // const response = fetch(url, {
// //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
// //     mode: 'cors', // no-cors, *cors, same-origin
// //     // *default, no-cache, reload, force-cache, only-if-cached
// //      // include, *same-origin, omit
// //     headers: {
// //         customerID: 'customerA'
// //       // 'Content-Type': 'application/x-www-form-urlencoded',
// //     },
// //      // manual, *follow, error
// //      // no-referrer, *client
// //     body: JSON.stringify(data) // body data type must match "Content-Type" header
// //   }).then(data=>data.json()).then(response=>console.log(response));

// // const test = postData1();
