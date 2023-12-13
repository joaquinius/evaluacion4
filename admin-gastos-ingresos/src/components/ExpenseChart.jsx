import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

export function ExpenseChart() {
  const { transactions } = useGlobalState();

  const ingresoTotal = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const gastoTotal =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

const porcentajeGastoTotal = Math.round((gastoTotal / ingresoTotal)*100)
const porcentajeIngresoTotal = 100 - porcentajeGastoTotal

  
  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Gastos", y: porcentajeGastoTotal },
        { x: "Ingresos", y: porcentajeIngresoTotal },
      ]}
      animate={{
        duration: 200,
      }}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
}

export default ExpenseChart;
