const usps = [
  {
    icon: '🏆',
    title: 'Licensed Brokers Only',
    desc: 'Every broker is FMCA-regulated and NZ-based',
  },
  {
    icon: '🆓',
    title: 'Free Quote Service',
    desc: 'No cost, no obligation — ever',
  },
  {
    icon: '🇳🇿',
    title: 'NZ D&O Specialists',
    desc: 'Local expertise in directors liability',
  },
  {
    icon: '⚡',
    title: '24hr Response',
    desc: 'Fast quotes from multiple insurers',
  },
]

export default function USPBar() {
  return (
    <div className="bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((u) => (
            <div key={u.title} className="flex items-center gap-4">
              <span className="text-3xl flex-shrink-0">{u.icon}</span>
              <div>
                <p className="text-white font-extrabold text-sm leading-tight">{u.title}</p>
                <p className="text-orange-100 text-xs mt-0.5">{u.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
