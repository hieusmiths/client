import React, { Component } from 'react';


class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        id: this.props.dataUpdate.id,
        fName: props.dataUpdate.name,
        fTel: this.props.dataUpdate.tel,
        fPermission : this.props.dataUpdate.permission,
        }
        // console.log(x.name);
    }
    
    
    isChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value,
        });
    }
    // Nếu mà không chỉnh sửa gì hết thì sate sẽ rỗng do vậy cần khai báo mặc định nó sẽ là đầu nó nhận vô.
    getData = () =>{
        var data = {};
        data.id= this.state.id;
        data.name = this.state.fName;
        data.tel = this.state.fTel;
        data.permission = this.state.fPermission;
        // data.id = this.state.fName;
        this.props.getDataEdit(data);
        this.props.getDataEdit(data);
        this.props.displayFormEdit();
    }
    render() {
        var x  = this.props.dataUpdate;
        return (
            <div className="col">
                <form>
                    <div className="card text-white bg-warning mb-3" >
                        <div className="card-header">Thêm Mới Nhân Sự</div>
                        <div className="card-body text-info">
                        <label htmlFor="true" className="font-italic">Full Name</label>
                        <input onChange = { (e) => this.isChange(e) } defaultValue = { x.name } className="form-control" name="fName" placeholder="Nhập Full Name" />
                        <label htmlFor="true" className="font-italic">Full SDT</label>
                        <input onChange = { (e) => this.isChange(e) } defaultValue = { x.tel } className="form-control" name="fTel" placeholder="Nhập SDT" />
                        <label htmlFor="true" className="font-italic">Chọn authority</label>
                        <select onChange = { (e) => this.isChange(e) } defaultValue= { x.permission } className="form-control form-control-sm custom-select" name="fPermission" id="true" required>
                            <option value={1}>Admin</option>
                            <option value={2}>Moder</option>
                            <option value={3}>Normal</option>
                        </select>
                        </div>
                        
                        <div onClick= {  () => this.getData() }  className="card-footer bg-transparent border-dark text-center">
                            <input type="reset" className="btn btn-info" value="Update"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;