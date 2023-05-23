import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
  const {gioHang,xoaGioHang,tangGiamSL} = this.props;//Lay du lieu tu gio hang
    return (
    <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
        <div className="modal-content" style={{minWidth:"800px",marginLeft:"-200px"}}>
          <div className="modal-header">
            <h5 className="modal-title" id="modalTitleId">Giỏ hàng</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <table className="table">
            <thead>
              <tr>
                <td>Mã SP</td>
                <td>Hình ảnh</td>
                <td>Tên SP</td>
                <td>Số Lượng</td>
                <td>Đơn Giá</td>
                <td>Thành Tiền</td>
                <td>Chức năng</td>
              </tr>
            </thead>
            <tbody>
              {gioHang.map((spGH,index) =>
                {
                  return (<tr key={index}>
                    <td>{spGH.id}</td>
                    <td><img src={spGH.image} width={50} height={75}></img></td>
                    <td>{spGH.name}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => tangGiamSL(spGH.id,true)}>+</button>
                        {spGH.quantity}
                      <button className="btn btn-primary" onClick={() => tangGiamSL(spGH.id,false)}>-</button>
                    </td>
                    <td>{spGH.price} $</td>
                    <td>{(spGH.quantity * spGH.price).toLocaleString()} $</td>
                    <td><button onClick={() => xoaGioHang(spGH.id)} className="btn btn-danger">Xóa</button></td>
                  </tr>)
                })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5"></td>
                <td>Tổng Tiền:</td>
                <td>{this.props.gioHang.reduce((tongTien,spGioHang,index)=>{
                  return tongTien += spGioHang.quantity * spGioHang.price
                },0).toLocaleString() 
                } $</td>
              </tr>
            </tfoot>
            </table>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
    
      )
  }
}
