import { motion } from 'framer-motion'

const timeline = [
  {
    date: 'June 2023',
    title: 'We Met',
    description: 'Our eyes met and I knew there was something special about you.',
    icon: '👀',
  },
  {
    date: 'July 2023',
    title: 'First Hangout',
    description: 'That coffee date that lasted hours because we couldn\'t stop talking.',
    icon: '☕',
  },
  {
    date: 'August 2023',
    title: 'First Movie Night',
    description: 'You fell asleep on my shoulder during the movie and it was adorable.',
    icon: '🎬',
  },
  {
    date: 'Present',
    title: 'The Question',
    description: 'The moment I ask you to be my girlfriend.',
    icon: '❤️',
  },
]

export default function Story() {
  return (
    <div className="py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-[#BE185D] text-center mb-12 font-[serif]"
      >
        Our Story So Far
      </motion.h1>
      
      <div className="max-w-3xl mx-auto">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start`}
          >
            <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <div className="bg-white p-6 rounded-xl shadow-lg relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#BE185D] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#BE185D] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-4 text-sm text-gray-500">{item.date}</div>
              </div>
            </div>
            <div className="w-1 bg-[#BE185D] relative">
              <div className="absolute -top-1 -left-2 w-5 h-5 rounded-full bg-[#BE185D] border-4 border-white"></div>
            </div>
            <div className="flex-1"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}