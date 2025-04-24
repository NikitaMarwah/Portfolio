const Resume = () => {
    return (
      <section id="resume" className="py-16 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">My Resume</h2>
          <p className="text-gray-600 mb-4">
            You can view my resume below. Download is disabled for privacy reasons.
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="/resume.pdf#toolbar=0"
              className="w-full h-[600px] border rounded-xl"
              title="My Resume"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Resume;
  