import React from 'react';
import Chart from "react-google-charts"


const Charts = (props) => {
  const expenses = props.categories.filter(transaction => transaction.totalAmount < 0)
  const incomes = props.categories.filter(transaction => transaction.totalAmount > 0)
  const expensesChartData = [['Expense', 'total']]
  for (let i = 0; i < expenses.length; i++) {
    expensesChartData.push([expenses[i]._id, Math.abs(expenses[i].totalAmount)])
  }

  const incomesChartData = [['Incomes', 'total']]
  for(let i = 0; i < incomes.length; i++) {
    incomesChartData.push([incomes[i]._id, Math.abs(incomes[i].totalAmount)])
  }

  return (
    <div className="chart">
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Charts...</div>}
        data={expensesChartData}
        options={{
          title: 'My Expenses',
          is3D: true,
        }}
        rootProps={{ 'data-testid': '2' }}
      />

      <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        data={incomesChartData}
        options={{
          title: 'My Incomes',
          sliceVisibilityThreshold: 0.2, // 20%
        }}
        rootProps={{ 'data-testid': '7' }}
      />
    </div>


  )
}

export default Charts;