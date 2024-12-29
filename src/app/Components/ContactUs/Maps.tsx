import React from "react";

const MapSection = () => {
  return (
    <section className="py-16 px-8 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-800 md:text-4xl mb-4">
          Find Us on the Map
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Locate our office or visit us directly at our location.
        </p>
      </div>
      <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093745!2d-122.40131258468162!3d37.78799427975712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a8b1a6df%3A0x5e7df3b8a5b8b9c8!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1692039483321!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          className="absolute inset-0"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
