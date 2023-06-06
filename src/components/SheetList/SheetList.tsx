import React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import logo1 from "../../Vector.png";
import logo2 from "../../Vector2.png";
import logo3 from "../../Vector3.png";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";

type SheetListType = {
    body?: string
    email?: string
    id?: number
    name?: string
    postId?: number
    title?: string
    userId?: number
    completed?: boolean
}

type SheetListProps = {
    tasks: SheetListType[];
    Name: string;
}

function SheetList({tasks, Name}: SheetListProps) {

    const isLoading = useSelector<AppRootStateType, boolean>(state => state.todoListsReducer.isLoading)
    let currentDate: any = new Date();

    return (
        <div className="sheet-list">
            {
                isLoading ?
                    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                        <LinearProgress color="inherit" />
                    </Stack>
                    :
                    tasks.map(i => {
                        return (
                            <div className="row d-flex justify-content-around p-3 list">
                                <div className="col-4 d-flex justify-content-center align-items-center">
                                    <div className="list-left">
                                        <h3>{i.name?.slice(0, 34) || i.title?.slice(0, 34)}
                                            {((i.name && i.name.length > 34) || (i.title && i.title.length > 34)) ?
                                                <span>...</span> : <span></span>}</h3>
                                        <h6>{currentDate.toString()}</h6>
                                    </div>
                                </div>
                                <div className="col-4 d-flex justify-content-center align-items-center">
                                    <div className="list-center">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                                            dolorum et fuga maxime optio quibusdam vitae. Aperiam dolore et facilis
                                            inventore iusto
                                            nesciunt nostrum perspiciatis porro reprehenderit tempora, tempore
                                            voluptates.</p>
                                        <div className="list-center-bottom">
                                            <div className="list-center-bottom-left">
                                                <img src={logo1} alt=""/>
                                                <div>Price: 15 $</div>
                                            </div>
                                            <div className="list-center-bottom-right">
                                                <img src={logo2} alt=""/>
                                                <div>426 participants enrolled</div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="col-4 d-flex justify-content-center align-items-center">
                                    <div className="list-right">
                                        <img src={logo3} alt=""/>
                                        <h5>
                                            {Name}
                                        </h5>
                                        <div>
                                            <img src={logo3} alt=""/>
                                            <img src={logo3} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
            }

        </div>
    );
}

export default SheetList;