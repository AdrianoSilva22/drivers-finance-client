import { Expense } from "@/models/expense"
import { apiService } from "./api/apiService"

export const expenseService = () => {

    const url = '/expense'

    const registerExpense = (expense: Expense) => {
        apiService.post(`${url}/save`, expense)
    }

    const getTotalExpenseAmount = (cpf: string) => {
        apiService.get(`${url}/getTotalExpenseAmount/${cpf}`)
    }

    const getbyIdExpense = (id: number) => {
        apiService.get(`${url}/get/${id}`)
    }

    const updateExpense = (id: number, expense: Expense) => {
        return apiService.put(`${url}/update/${id}`, expense)
    }

    const deleteExpense = (id: number) => {
        return apiService.put(`${url}/delete/${id}`)
    }

    return {
        registerExpense,
        getTotalExpenseAmount,
        getbyIdExpense,
        updateExpense,
        deleteExpense
    }
}