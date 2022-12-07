
import './ExpenseItem.css'
import ExpenseItemCart from './ExpenseItemCart'
function Cart(props) {
    const items = props.items
    const { removeFromCart } = { ...props }

    // let itemList = items.map((item, index) => {
    //     return <li className="listitem" key={index}>
    //         <ExpenseItem
    //         title={item.title}
    //         amount={item.amount}
    //         url={item.url}
    //     ></ExpenseItem>

    //     </li>
    // })
    let itemList = items.map((item, index) => {
        return <li className="listitem" key={index}>
            <ExpenseItemCart
                title={item.title}
                amount={item.amount}
                url={item.url}
                removeFromCart={removeFromCart}
            ></ExpenseItemCart>

        </li>
    })

    return (
        <div className="main">
            <div className="header_shop">
                <h2>Cart</h2>
            </div>
            <ul className="list_items">
                {itemList}
            </ul>
        </div >
    );
}

export default Cart;

