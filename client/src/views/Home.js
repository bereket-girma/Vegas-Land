import React from "react"
import Highlights from "../features/highlights/Highlights"

import { Navbar } from "../ui/Navbar"
import { Footer } from "../ui/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>

      <Highlights></Highlights>
      <Footer />
    </div>
  )
}
