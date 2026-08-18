import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }

   return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('data:image/jpeg;base64,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')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount) =>
                                setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                      
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={from}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert  {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
