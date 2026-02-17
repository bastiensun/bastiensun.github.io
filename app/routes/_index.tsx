import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [{ title: "Bastien Sun" }]
}

export default function Index() {
  return (
    <div className="mx-auto max-w-screen-xl p-16">
      <p className="text-sm">Je regardrai tous<br/>les episodes avec<br/><a href="https://www.instagram.com/car_hg">toi</a>.</p>
      <br/>
      <p className="text-sm">bastiensun.com</p>
    </div>
  )
}
