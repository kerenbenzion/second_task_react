
import './ExpenseItem.css'

function ExpenseItem(props) {
    const addToCart = props.addToCart
    const itemJson = { "title": props.title, "amount": props.amount, "url": props.url }
    return (
        <div className='expense-item'>
            <div><button onClick={() => addToCart(itemJson)}><img src={props.url} alt="" width="100" height="100" /></button></div>
            <div>
                <div className="expense-item__title"> {props.title}</div>
                <div className="expense-item__price"> {props.amount}$</div>
            </div>
        </div>

    );
}

export default ExpenseItem;