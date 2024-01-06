import { getEmojisCount } from "@/server/get-emojis-count"
import { Suspense } from "react"

interface CountDisplayProps {
  count?: number
}

function CountDisplay({ count }: CountDisplayProps) {
  return (
    <p className="text-gray-500 mb-12 text-base animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
     预计春节上线，敬请期待
    </p>
  )
}

async function AsyncEmojiCount() {
  // const count = await getEmojisCount()
  let count = 0
  setTimeout(() => {
    count = 100
  }, 1000)
  return <CountDisplay count={count} />
}

export function EmojiCount() {
  return (
    <Suspense fallback={<CountDisplay />}>
      <AsyncEmojiCount />
    </Suspense>
  )
}
