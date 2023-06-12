import React, { Children } from "react"
import './CrudCursos.css'

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(189, 185, 185, 0.342)',
    zIndex: '1000'
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    padding: '150px',
    backgroundColor: 'rgb(183, 186, 134)',
    width: '500px',
    height: '200px',
    borderRadius: '20px',
    display: 'flex'
}

const X_STYLE = {
    position: 'absolute',
    marginTop: '-135px',
    marginLeft: '610px'
}

export default function Modal({isOpen, objeto, children}){
    
    if (isOpen){    
        return(
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div onClick={() => objeto.setOpenModal(!isOpen)} style={X_STYLE}>X</div>
                    <div className="modal_desc">{children}</div>
                </div>
            </div>
        )
    }

    return null
}