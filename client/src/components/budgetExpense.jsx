import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Divider, ListItem, ListItemText } from '@material-ui/core';
import EditExpense from '../components/EditExpense'



export default function BudgetExpense(props) {
  const {name, cost, payee, amount_paid, onDelete, onEdit, categoryId} = props;



  return(
    
    <div className="budget-expense">

      <p>{payee}{name}{amount_paid}</p>
      {/* <p>Amount paid:{cost}</p> */}
      <div className="budget-icons">
        <EditExpense onEdit={onEdit} categoryId={categoryId}/>
        <DeleteIcon onClick={onDelete}/>
        <Divider/>
      </div>
   
    </div>
  )
}