import React from 'react';

function ButtonLink(props) {
    console.log(props);
    return (
        <a className={props.className} href={props.Href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;