import React from 'react';
import {Navigation} from 'react-minimal-side-navigation'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import { useNavigate, useLocation } from "react-router-dom";
// import './sidebar.css';
// import { IconName } from "react-icons/fa";
import 'font-awesome/css/font-awesome.min.css';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <React.Fragment>
            <div>
                <Navigation 
                    className = "border" 
                    activeItemId={location.pathname}
                    onSelect = {({itemId}) => {
                        navigate(itemId)
                    }}
                    items = {[
                        {
                            title: 'Add a log',
                            itemId: '/main/add',
                            elemBefore: () => <i className='fa fa-plus fa-solid' />
                        },
                        {
                            title: 'Remove a log',
                            itemId: '/main/remove',
                            elemBefore: () => <i className='fa fa-minus fa-solid' />
                        },
                        {
                            title: 'View a log',
                            itemId: '/main/view',
                            elemBefore: () => <i className='fa fa-eye fa-solid' />
                        },
                        // {
                        //     title: 'Update a log',
                        //     itemId: '/main/update',
                        //     // elemBefore: () => <Icon name="eye"/>
                        // },
                    ]}
                />

                <div >
                    <Navigation
                        className='absolute bottom-0 w-full my-8'
                        activeItemId={location.pathname}
                        items={[
                            {
                                title: 'Home',
                                itemId: "/",
                                elemBefore: () => <i className='fa fa-home fa-solid' />
                            }
                        ]}
                        onSelect={({itemId}) =>{
                            navigate(itemId);
                        }}
                    />   
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar