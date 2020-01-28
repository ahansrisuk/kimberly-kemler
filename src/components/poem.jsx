import React from 'react';

const Poem = props => (
    <tr>
        <td className="py-4 text-xl small-caps">
            <a href={props.url}>{props.children}</a>
        </td>
        <td className="pl-32 text-xl italic">{props.publication}</td>
    </tr>
);

export default Poem;
