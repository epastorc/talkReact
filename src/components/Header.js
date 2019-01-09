import React from 'react';
import Paper from '@material-ui/core/Paper';

export default  function Header(props) {
    return (
        <div>
            <Paper>
                <h1>{props.title}</h1>
            </Paper>
         </div>   
    );   
};

