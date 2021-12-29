import React from 'react'
import '../style/order.scss'
import FavourtiteOrders from '../component/FavourtiteOrders'
import OrderList from '../component/OrderList'
const Order = () => {
    return (
        <div className="order_div">
            <FavourtiteOrders/>
            <OrderList/>
        </div>
    )
}

export default Order
