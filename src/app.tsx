import "@fontsource-variable/inter";
import { Dashboard } from "./components/dashboard";
import { motion } from "motion/react";
import { TimerInternal } from "@/modules/timer/timer-inernal";

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex max-w-2xl flex-col">
        <TimerInternal />
        <Dashboard />
      </div>
    </motion.div>
  );
}
