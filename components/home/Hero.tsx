import {  ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <div className="">
      <div className="lg:max-w-6xl mx-auto flex flex-col z-0 items-center justify-center gap-4 py-28 sm:pt-32 transition-all animate-in">
        <h1 className="font-bold text-6xl text-center">
        Turn your words into <span className="underline underline-offset-4 decoration-dashed decoration-purple-200">captivating</span> blog posts
        </h1>
        <p className="font-semibold text-gray-600">Convert your video or voice into a Blog Post in seconds with the power of AI!</p>
        <Button variant={"link"}>Get VlogiFy <ArrowRight className="animate-pulse"/></Button>
      </div>
    </div>
  )
}

export default Hero
