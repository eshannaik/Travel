import React from 'react';
import {Navigation} from 'react-minimal-side-navigation'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import { useNavigate, useLocation } from "react-router-dom";
// import './sidebar.css';
// import Icon from "awesome-react-icons";

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
                            // elemBefore: () => <Icon name="plus-square" />
                        },
                        {
                            title: 'Remove a log',
                            itemId: '/main/remove',
                            // elemBefore: () => <Icon name="minus-square"/>
                        },
                        {
                            title: 'View a log',
                            itemId: '/main/view',
                            // elemBefore: () => <Icon name="eye"/>
                        },
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
                                // elemBefore: () => <Icon name="home"/>
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