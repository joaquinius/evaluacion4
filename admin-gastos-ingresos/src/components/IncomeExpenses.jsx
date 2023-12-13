import { useGlobalState } from "../context/GlobalState";

export function IncomeExpenses() {
  const { transactions } = useGlobalState();
  const amounts = transactions.map((transaction) => transaction.amount);

  const ingresos = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const gastos =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1;
  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Ingresos</h4>
        {ingresos}
      </div>
      <div className="flex justify-between my-2">
        <h4>Gastos</h4>
        {gastos}
      </div>
    </>
  );
}

export default IncomeExpenses;
