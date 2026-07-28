export default function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <div
      className={`${className} rounded-full border border-current flex items-center justify-center font-serif text-[0.9em] leading-none`}
      aria-hidden="true"
    >
      S
    </div>
  )
}
