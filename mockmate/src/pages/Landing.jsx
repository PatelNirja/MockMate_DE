import React from 'react'
import { motion } from 'framer-motion'
import { Mic, Bot, BarChart3, Shield, GraduationCap } from 'lucide-react'

export default function Landing() {
  return (
    <div className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
      <motion.section className="relative card overflow-hidden" style={{ textAlign: 'left', padding: 32 }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}>
        <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(37,99,235,0.35), transparent 60%)' }} />
        <div className="absolute -left-16 bottom-0 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle at 70% 70%, rgba(37,99,235,0.25), transparent 60%)' }} />
        <div className="grid md:grid-cols-2 gap-6 items-center relative">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">MockMate – Your AI Interview & Placement Assistant</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Prepare for placements with mock interviews, AI feedback, and performance insights</p>
            <div className="flex gap-3 mt-4 flex-wrap">
              <a href="#/signup" className="btn">Get Started</a>
              <a href="#/login" className="btn btn-outline">Sign In</a>
            </div>
          </div>
          <motion.div className="hidden md:flex justify-center" initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .5, delay: .1 }}>
            <div className="card p-6 flex items-center justify-center shadow-soft rounded-xl" style={{ background: 'linear-gradient(180deg, rgba(37,99,235,0.08), transparent 40%)' }}>
              <GraduationCap size={72} className="text-primary" />
            </div>
          </motion.div>
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
          <motion.article key={i} className="card p-5 flex gap-3" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary">{t.name[0]}</div>
            <div>
              <p className="text-slate-700 dark:text-slate-300">“{t.quote}”</p>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">{t.name}</div>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  )
}


