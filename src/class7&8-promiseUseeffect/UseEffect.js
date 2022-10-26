import React from 'react'

function UseEffect() {
  const [countone,setCountOne]= React.useState(0)
  const [counttwo,setCountTwo]= React.useState(0)

  React.useEffect(() => {
    console.log('Count One UseEffect');
}, [countone])

React.useEffect(() => {
    console.log('Count Two UseEffect');
}, [counttwo])


 /*if we give empty one one time used mostly in api calls
React.useEffect(() => {
  console.log('Count Two UseEffect');
}, []) */

  return (
    <div>UseEffect
      <br></br>

      countone={countone}
      <button onClick={() => setCountOne(countone+1)} >inncrease the count one  </button>

      <br></br>

      counttwo={counttwo}
      <button onClick={() => setCountTwo(counttwo+1)} >increase the count two</button>
    </div>
  )
}

export default UseEffect