import {  BrainIcon, LucideArrowRightToLine, PenIcon, VideoIcon } from "lucide-react"

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-28">
      <h1 className="text-teal-500 text-2xl font-bold">How It Works</h1>
      <p className="font-bold text-2xl">
        Easily repurpose your content into SEO focused blog posts
      </p>
      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-3">
            <VideoIcon className="w-24 h-24"/>
            <p>Upload Video</p>
        </div>
        <LucideArrowRightToLine className="text-teal-500"/>
        <div className="flex flex-col items-center justify-center gap-3">
            <BrainIcon className="w-24 h-24"/>
            <p>AI Magic 🪄</p>
        </div>
        <LucideArrowRightToLine className="text-teal-500"/>
        <div className="flex flex-col items-center justify-center gap-3">
            <PenIcon className="w-24 h-24"/>
            <p>Blog</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
