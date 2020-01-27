import React from 'react';

const Poem = props => (
    <tr>
        <td className="py-4 text-xl small-caps">"{props.name}"</td>
        <td className="pl-0 text-xl italic">{props.publication}</td>
    </tr>
);

export default Poem;
