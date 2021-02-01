import React from 'react';
import PropTypes from 'prop-types';
import SidebarItem from '../../components/SidebarItem/SidebarItem';
import Search from '../../components/Search';

function Sidebar({
    data, 
    content, 
    sidebarItemSchema, 
    updateContent, 
    enableSearch, 
    ...other}) {
   
    return (
        <div className="wfp--sidebar-content__container" {...other}>
            <div className="wfp--sidebar-item-content" >
                {
                   enableSearch &&  (
                   <div style={{padding:'1rem'}}>
                        <Search
                            placeHolderText="Type to search user"
                        />
                    </div>
                    )
                }
                
                {
                    data && data.map((user, key) => {
                        return (
                            <SidebarItem
                                key={key}
                                image={user[sidebarItemSchema.image]}
                                title={user[sidebarItemSchema.title]}
                                content={user[sidebarItemSchema.content]}
                                subContent={user[sidebarItemSchema.subContent]}
                                onClick={() => updateContent(user)}
                                noImage={sidebarItemSchema.image ? false : true}
                            />
                        )
                    })
                }
                
            </div>
            <div style={{width: '65%'}}>
                {content}
            </div>
        </div>
    )
}

export default Sidebar;
