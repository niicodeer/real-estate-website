
export default function TextBadge({text=""}) {
  return (
    <span className={`pl-3 pr-3 py-2 rounded-3xl bg-gray-10 border border-gray-15 text-white text-sm 2xl:text-base font-medium relative`}>
      {text}
    </span>
  )
}
