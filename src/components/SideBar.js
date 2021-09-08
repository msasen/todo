import React from 'react'
import '../css/SideBar.css'
import { Icon } from '@fluentui/react/lib/Icon'
import CategoryList  from './CategoryList'
import AddTodo  from './CategoryAdd'
import {useTranslation} from "react-i18next";
import TodoDataConsumer from "../contextApi/TodoDataContext";

const sendID = async (dispatch,e) => {
    e.preventDefault();
    sessionStorage.setItem('catgoryID',"fav")
    sessionStorage.setItem('catgoryName',"Favori")
    dispatch({type : "SEND_CATEGORY_ID",payload:"fav"})
}

const menuClick = async (dispatch,e) => {
    e.preventDefault();
    sessionStorage.setItem('catgoryID',"menu")
    sessionStorage.setItem('catgoryName',"Main Page")
    dispatch({type : "SEND_CATEGORY_ID",payload:"fav"})
}

function click(e){
    e.preventDefault()
}

export default function SideBar() {
    // eslint-disable-next-line
    const {t, i18n} = useTranslation('common');    
    const ButonProperty = () =>
    <Icon iconName='Heart' />;
    const Home = () =>
    <Icon iconName='Home' />;
        return (
            <TodoDataConsumer>
            {
                value => {
                        return (
            <div className="sideScroll">
                <div className='Fav'>{t('sidebar.menu')}</div>
                <div className='sideFav' >
                    <div className='sideLogo'>
                        <Home />
                    </div>
                    {/*eslint-disable-next-line  */}
                    <a href="" onClick={menuClick.bind(this,value.dispatch)} >{t('sidebar.mainpage')} </a>
                </div>
                <div className='sideFav'  onClick = {sendID.bind(this,value.dispatch)}>
                    <div className='sideLogo'>
                        <ButonProperty />
                    </div>
                    {/*eslint-disable-next-line  */}
                    <a href="" onClick={click.bind(this)}>FAVORİ</a>
                </div>
                <div className='Fav'>{t('sidebar.addCategory')}</div>
                <AddTodo />
                <div className='Fav'>{t('sidebar.categories')}</div>
                <CategoryList />
            </div>
        )}}
        </ TodoDataConsumer >
        )
}