import Image from "next/image"
import banerImage from './../images/baner/data-analytics.jpeg'
export const Baner = () => {
  return (
    <div>
        <Image 
            src={banerImage}
            alt="Sata Fenitriniaina Data scientist"
        />
    </div>
  )
}
