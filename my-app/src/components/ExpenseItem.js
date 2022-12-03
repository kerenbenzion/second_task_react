
import './ExpenseItem.css'

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <div><button><img src={props.url} width="100" height="100" /></button></div>
            <div>
                <div className="expense-item__title"> {props.title}</div>
                <div className="expense-item__price"> {props.amount}</div>
            </div>

        </div>
    );
}

export default ExpenseItem;