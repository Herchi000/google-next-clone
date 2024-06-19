"use client"
import { useEffect, useState } from 'react'

export default function CountryLookup() {
    const [country, setCountry] = useState('Argentina');



  return (
    <div>{country}</div>
  )
}
