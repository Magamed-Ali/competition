import React from 'react';
import SheetList from "../SheetList/SheetList";

function MyCompetitions(props: any) {

    return (
        <div><SheetList tasks={props.tasks} Name={"MyCompetitions"}/></div>
    );
}

export default MyCompetitions;