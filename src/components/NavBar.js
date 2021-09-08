import React from 'react'
import Button from './Button'
import { Icon } from '@fluentui/react/lib/Icon'
import '../css/NavBar.css'
import {useTranslation} from "react-i18next";
import Profile from './Profile'
import TodoDataConsumer from "../contextApi/TodoDataContext";

export default function NavBar() {
    // eslint-disable-next-line
    const [t,i18n] = useTranslation('common');
    const Search = () =>
    <Icon iconName='Search' />;
    const Contact = () =>
    <Icon iconName='Contact' />;
    function theme(dispatch,e) {
        dispatch({type : "CHANGE_COLOR",payload:"123"});
    }
      return (
          <div>
                <TodoDataConsumer>
                {
                    value => {
                            return (
                  <div className='navBar'>
                      <div className='NavBarChild leftChild'>
                          <Button className='buton cancelButton'buttonName='Cancel'/>
                          <h1 className='toDoText'>To Do</h1>
                      </div>
                      <div className='NavBarChild divFromFind'>
                          <div id="SearchButton"><Search /></div>
                          <input id="find" type="text" placeholder="find" />
                      </div>
                      <div className='NavBarChild rightChild'>
                            <Profile/>
                          <button className='button' onClick={theme.bind(this,value.dispatch)}> 
                              <Button  buttonName='Contrast' />
                          </button>
                            <div id='contactButon'>
                                <Contact />
                            </div>
                      </div>                      
                  </div>
                )}}
                 </TodoDataConsumer>
            </div>
      )
}