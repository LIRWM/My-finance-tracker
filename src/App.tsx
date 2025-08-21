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

return (
  <div style={{ padding: "20px", fontFamily: "Arial" }}>
    <h1>Мой финансовый трекер</h1>

    <form onSubmit={addTransaction} style={{ marginBottom: "20px" }}>

    </form>
    
    <h2>Транзакции</h2>
    <ul>
      {transactions.map((t) => (
        <li key={t.id}>
          {t.description} - {t.amount} ₽ ({t.type === "income" ? "доход" : "расход"})
        </li>
      ))}
    </ul>
  </div>
  );
}
export default App;