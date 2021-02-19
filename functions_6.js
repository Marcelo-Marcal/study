// Callback Function: trazer de volta
function sayMyName(name) {
  console.log(name)
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)