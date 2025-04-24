export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-indigo-100 via-white to-pink-100 overflow-hidden px-4"
    >
      {/* Abstract animated blob background */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] -z-10 opacity-30 animate-pulse">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#6366f1"
            d="M39.6,-67.9C51.4,-58.5,61.4,-51.3,66.3,-41.2C71.1,-31.2,70.8,-18.4,69.2,-6C67.6,6.3,64.7,18.5,59.3,30.3C53.8,42.2,45.7,53.8,34.8,60.8C23.9,67.8,11.9,70.3,0.2,69.9C-11.6,69.5,-23.1,66.2,-35.3,60.1C-47.6,54,-60.7,45.2,-66.6,33.3C-72.5,21.4,-71.3,6.5,-69.3,-8.2C-67.4,-22.9,-64.6,-37.4,-55.9,-47.7C-47.3,-58,-32.9,-64,-18.3,-70.1C-3.7,-76.2,11.1,-82.4,24.2,-78.5C37.4,-74.7,49,-60.8,39.6,-67.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Main text */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
  Hi, I'm <span className="bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text">NIKITA MARWAH</span>
</h1>
<h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-700">
  I craft clean, modern & dynamic web experiences.
</h2>
<p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
  I'm a Frontend Developer specializing in ReactJS. Passionate about turning ideas into interactive UIs with a focus on performance, accessibility, and aesthetics.
</p>


      {/* CTA */}
      <a
  href="#contact"
  className="mt-10 inline-block bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
>
  Let’s Connect
</a>

    </section>
  );
}
