import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrency from './hooks/useCurrency';


function App() {

  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currency = useCurrency(from);
  const options = Object.keys(currency);

  const convert = () => {
    setConvertedAmount(amount * currency[to])
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }


  return (
    <>
      <div className='grid h-screen place-content-center w-2/3 m-auto'>
        <form onSubmit={e => {
          e.preventDefault();
          convert()
        }}>
          <div className='flex flex-col items-center p-4 bg-slate-200 rounded-xl'>
            <InputBox
              label="From"
              options={options}
              selectCurrency={from}
              amount={amount}
              onAmountChange={amount => setAmount(amount)}
              onCurrencyChange={currency => setFrom(currency)}
            />
            <button onClick={swap} className='p-1 bg-blue-600 rounded-lg w-20 -m-2 z-10' type="button">Swap</button>
            <InputBox
              label="To"
              options={options}
              selectCurrency={to}
              amount={convertedAmount}
              onCurrencyChange={currency => setTo(currency)}
            />
            <button type='submit' className='bg-blue-600 w-full mt-2 p-3 rounded-lg'>Convert</button>
          </div>
        </form>
      </div >
    </>
  )
}

export default App
