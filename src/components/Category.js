import React,{useState} from 'react'
import '../css/SideBar.css'
import { Icon } from '@fluentui/react/lib/Icon'
import TodoDataConsumer from "../contextApi/TodoDataContext";
import axios from "axios"

export default function Category(props) {
    const [counts, setCounts] = useState(1);
    const AllApps = () =>
    <Icon iconName='List' />;

    function set(e) {
        if(props.id === sessionStorage.getItem('catgoryID')){
            setCounts(0)
        }else{
            setCounts(1)
        }
    }

    const ListLogo =null    
    const theme =
     counts? {backgroundColor: 'rgba(12 15 25 / 100%)!important'}
          : null
          const {name} = props
    const ButonProperty = () =>
    <Icon iconName='Delete' />;
    
    const onDeleteUser = async (dispatch,e) =>{
        const id = props.id;
        await axios.delete(`http://localhost:3004/todo/${id}`)
        dispatch({type : "DELETE_CATEGORY",payload:id});
    }
    
    const sendID = async (dispatch,e) => {
        e.preventDefault();
        const id = props.id
        const name = props.name
        sessionStorage.setItem('catgoryName', name)
        sessionStorage.setItem('catgoryID', id)
        dispatch({type : "SEND_CATEGORY_ID",payload:id})
        set()   
    }
    
    return(
        <div >
                <TodoDataConsumer>
                {
                    value => {
                            return (
                                <div className='sideFav' style={{...theme,...ListLogo}}  onClick = {sendID.bind(this,value.dispatch)}>
                                    <div className='sideLogo' style={{paddingRight:'5px', fontSize:'20px'}} >
                                        <AllApps />
                                    </div>
                                    {/*eslint-disable-next-line  */}
                                    <a href="">
                                        {name}
                                    </a>
                                    <div className='checkButton'  onClick = {onDeleteUser.bind(this,value.dispatch)}>
                                    <ButonProperty  />
                                    </div>
                                </div>
                            )
                    } 
                }
                </TodoDataConsumer>
            </div>
        )
}
