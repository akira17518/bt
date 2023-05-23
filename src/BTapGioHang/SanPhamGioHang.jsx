import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
  render() {
    const { sanPham, themGioHang } = this.props;
    return (
      <div className='container'>
        <div className="card text-dark">
          <h4 className="card-title text-center mt-3 fs-3">{sanPham.name}</h4>
          <img className="card-img-top" src={sanPham.image} alt={sanPham.image} />
          <p className='card-info fs-2 fs-bold text-center'>Price: {sanPham.price} $</p>
          <p className='card-info fs-5 fs-5'>Quantity: {sanPham.quantity}</p>
          <p className='card-info fs-5 fs-6'>Description: {sanPham.description}</p>
          <p className='card-info fs-5 fs-6'>Short-Description: {sanPham.shortDescription}</p>
          <div className="card-body text-center">
            <button className="btn btn-danger fs-6 " onClick={() => themGioHang(sanPham)}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    )
  }
}
