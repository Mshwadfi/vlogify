import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div>
        <div className=" flex items-center justify-between py-6 px-16 shadow-sm">
            <div className="flex items-center justify-start gap-2 hover:text-teal-500">
                <Image src={'https://static.thenounproject.com/png/1087190-200.png'} alt="logo-image" width={28} height={20}/>
                <h1 className="cursor-pointer">VlogiFy</h1>
            </div>
            <Link href={'/#pricing'} className="hover:text-teal-500"> Pricing </Link>
            {/* <h2 className="cursor-pointer hover:text-teal-500">Sign In</h2> */}
            <div className="flex lg:justify-end lg:flex-1">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <Link href="/dashboard">Upload a Video</Link>
            <UserButton />
          </div>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <Link href="/sign-in">Sign In</Link>
          </SignInButton>
        </SignedOut>
      </div>
        </div>
    </div>
  )
}

export default Header
