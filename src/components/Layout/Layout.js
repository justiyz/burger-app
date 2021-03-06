import React from "react";
import Auxiliary from '../../hoc/Auxiliary'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Auxiliary>
        <Toolbar />
        <div>Toolbar, SideBar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
)

export default layout