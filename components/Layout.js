import { Analytics } from "@vercel/analytics/react"

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Analytics/>
    </>
  )
}