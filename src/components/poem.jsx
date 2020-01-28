import React from 'react';

const Poem = props => (
    <tr>
        <td className="py-4 text-sm md:text-xl small-caps">
            <a href={props.url}>{props.children}</a>
        </td>
        <td className="pl-4 md:pl-32 text-sm md:text-xl italic">{props.publication}</td>
    </tr>
);

export default Poem;
