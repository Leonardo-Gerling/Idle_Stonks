import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-row w-full mt-[50vh] transform -translate-y-1/2 justify-center text-9xl">
      <Link href={"/game"}>
        <button className="rounded-md">
          Play!
        </button>
      </Link>
    </div>
  )
}
