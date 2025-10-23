interface ServiceCardProps {
  title: string
  description: string
  variant?: "default" | "white"
}

export default function ServiceCard({ title, description, variant = "default" }: ServiceCardProps) {
  const hoverClass = variant === "white" ? "hover:bg-white" : "hover:bg-gray-50"

  return (
    <div
      className={`border-l-4 border-red-600 pl-5 pr-5 py-5 ${hoverClass} transition-all hover:shadow-md rounded-lg shadow-sm bg-white`}
    >
      <h3 className="text-black font-bold text-xl mb-3 leading-tight">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed">{description}</p>
    </div>
  )
}
