import { Driver } from "@/models/driver"
import "@/styles/usuarioCard.css"

interface DriverCardProps {
    driver: Driver
}

export function DriverCard({ driver }: DriverCardProps) {
    return (
        <div className="div-card-container">
            <ul>
                <li>Nome: {driver.name}</li>
                <li>Email: {driver.email}</li>
                <li>Cell: {driver.phone_number}</li>
                <li>Gênero: {driver.genero}</li>
            </ul>
        </div>
    )
}