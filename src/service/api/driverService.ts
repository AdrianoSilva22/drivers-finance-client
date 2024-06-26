import { Driver } from "@/models/driver";
import { apiService } from "./apiService";

export const driverService = () => {

    const url = "/driver"

    const registerDriver = (driver: Driver) => {
        return apiService.post(`${url}/save`, driver)
    }

    const logInDriver = (driver: Driver) => {
        return apiService.post(`${url}/login `, driver)
    }

    const getTotalBalanceDriver = (cpf: string) => {
        return apiService.get(`${url}/getTotalBalance/${cpf}`)
    }

    const updateDriver = (cpf: string, driver: Driver) => {
        return apiService.put(`${url}/update ${cpf}`, driver)
    }
    
    const getTotalDriver = () => {
        return apiService.get(`${url}/getTotal`)
    }

    return {
        registerDriver,
        logInDriver,
        getTotalBalanceDriver,
        updateDriver,
        getTotalDriver
    }
}

