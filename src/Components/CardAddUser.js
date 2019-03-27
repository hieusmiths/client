import React, { Component } from 'react';

class CardAddUser extends Component {
constructor(props) {
    super(props);
    this.state = {
        fSelect : 3,
        id: '',
        fName: '',
        fTel:'',
        fPermission:''
    }
}

isChange = (e) =>{
    const name  = e.target.name;
    const value  = e.target.value;
    this.setState({
        [name] : value,

    });
    // Package to Item đóng gói các trường thành 1.

}

pushAddInformationuser = () => {
    var item = {};
    item.id= this.state.id;
    item.name= this.state.fName;
    item.tel= this.state.fTel;
    item.permission= this.state.fPermission;
    this.setState({
        dulieunen: item
    });
    // console.log(this.state.dulieunen);
}

    
// this.state.fName,
// this.state.fTel,
// this.state.fPermission
displayForm = () =>{
    if(this.props.displayForm === true  )
    return (
        <div className="col">
        <form>
            <div className="card border-dark mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Thêm Mới Nhân Sự</div>
                <div className="card-body text-info">
                <label htmlFor="true" className="font-italic">Full Name</label>
                <input onChange= { (e) => { this.isChange(e) } }  className="form-control" name="fName" placeholder="Nhập Full Name" />
                <label htmlFor="true" className="font-italic">Full SDT</label>
                <input onChange= { (e) => { this.isChange(e) } } className="form-control" name="fTel" placeholder="Nhập SDT" />
                <label htmlFor="true" className="font-italic">Chọn authority</label>
                <select onChange= { (e) => { this.isChange(e) } } defaultValue ={ this.state.fSelect } className="form-control form-control-sm custom-select" name="fPermission" id="true" required>
                    <option value={1}>Admin</option>
                    <option value={2}>Moder</option>
                    <option value={3}>Normal</option>
                </select>
                </div>
                {/* <div onClick={ () => this.pushAddInformationuser( ) } className="card-footer bg-transparent border-dark text-center">
                    <button className="btn btn-info"> Add New</button>
                </div> */}
                {/* <div onClick={ (dl) => this.props.getNewUser(this.state.dulieunen) } className="card-footer bg-transparent border-dark text-center">
                    <button className="btn btn-info"> Add New</button>
                </div>
                */}
                <div onClick={ (name, tel, permission) => this.props.getNewUser2(this.state.fName, this.state.fTel, this.state.fPermission) } className="card-footer bg-transparent border-dark text-center">
                    <input type="reset" className="btn btn-info" value="Add New"/>
                </div> 
            </div>
        </form>
        </div>
    )
}
    
    
    render() {
        return (
            <div className="card-add-user">

                <div className="btn-group mb-4">
                </div>
                    { this.displayForm() }
                </div>

        );
    }
}

export default CardAddUser;