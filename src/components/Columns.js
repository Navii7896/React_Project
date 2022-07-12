import React from 'react'

function Columns() {
    const items=[]
  return (
//     <React.Fragment>
//         {
//             items.map(item=>(
//                 <React.Fragment key={item.id}>
//                     <h1>Title</h1>
//                     <p>:item.title</p>
//                     </React.Fragment>)

//   )
// }

//Instead of React.Fragment we can use empty open and close tag.
<>
 <td>Name</td>
<td>Naveen</td>
</>
// <td>Name</td>
// <td>Naveen</td>
// </React.Fragment>
)
}
export default Columns