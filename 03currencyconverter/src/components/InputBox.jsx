import { useState } from "react"

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  options = [],
  selectCurrency,
  amountDisable = false,
}) {

  return (
    <>
      <div className="flex p-5 bg-white rounded-lg gap-x-40 text-black">
        <div className="flex flex-col gap-2">
          <label className="text-gray-600">{label}</label>
          <input
            className="border border-black rounded-sm"
            type="number"
            value={amount}
            onChange={e => onAmountChange(e.target.value)}
            disabled={amountDisable}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Currency Type</label>
          <select
            className="border border-black rounded-sm"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange(e.target.value)}
          >
            {options.map(opt => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default InputBox