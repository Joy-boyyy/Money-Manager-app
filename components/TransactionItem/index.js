import './index.css'

function TransactionItemComponent(prop) {
  const {mapPropVar, delFun} = prop
  const {title, amount, displayText, id} = mapPropVar

  function btnClicked() {
    delFun(id)
  }

  return (
    <tr className="trCl">
      <td>
        <p>{title}</p>
      </td>
      <td>
        <p>{amount}</p>
      </td>
      <td>
        <p>{displayText}</p>
      </td>
      <td>
        {' '}
        <button
          type="button"
          className="btn"
          onClick={btnClicked}
          data-testid="delete"
        >
          <img
            className="delCl"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
            alt="delete"
          />
        </button>
      </td>
    </tr>
  )
}

export default TransactionItemComponent
