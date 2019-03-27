import React, { Component } from 'react';

class TableDataUserRow extends Component {

    checkPermission = (permissionProp) => {
        if(permissionProp === 1 ){
            return "Admin";
        }
        else if(permissionProp === 2 ){
            return "Moder";
        }
        else{
            return "Dân Đen";
        }
    }
    checkPermissionWayTwo = () =>{
        if(this.props.permission === 1 ){
            return "Admin";
        }
        else if(this.props.permission === 2 ){
            return "Moder";
        }
        else{
            return "Dân Đen";
        }
    }
    edit = () =>
    {
        this.props.editUser();
        this.props.displayFormEdit();
    }
    deleteById = (id) =>{
        console.log(id);
    }
    render() {
        return (
            <tr>
                <th scope="row"> { this.props.stt + 1 }</th>
                <td>{ this.props.name }</td>
                <td>{ this.props.numberPhone }</td>
                <td> {  this.checkPermission(  this.props.permission  ) } 
                {/* ở trên là kiểu Parameter còn không thì kiểu thứ 2. */}
                {/* { this.checkPermissionWayTwo() } */}
                </td>
                <td>
                <div className="btn-group">
                    <div onClick = { () => this.edit() } className="btn btn-dark edit"> <i className="fa fa-edit" />Edit</div>
                    <div onClick ={ () => this.props.deleteById(this.props.id) }className="btn btn-warning delete"> <i />Delete</div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataUserRow;