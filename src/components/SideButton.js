import React from 'react'
import '../css/SideBar.css'
import { Icon } from '@fluentui/react/lib/Icon'
    
export default function SideButton(props) {
  
    const {logoName,buttonName} = props;
    const ButonProperty = () =>
    <Icon iconName={logoName} />;
        return (
            <div>
                <div className='sideFav'>
                    <div className='sideLogo'>
                        <ButonProperty />
                    </div>
                    {/*eslint-disable-next-line  */}
                    <a href="">{buttonName}</a>
                </div>
            </div>
        )
}
