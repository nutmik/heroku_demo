import React, { Component } from 'react'
import AdminFooter from './admin.footer'
import AdminHeader from './admin.header'
import AdminSidebar from './admin.manu'

export default class AdminHOC extends Component {
    render() {
        return (
            <div>
                <AdminHeader/>
                <AdminSidebar/> 
                {this.props.children}
                <AdminFooter/>
            </div>
        )
    }
}
