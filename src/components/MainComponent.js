import React, { useState }  from 'react'
import axios from "axios";
import '../css/MainComponents.css'
import { v4 as uuidv4 } from 'uuid'
import TodoDataConsumer from "../contextApi/TodoDataContext";
import TodoList from './todo/TodoList'
import { Icon } from '@fluentui/react/lib/Icon'
import {useTranslation} from "react-i18next";
import Container from '@material-ui/core/Container';

export default function MainComponent() {
    const [state, setstate] = useState("")
    // eslint-disable-next-line
    const {t, i18n} = useTranslation('common');
    const change = (e) => {
        setstate(e.target.value)
    }
    const Bookmarks = () =>
    <Icon iconName='ToDoLogoInverse' />;
    
    const add = async (dispatch,data,e) => {
        const input = state
        const categoryID =sessionStorage.getItem('catgoryID');
        const categoryName =sessionStorage.getItem('catgoryName');
        const newForm = {
            'name':input,
            'categoryID':categoryID,
            'categoryName':categoryName,
            'isNull':1,
            'id':uuidv4()
        }
        await axios.post("http://localhost:3004/category",newForm);
        dispatch({type : "ADD_USER",payload:newForm})
    }

    const ButonProperty = () =>
    <Icon iconName='CheckMark' />;
    const AllApps = () =>
    <Icon iconName='List' />;
    return (
        <div>
                <TodoDataConsumer>
                {
                    value => {
                        return(
                            <Container fixed>
                                <div className ="MainComponentScroll">
                            {
                                sessionStorage.getItem('catgoryID')!== "menu" && sessionStorage.getItem('catgoryID')!== "fav"?
                                <div className="addTodo">
                                    <div className='TodoName'>{t('mainComponent.addCategories')}</div>
                                    <div className='ListLogo'>
                                        <div className='AllAppsLogo'>
                                            <AllApps />
                                        </div>
                                        {/* eslint-disable-next-line */}
                                        <a><input className='TodoInput' type="text" onChange={change} /></a>
                                        <div  onClick={add.bind(this,value.dispatch,value)} >
                                            <button  className='checkButtons'>
                                                 <ButonProperty />
                                            </button >
                                        </div>
                                    </div>
                                </div>
                                :null
                            } 
                                    <div className='TodoName2'>
                                    <button  className='BookMarksButton'>
                                            <Bookmarks />
                                    </button >
                                        {sessionStorage.getItem('catgoryName')}
                                    </div>
                                    < TodoList />
                                </div>
                              </Container>
                            )
                    } 
                }
               </TodoDataConsumer>
           </div>
        )
    }
