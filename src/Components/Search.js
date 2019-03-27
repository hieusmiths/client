import React, { Component } from 'react';
import EditUser from './EditUser';




class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue : '',
        }
    }
    
    tao = () => {
        if( this.props.displayForm === true ){
            return "Xóa";
        }
        else{
            return "Thêm Mới";
        }
    }
    isChange = (event) =>{
        // console.log(event.target.value);
        this.setState({
            tempValue : event.target.value
        });
        this.props.search(event.target.value);
    }
    isSubmit = () => {
        console.log(this.state.tempValue);
        console.log(this.props.dataUpdate + " data bên áp qua search");
    }

    displayFormEdit = () =>{
        if(this.props.displayFormEditStatus)
        {
            return (
                <EditUser
                    displayFormEditStatus = { this.props.displayFormEditStatus }
                    displayFormEdit = { () => this.props.displayFormEdit() }
                    dataUpdate = { this.props.dataUpdate }
                    getDataEdit = { (data) => this.props.getDataEdit(data)}
                    />
            );
        }
    }
    render() {
        
        return (
            <section className="search">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="btn-group ">
                            <div onClick={ () => this.props.changeStatus() }  className="btn btn-outline-info">{ this.tao() }</div>
                            <div className="btn btn-outline-dark">  </div>
                        </div>
                        <div className="form-group d-flex justify-content-end">
                        <div className="btn-group ">
                            <input onChange= { (event)=>this.isChange(event)}  type="text" name="look"  className="form-control" placeholder="Tìm Kiếm..."  />
                            <button onClick = { (dl) => this.props.search(this.state.tempValue)  } type="submit" className="btn btn-info">Submit</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        this.displayFormEdit()
                    }

                    
                </div>
            </div>
            </section>
        );
    }
}

export default Search;