const btn = document.querySelector('#btn');
const output = document.querySelector('.container');
// github pagesk
const url = 'https://westmecryan.github.io/Practice_APIs/weather_data.json';

// github raw
//'https://raw.githubusercontent.com/WestMecRyan/Practice_APIs/main/weather_data.json';
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
  data.forEach((city) => {
    console.log(city);
    html += `<div>${city.temperature} ${city.conditions} (${city.city})</div>`;
  });
  output.innerHTML = html;
}
