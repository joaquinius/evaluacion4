import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export function TransactionForm() {
  const { addTransaction } = useGlobalState();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    setAmount(0);
    setDescription("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="ingresa una descripción "
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />
        <input
          type="number"
          step="0.01s"
          placeholder="00.00"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={amount}
        />
        <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg block mb-4 w-full transition duration-300 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50">
          <div className="animate-bounce hover:animate-none">Agregar transacción</div>
        </button>


      </form>
    </div>
  );
}

export default TransactionForm;
