import { Income } from "@/models/income"
import { apiService } from "./api/apiService"


export const incomeService = () => {

    const url = "/income"

    const registerIncome = (income: Income) => {
        apiService.post(`${url}/save`, income)
    }

    const getTotalIncomeAmount = (cpf: string) => {
        apiService.get(`${url}/getTotalIncomeAmount/${cpf}`)
    }

    const getbyIdIncome = (id: number) => {
        apiService.get(`${url}/get/${id}`)
    }

    const updateIncome = (id: number, income: Income) => {
        return apiService.put(`${url}/update/${id}`, income)
    }

    const deleteIncome = (id: number) => {
        return apiService.put(`${url}/delete/${id}`)
    }

    return {
        registerIncome,
        getTotalIncomeAmount,
        getbyIdIncome,
        updateIncome,
        deleteIncome
    }
}