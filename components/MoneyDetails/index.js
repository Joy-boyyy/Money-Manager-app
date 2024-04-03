import {Component} from 'react'
import './index.css'

class MoneyDetailsComponent extends Component {
  render() {
    const {incomeS, expenseS} = this.props
    const myBalance = incomeS - expenseS

    return (
      <div className="mainDivCl">
        <div className="boxSec BalanceGreen">
          <img
            className="imgCl"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
            alt="balance"
          />
          <div className="balanceCl">
            <p>Your Balance</p>
            <p data-testid="balanceAmount">Rs {myBalance}</p>
          </div>
        </div>

        <div className="boxSec incomeAqua">
          <img
            className="imgCl"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
            alt="income"
          />
          <div className="balanceCl">
            <p>Your Income</p>
            <p data-testid="incomeAmount">Rs {incomeS}</p>
          </div>
        </div>

        <div className="boxSec ExpensesPurple">
          <img
            className="imgCl"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
          <div className="balanceCl">
            <p>Your Expenses</p>
            <p data-testid="expensesAmount">Rs {expenseS}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetailsComponent
