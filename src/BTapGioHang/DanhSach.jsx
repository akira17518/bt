import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang';

export default class DanhSach extends Component {
  render() {
    const { mangSanPham,themGioHang } = this.props;
    return (
      <div className="container">
        <div className="row">
          {mangSanPham.map((sanPham, index) => {
            return (
              <div className="col-12 col-lg-4 p-3" key={index}>
                <SanPhamGioHang themGioHang={themGioHang} sanPham={sanPham} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
