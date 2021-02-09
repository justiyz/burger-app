import React from "react";
import Auxiliary from '../../hoc/auxiliary'

const layout = (props) => (
    <Auxiliary>
        <div>Toolbar, SideBar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxiliary>
)

export default layout