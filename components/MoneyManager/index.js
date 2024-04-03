import {Component} from 'react'
import {v4 as uuid8} from 'uuid'
import './index.css'
import MoneyDetailsComponent from '../MoneyDetails'
import TransactionItemComponent from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    incomeS: 0,
    expenseS: 0,
    titleState: '',
    amountState: '',
    selectedValue: 'INCOME',
    impArr: [],
  }

  delFun = id => {
    const {impArr} = this.state
    const newArr = impArr.filter(mapProp => mapProp.id !== id)

    let incomeS = 0
    let expenseS = 0

    newArr.forEach(transaction => {
      if (transaction.displayText === 'Income') {
        incomeS += parseInt(transaction.amount)
      } else {
        expenseS += parseInt(transaction.amount)
      }
    })

    this.setState({
      impArr: newArr,
      incomeS,
      expenseS,
    })
  }

  formFun = event => {
    event.preventDefault()
    const {titleState, amountState, selectedValue} = this.state

    if (selectedValue === 'INCOME') {
      this.setState({incomeS: amountState})
    } else {
      this.setState(prevArg => ({
        expenseS: parseInt(prevArg.expenseS) + parseInt(amountState),
      }))
    }

    const newObj = {
      id: uuid8(),
      title: titleState,
      amount: amountState,
      displayText: selectedValue[0] + selectedValue.slice(1).toLowerCase(),
    }
    this.setState(prevArg => ({
      impArr: [...prevArg.impArr, newObj],
      titleState: '',
      amountState: '',
    }))
  }

  selectFun = event => {
    this.setState({selectedValue: event.target.value})
  }

  titleFun = event => {
    this.setState({titleState: event.target.value})
  }

  amountFun = event => {
    this.setState({amountState: event.target.value})
  }

  render() {
    const {incomeS, expenseS, impArr, amountState, titleState} = this.state
    return (
      <div className="mainDiv">
        <div className="headerSec">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your{' '}
            <span className="spanMoneyManager">Money Manager</span>
          </p>
        </div>

        <MoneyDetailsComponent incomeS={incomeS} expenseS={expenseS} />

        <div className="addDiv">
          <div className="addSection">
            <h4>Add Transaction</h4>

            <form className="formCl" onSubmit={this.formFun}>
              <label className="spanCl" htmlFor="titleId">
                TITLE
              </label>
              <input
                className="inputCl"
                id="titleId"
                type="text"
                placeholder="TITLE"
                onChange={this.titleFun}
                value={titleState}
              />

              <label className="spanCl" htmlFor="amountId">
                AMOUNT
              </label>
              <input
                className="inputCl"
                id="amountId"
                type="text"
                placeholder="AMOUNT"
                onChange={this.amountFun}
                value={amountState}
              />

              <label className="spanCl" htmlFor="selectOpt">
                TYPE
              </label>
              <select
                id="selectOpt"
                className="selectCl"
                onChange={this.selectFun}
              >
                <option
                  value={transactionTypeOptions[0].optionId}
                  id={transactionTypeOptions[0].optionId}
                >
                  {transactionTypeOptions[0].displayText}
                </option>
                <option
                  value={transactionTypeOptions[1].optionId}
                  id={transactionTypeOptions[1].optionId}
                >
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <button type="submit">Add</button>
            </form>
          </div>

          <div className="tableCl">
            <h4>History</h4>

            <table className="table">
              <tr className="trCl">
                <th>
                  <p>Title</p>
                </th>
                <th>
                  <p>Amount</p>
                </th>
                <th>
                  <p>Type</p>
                </th>
              </tr>

              {impArr.map(mapProp => (
                <TransactionItemComponent
                  mapPropVar={mapProp}
                  key={mapProp.id}
                  delFun={this.delFun}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
