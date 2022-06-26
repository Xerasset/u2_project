/**
 *
 * Latitude + Longitude for cities in project as integers
 */

const columbus = document.getElementById('columbus')
const columbusLong = 39.983334
const columbusLat = -82.98333

const tokyo = document.getElementById('tokyo')
const tokyoLong = 35.652832
const tokyoLat = 139.839478

const vienna = document.getElementById('vienna')
const viennaLong = 48.210033
const viennaLat = 16.363449

const sf = document.getElementById('sf')
const sfLong = 37.773972
const sfLAt = -122.431297

const milan = document.getElementById('milan')
const milanLong = 45.464664
const milanLat = 9.18854

/**
 *
 * Const vars for elements on in index.html + finalPage.html
 */

const index = 'index.html'
const finalPage = 'finalPage.html'

const sunriseButton = document.getElementById('sunrise-btn')
const sunsetButton = document.getElementById('sunset-btn')
// console.log(sunriseButton)
// console.log(sunsetButton)

/**
 *
 * Vars for function defaults (if no user input)
 */

let defaultLat = columbusLat
let defaultLong = columbusLong

/**
 * Vars for date value on index.html
 */
const date = document.getElementById('datePicked')
const finalPickedDate = date.value

/**
 * Vars to be populated on finalPage.html
 */
const finalPageH1 = document.getElementById('title')
const finalPageP = document.getElementById('content')

/**
 * Pseudocode
 *
 * Create get() call with Axios
 *
 * if (option.id === validCity) {add city Lat + Long to get() call}
 * if (finalDateicked === valid date) {add date to get() call}
 * if (sunrise = true) {light theme on finalPage}
 * else (sunset === true) {dark theme on final page}
 *
 * h1 innerText = `the ${sunToggle} time of ${cityName} is`
 * p innerTExt = `${outputTime}`
 *
 */

/**
 *
 * Scripts below
 */

// const getDog = async () => {
//   let breed = input.value
//   let response = await axios.get(
//     `https://dog.ceo/api/breed/${breed}/images/random`
//   )
//   let dogPic = response.data.message
//   imageDiv.innerHTML = `<img src=${dogPic} alt ="dog">`
// }

// button.addEventListener('click', getDog)

const locationPicker = () => {
  let city = document.getElementById('places')
  if (log === 'Milan, Italy') {
    long = milanLong
    lat = milanLat
  }
  console.log(city)
}
const getSunTime = async (finalPickedDate, long, lat) => {}
