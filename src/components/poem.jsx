import React from "react";

const Poem = (props) => (
    <tr>
      <td className="pr-64 py-4 text-xl small-caps">"{props.name}"</td>
      <td className="pl-20 text-xl italic">{props.publication}</td>
    </tr>
)

export default Poem;