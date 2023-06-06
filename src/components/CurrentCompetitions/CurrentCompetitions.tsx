import React from 'react';
import SheetList from "../SheetList/SheetList";

function CurrentCompetitions(props: any) {

    console.log("props", props.tasks)
    return (
        <div><SheetList tasks={props.tasks} Name={"CurrentCompetitions"}/></div>
    );
}

export default CurrentCompetitions;