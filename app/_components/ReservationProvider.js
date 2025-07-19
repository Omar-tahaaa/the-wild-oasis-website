"use client";

import { createContext, useContext, useState } from "react";

const initialState = { from: undefined, to: undefined };

const reservationContext = createContext(initialState);

export default function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <reservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </reservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(reservationContext);

  if (context === undefined) return;

  return context;
}
