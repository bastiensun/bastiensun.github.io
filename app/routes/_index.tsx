import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [{ title: "Bastien Sun" }]
}

export default function Index() {
  return (
    <div className="mx-auto max-w-screen-xl p-16 flex flex-col md:flex-row items-center justify-center gap-8">
      <a href="https://www.instagram.com/car_hg"><img 
        src="https://em-content.zobj.net/source/microsoft-teams/400/pig-nose_1f43d.png" 
        className="w-32 h-auto object-contain" 
      /></a>
    
      <p className="text-left">
        Je regardrai tous<br/>
        les episodes avec<br/>
        <a href="https://www.instagram.com/car_hg">toi</a>.
      </p>
    
      <p className="font-serif">
        bastiensun.com
      </p>
    </div>
  )
}
