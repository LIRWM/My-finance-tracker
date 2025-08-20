import { useState } from "react";

type Transaction = {
  id: number;
  description: string;
  amount: number;
  type: "income" | "expense";
};

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<"income" | "expense">("income");

  const addTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction: Transaction = {
      id: Date.now(), 
      description,
      amount,
      type,
    };

    setTransactions([newTransaction, ...transactions]);
    setDescription("");
    setAmount(0);
    setType("income");
  };


}
export default App;