

function Expensedetails (props){
   
    return(
        <div className="expense-item h2">
            <h3>{props.title}</h3>
            <h3>{props.amount}</h3>


        </div>
    
    )
}

export default Expensedetails ;