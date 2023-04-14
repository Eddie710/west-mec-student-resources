const btn = document.querySelector('#btn');
const output = document.querySelector('.container');
const url = 'temp1.json';
// ---- OLD SYNTAX ----- //
// btn.onclick = () => {
//   //console.log('clicked');
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       addData(data);
//     });
// };
// ------ modern async syntax ------- //
btn.onclick = async () => {
  //console.log('clicked');
  try {
    const res = await fetch(url);
    const data = await res.json();
    addData(data);
  } catch (error) {
    console.error(error);
  }
};
function addData(data) {
  let html = '<h1>Results</h1>';
  data.forEach((person) => {
    console.log(person);
    html += `<div>${person.first} ${person.last} (${person.id})</div>`;
  });
  output.innerHTML = html;
}
