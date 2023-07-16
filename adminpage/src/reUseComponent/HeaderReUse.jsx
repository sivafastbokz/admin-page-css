import React from 'react';

function HeaderReUse({label,href}){
    return(
      <li><a href={href}>{label}</a></li>
    )
}

export default HeaderReUse;