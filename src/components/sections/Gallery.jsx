import { motion } from "framer-motion";

const gallery = [
  {
    title: "Boxing Gym",
    image:
      "https://images.pexels.com/photos/31403621/pexels-photo-31403621.jpeg",
  },
  {
    title: "Combat Athlete",
    image:
      "https://images.pexels.com/photos/5424664/pexels-photo-5424664.jpeg",
  },
  {
    title: "Fight Preparation",
    image:
      "https://images.pexels.com/photos/8611378/pexels-photo-8611378.jpeg",
  },
  {
    title: "Heavy Bag Training",
    image:
      "https://images.pexels.com/photos/35045523/pexels-photo-35045523.jpeg",
  },
  {
    title: "Championship Night",
    image:
      "https://images.pexels.com/photos/598687/pexels-photo-598687.jpeg",
  },
  {
    title: "Muay Thai Training",
    image:
      "https://images.pexels.com/photos/8612586/pexels-photo-8612586.jpeg",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative bg-[#050505] py-32 px-6 text-white overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[6px] text-red-500"
        >
          Gallery
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-5xl font-black"
        >
          Building a Stronger Community
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-3xl text-lg leading-8 text-gray-400"
        >
          Moments from training, filmmaking, community outreach and the
          people helping shape the future of MMA4Change.
        </motion.p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-red-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-6">

                <motion.h3
                  whileHover={{ x: 4 }}
                  className="text-2xl font-bold"
                >
                  {item.title}
                </motion.h3>

                <p className="mt-2 text-sm text-gray-300">
                  MMA4Change Initiative
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}