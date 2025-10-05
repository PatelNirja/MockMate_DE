import React from 'react'
import { motion } from 'framer-motion'
import { Mic, Bot, BarChart3, Shield } from 'lucide-react'

export default function Landing() {
  return (
    <div className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
      <motion.section className="card" style={{ textAlign: 'center', padding: 32 }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}>
        <h1 className="text-2xl sm:text-3xl font-extrabold">MockMate – Your AI Interview & Placement Assistant</h1>
        <p className="text-slate-500 dark:text-slate-400">Prepare for placements with mock interviews, instant AI feedback, and performance insights</p>
        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          <a href="#/signup" className="btn">Get Started</a>
          <a href="#/login" className="btn btn-outline">Sign In</a>
        </div>
      </motion.section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        {[{ title: 'Interview Simulation', desc: 'HR, Technical, Behavioral question sets', icon: <Mic size={20} /> },
          { title: 'AI Feedback', desc: 'Insights on clarity, relevance, confidence', icon: <Bot size={20} /> },
          { title: 'Reports', desc: 'Detailed analytics and exports', icon: <BarChart3 size={20} /> },
          { title: 'Role-based Access', desc: 'Candidate and Recruiter dashboards', icon: <Shield size={20} /> }].map((f) => (
          <motion.article key={f.title} className="card p-5" whileHover={{ y: -4, scale: 1.01 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <div className="flex items-center gap-2">
              <div>{f.icon}</div>
              <h3 className="m-0 font-semibold">{f.title}</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mt-1">{f.desc}</p>
          </motion.article>
        ))}
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        {[{ quote: 'MockMate helped me land my first internship!', name: 'Priya, CS Undergrad' }, { quote: 'Great for campus placements—interviews felt familiar.', name: 'Arjun, ECE' }].map((t, i) => (
          <motion.article key={i} className="card p-5" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-slate-700 dark:text-slate-300">“{t.quote}”</p>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">{t.name}</div>
          </motion.article>
        ))}
      </section>
    </div>
  )
}


