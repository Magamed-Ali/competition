import React from 'react';
import SheetList from "../SheetList/SheetList";

function Archive(props: any) {


    return (
        <div>
            <SheetList tasks={props.tasks} Name={"Archive"}/>
        </div>
    );
}

export default Archive;