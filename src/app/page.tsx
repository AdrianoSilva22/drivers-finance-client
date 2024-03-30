'use client'

import { DriverCard } from "@/components/UsuarioCard";
import { Driver } from "@/models/driver";
import { driverService } from "@/service/api/driverService";
import '@/styles/usuarioCard.css';
import { useEffect, useState } from "react";


export default function Home() {
  const { getTotalDriver } = driverService()
  const [drivers, setDrivers] = useState<Driver[]>([])

  useEffect(() => {
    const loadDrivers = async () => {
      try {
        const response = await getTotalDriver()
        setDrivers(response.data)
      } catch (error) {
        console.log(error + "deu ruim ");

      }
    }
    loadDrivers()
  })

  const print = () => { console.log(drivers) }

  return (
    <div>
      {
        drivers.map(driver => {
          return <DriverCard key={Number(driver.cpf)} driver={driver} />
        })
      }
    </div>
  )
}
