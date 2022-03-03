import Link from "next/link";

const RegistrationBanner = () => {
  return(
    <div className="bg-banner-bg bg-center bg-cover py-28">
      <div className="text-white text-4xl pt-8 pb-4 px-12 lg:px-24 xl:px-48">
        Interested to be part of Zine?
      </div>
      <div className="text-white pb-8 text-2xl px-12 lg:px-24 xl:px-48">
      <Link href="https://www.instagram.com/zine.robotics/"><span className="underline">Follow</span></Link> our social media handles for updates regarding workshops and recruitment.
      </div>
    </div>
  )
}

export default RegistrationBanner;
