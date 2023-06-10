import React, { Children } from "react"

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
    width: '400px',
    height: '140px',
    borderRadius: '20px',
    display: 'flex'
}

const X_STYLE = {
    marginTop: '-130px',
    marginLeft: '510px'
}

export default function Modal({isOpen, setModalOpen, children}){
    
    if (isOpen){    
        return(
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div onClick={setModalOpen} style={X_STYLE}>X</div>
                    <div>{children}</div>
                </div>
            </div>
        )
    }

    return null
}