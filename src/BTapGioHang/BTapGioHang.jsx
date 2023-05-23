import React, { Component } from 'react'
import Modal from './Modal'
import DanhSach from './DanhSach'
import datashoes from '../../src/data/datashoes.json'

export default class BTGioHang extends Component {
  
  constructor(props)
  {
    super(props);
    this.state = {
      gioHang:[]
    }
  }

  //Lấy dữ liệu tại componentBTapGioHang
  themGioHang = (sanPhamClick) =>
  {
    let spGioHang = {
      id: sanPhamClick.id,
      name: sanPhamClick.name,
      price: sanPhamClick.price,
      quantity: 1,
      image: sanPhamClick.image,
    }
      //Kiem tra sp 
      var gioHangUpdate = [...this.state.gioHang];
      let index = gioHangUpdate.findIndex(sp => sp.id === spGioHang.id);
      if(index!==-1)
      {
        //Neu san pham da co thi sl + 1
        gioHangUpdate[index].quantity += 1
      }
      else
      {
        //K co thi san pham dc them vao 
        gioHangUpdate.push(spGioHang);
      }
      this.setState({
        gioHang:gioHangUpdate
      })

      //su kien xoa SP
      
    
   
  }
  xoaGioHang = (id) =>
      {
        // var gioHangUpdate = [...this.state.gioHang];
        // let index = gioHangUpdate.findIndex(sp => sp.id == id);
        // if(index!==-1)
        // {
        //   gioHangUpdate.splice(index,1);
        // }
        var gioHangUpdate =this.state.gioHang.filter(sp =>sp.id !== id);
        this.setState({
          gioHang:gioHangUpdate
        })
      }

  tangGiamSL = (id,tangGiam) => //set tangGiam == true thì nó sẽ tăng và ngược lại
  {
    var gioHangUpdate = [...this.state.gioHang];
    let index = gioHangUpdate.findIndex(sp => sp.id === id);
    if(tangGiam)
    {
      gioHangUpdate[index].quantity += 1;
    }
    else
    {
      if(gioHangUpdate[index].quantity >1)
      {
        gioHangUpdate[index].quantity -= 1;
      }
    }
    this.setState({
      gioHang:gioHangUpdate
    })
  }


  render() {
    let TongSl = this.state.gioHang.reduce((tsl,spGH,index) =>{
      return tsl += spGH.quantity;
    },0)
    return (
      <div className="container">
        <h3 className="text-center text-dark">Bài tập giỏ hàng</h3>
        <Modal tangGiamSL={this.tangGiamSL} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang}  />
        <div className="text-center" ><span className="text-danger" style={{cursor:'pointer',fontSize:"17px",fontWeight:"bold"}}  data-bs-toggle="modal" data-bs-target="#modalId">Giỏ hàng ({TongSl})</span></div>
        <DanhSach themGioHang={this.themGioHang} mangSanPham={datashoes} />
      </div>
    )
  }
}
