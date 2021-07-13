import React from 'react'

export const SaveLoginAction=(loginState)=>{
    
    return {
        type:'SaveLogin',
        payload:loginState
    }
}
