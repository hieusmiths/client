import React, { Component } from 'react';
import './../App.css';
import Jumbotron from './Header/Jumbotron';
import Search from './Search';
import Table from './Table';
import CardAddUser from './CardAddUser';
import DataUser  from './Data.json';
const uuidv1 = require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm : false,
      dataUser : [],
      textForSearch : '',
      displayFormEdit : false,
    }
  }
  
  
  componentWillMount() {
    if(localStorage.getItem("User") === 0 ){
      localStorage.setItem("User",JSON.stringify(DataUser));
    }
    else{
      var dataLocalstorage = JSON.parse(localStorage.getItem("User"));
      this.setState({
        dataUser: dataLocalstorage,
      })
    }
  }
  

  changeStatus = () =>
  {
    this.setState({
      displayForm: !this.state.displayForm,
    })
  }

  displayFormEdit = () =>{
    this.setState({
      displayFormEdit : !this.state.displayFormEdit,
    });
  }

  // getDataEdit = (data) =>{
  //   console.log(data.id);
  //   this.state.dataUser.forEach( (value, key) => {
  //     if(value.id === data.id ){
  //       value.name = data.name;
  //       value.tel = data.tel
  //       value.permission = data.permission
  //     }
  //   })
  // }

  getDataEdit = (data) =>{
      console.log(data.id);
      this.state.dataUser.find( (value) => {
        if(value.id === data.id ){
          value.name = data.name;
          value.tel = data.tel
          value.permission = data.permission
        }
      return true;
      }
      )
      localStorage.setItem("User", JSON.stringify(this.state.dataUser));
    }
    // ở forEach key là index nhé.
    // deleteById = (byId) => {
    //   this.state.dataUser.find((value) =>{
    //     if(value.id === byId ){
          
    //       this.state.dataUser.splice(3, 1);
    //     }
        
    //     // ở find này mà return về fasle là nó out ra luôn đó nhé.
    //   })
    // } 

    // ở delete có thể dùng hàm fillter sẽ trả về nếu thỏa 
    // 1, 2, 3 xóa 2  array.filler(item => item != 2) 
    deleteById = (byId) => {
      var tempData = this.state.dataUser;
      tempData = tempData.filter( (item) => item.id !== byId);
      console.log(tempData);
      this.setState({
        dataUser: tempData,
      });
      localStorage.setItem("User", JSON.stringify(tempData));
        // ở find này mà return về fasle là nó out ra luôn đó nhé.
    } 
  conectForSearch = (dl)=>{
    
    this.setState({
      textForSearch : dl,
    })
    console.log(this.state.textForSearch);
  }
  getNewUser2 = ( name, tel, permission ) => {
    var item = {};
    item.id= uuidv1();
    item.name= name;
    item.tel= tel;
    item.permission= permission; 
    var items = this.state.dataUser;
    items.push(item);
    this.setState({
      dataUser:items,
    });
    localStorage.setItem("User", JSON.stringify(items));

  }
  getNewUser = ( dl ) => {
    console.log( dl.name );
  }

  editUser = (item) => {
    this.setState({
      dataUpdate: item
    });
    

  }

  render() {
    localStorage.setItem("User", JSON.stringify(this.state.dataUser));
    console.log(this.state.dataUser);
    var result = [];
    this.state.dataUser.forEach( (item) => {
      if(item.name.indexOf(this.state.textForSearch) !== -1 ){
        result.push(item);
      }
    }
    )
    
    return (
      <div className="container-fluid">
          <Jumbotron />
          <Search 
          search = { (dl) => { this.conectForSearch(dl) }} 
          dataUpdate = { this.state.dataUpdate }
          changeStatus = { () => this.changeStatus() }
          displayFormEditStatus = { this.state.displayFormEdit }  
          displayFormEdit = { () => this.displayFormEdit() }
          getDataEdit = { (data) => this.getDataEdit(data)}
          displayForm = { this.state.displayForm }
          />
          <section>
            <div className="container">
              <div className="row">
                <div className="col">
                  <Table 
                  dataProps = { result }
                  editUser = { (item) => this.editUser(item) }
                  displayFormEdit = { () => this.displayFormEdit() }
                  deleteById = { (byId) =>  this.deleteById(byId) }
                  />
                </div>
                  <CardAddUser getNewUser2 = { ( name, tel, permission ) => this.getNewUser2( name, tel, permission )} getNewUser = { (dl) => this.getNewUser( dl ) } displayForm = { this.state.displayForm }  />
                </div>
              </div>
            
          </section>

      </div>
    );
  }
}

export default App;
