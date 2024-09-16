import {  ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <div className="">
      <div className="lg:max-w-6xl mx-auto flex flex-col z-0 items-center justify-center gap-4 py-28 sm:pt-32 transition-all animate-in">
        <h1 className="font-bold text-6xl text-center">
        Turn your words into <span className="underline underline-offset-4 decoration-dashed decoration-teal-300">captivating</span> blog posts
        </h1>
        <p className="font-semibold text-gray-600">Convert your video or voice into a Blog Post in seconds with the power of AI!</p>
        <Button 
  variant="link" 
  className="text-white text-xl py-6 px-8 rounded-3xl shadow-md bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:from-teal-600 hover:via-teal-500 hover:to-teal-400  hover:no-underline"
>
  Get VlogiFy <ArrowRight className="animate-pulse" />
</Button>

      </div>
    </div>
  )
}

export default Hero
