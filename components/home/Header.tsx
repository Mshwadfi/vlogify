import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div>
        <div className=" flex items-center justify-between py-6 px-16 shadow-sm">
            <div className="flex items-center justify-start gap-2">
                <Image src={'https://static.thenounproject.com/png/1087190-200.png'} alt="logo-image" width={28} height={20}/>
                <h1>VlogiFy</h1>
            </div>
            <Link href={'/#pricing'}> Pricing </Link>
            <h2>Sign In</h2>
        </div>
    </div>
  )
}

export default Header
