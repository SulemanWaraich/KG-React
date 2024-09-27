import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  function onSubmit(e){
    e.preventDefault();

    const newExpense = {
      'id': Date.now(),
      'description': desc,
      'amount': parseFloat(amount), 
    }

    setData((prevData) => [...prevData, newExpense]);

    setDesc('');
    setAmount('');
  }

  const totalAmount = data.reduce((total, item) => total + item.amount, 0);

  return (
    <>
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold text-center mb-6">Expense Tracker</h1>

        <div class="bg-white shadow-md rounded-lg p-4 mb-6">
          <h2 class="text-xl font-semibold mb-4">Add Expense</h2>
          <form
            id="expenseForm"
            class="flex flex-col"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              id="description"
              placeholder="Description"
              class="border border-gray-300 rounded-lg p-2 mb-4"
              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <input
              type="number"
              id="amount"
              placeholder="Amount"
              class="border border-gray-300 rounded-lg p-2 mb-4"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button
              type="submit"
              class="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700"
            >
              Add Expense
            </button>
          </form>
        </div>

        <div class="bg-white shadow-md rounded-lg p-4">
          <h2 class="text-xl font-semibold mb-4">Expenses</h2>
          <ul id="expenseList" class="space-y-2">
            {data.map((item) => {
              return (
                <li>
                  Description: {item['description']}
                  <br />
                  Amount: {item['amount']}
                </li>
              );
            })}
          </ul>
          <div class="mt-4">
            <span class="font-bold">Total: </span>
            <span id="totalAmount" class="text-lg">
              {totalAmount}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
