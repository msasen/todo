import React, {useState} from 'react'
import { Icon } from '@fluentui/react/lib/Icon'
import { v4 as uuidv4 } from 'uuid'
import TodoDataConsumer from "../contextApi/TodoDataContext";
import axios from "axios";

export default function AddTodo() {
    const [state, setstate] = useState("")
    const change = (e) => {
        setstate(e.target.value)
    }

    const add = async (dispatch,data,e) => {        
        const input = state
        const newForm = {
            'name':input,
            'isNull':1,
            'id':uuidv4()
        }
        await axios.post("http://localhost:3004/todo",newForm);
        dispatch({type : "ADD_CATEGORY",payload:newForm})
    }

    const ButonProperty = () =>
    <Icon iconName='CheckMark' />;
    const AllApps = () =>
    <Icon iconName='List' />;
    
    function ds(e) {
        e.preventDefault();
    }

    return (
        <div>    
             <TodoDataConsumer>
            {
                value => {
                    return(
                        <div>
                            <div className='sideFav'>
                                <div className='MainAllAppsLogo'>
                                    <AllApps />
                                </div>
                                {/*  eslint-disable-next-line */}
                                <a className='inputDiv'>
                                   <form onSubmit={ds} > <input className='Input' type="text" onChange={change} 
                                        // onKeyPress={add.bind(this,value.dispatch)}
                                     />
                                     </form>
                                </a>
                                <div 
                                    onClick={add.bind(this,value.dispatch)}
                                >
                                    <button onClick={value.addLocaleCategory} className='todoAdd'>
                                        <ButonProperty />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                } 
            }                
            </TodoDataConsumer>                
            </div>
    )
}