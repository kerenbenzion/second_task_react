
import './ExpenseItem.css'
import ExpenseItem from './ExpenseItem'
function Cart(props) {
    const items = props.items

    let itemList = items.map((item, index) => {
        return <li className="listitem" key={index}><ExpenseItem
            title={item.title}
            amount={item.amount}
            url={item.url}
        ></ExpenseItem></li>
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

