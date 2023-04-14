// select the button
const btn = document.querySelector('#btn');
// select the container div
const output = document.querySelector('.container');

// --- define url path to the data
// -------------data must be run on a live server
// const url = 'url/path/to/data';

const url = 'data.json'; // json file is being served locally

// ------ FETCH API CALL --------//

// ---- Promise Chain SYNTAX ----- //
// btn.onclick = () => {
//   //console.log('clicked');
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       addData(data);
//     });
// };
// ------------------------------------//

// ------ Modern Async SYNTAX ------- //
btn.onclick = async () => {
  //console.log('clicked');
  try {
    const res = await fetch(url);
    const data = await res.json();
    addData(data);
  } catch (error) {
    console.error('There was an error: ' + error);
  }
};

// ------ function to write data to the chart ------//
function addData(data) {
  let html = '<h1>Results</h1>';
  data.forEach((item) => {
    console.log(item);
    html += `<div>(${item.property1})-${item.property2}: ${item.property3}(F) </div>`;
  });
  output.innerHTML = html;
}
