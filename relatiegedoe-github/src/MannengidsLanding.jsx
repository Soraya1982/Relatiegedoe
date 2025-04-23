import { motion } from "framer-motion";

export default function MannengidsLanding() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <motion.h1
        className="text-4xl font-bold mb-4 max-w-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Leer vrouwen begrijpen alsof je een geheim boek in handen hebt.
      </motion.h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        De Mannengids van Georgina Rose: geen zweverig gedoe, gewoon praktische tips, hilarische inzichten en de sleutel tot een beter liefdesleven.
      </p>

      <div className="w-full max-w-md shadow-2xl mb-6 bg-white rounded-2xl p-6">
        <img src="/mannengids-cover.jpg" alt="Mannengids cover" className="rounded-2xl shadow-lg mb-4" />
        <ul className="text-left text-gray-700 list-disc list-inside space-y-2">
          <li>Snap waarom ze ineens stil is (hint: het is niet jij… of wel?).</li>
          <li>Leer hoe je écht luistert (zonder in slaap te vallen).</li>
          <li>Upgrade je seksleven door haar brein te verleiden.</li>
          <li>Word de man waar ze over opschept bij haar vriendinnen.</li>
        </ul>
      </div>

      <a
        href="https://www.relatiegedoe.nl/kopen"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-2xl shadow-md transition inline-flex items-center"
      >
        📖 Bestel de Mannengids
      </a>
    </div>
  );
}
