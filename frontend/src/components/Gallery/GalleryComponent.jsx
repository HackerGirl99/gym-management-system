
import React, { useState } from "react";
import "../../styles/tailwind-styles.css";


  const equipmentData = [
    { name: "Cross Trainer", description: "Cardio machine mimicking walking, running, and climbing.", imageUrl: "images/gallery/cross_trainer.jpg" },
    { name: "Decline Bench", description: "Weight bench for lower chest exercises.", imageUrl: "images/gallery/decline_bench.jpg" },
    { name: "Dip Machine", description: "Strengthens triceps and chest muscles.", imageUrl: "images/gallery/dip_machine.jpg" },
    { name: "Flat Bench", description: "Versatile weight bench for various exercises.", imageUrl: "images/gallery/flat_bench.jpg" },
    { name: "Incline Bench", description: "Targets upper chest muscles during weightlifting.", imageUrl: "images/gallery/incline_bench.jpg" },
    { name: "Lat Pulldown", description: "Strengthens upper back and shoulder muscles.", imageUrl: "images/gallery/lat_pulldown.jpg" },
    { name: "Leg Curl", description: "Works hamstrings at the back of the thighs.", imageUrl: "images/gallery/leg_curl.jpg" },
    { name: "Leg Extension", description: "Isolates and targets the quadriceps muscles.", imageUrl: "images/gallery/leg_extension.jpg" },
    { name: "Leg Press", description: "Strengthens the quadriceps, hamstrings, and glutes.", imageUrl: "images/gallery/leg_press.jpg" },
    { name: "Multi Station", description: "Combines multiple workout stations for full-body training.", imageUrl: "images/gallery/multi_station.png" },
    { name: "Treadmill", description: "Cardio equipment for walking, running, or jogging indoors.", imageUrl: "images/gallery/treadmill.jpg" },
    { name: "Pec Deck", description: "Targets the pectoral muscles with controlled resistance.", imageUrl: "images/gallery/pec_deck.jpg" },
    { name: "Preacher Curl Bench", description: "Isolates and strengthens the biceps.", imageUrl: "images/gallery/preacher_curl_bench.jpg" },
    { name: "Rowing Machine", description: "Simulates the action of rowing for a full-body workout.", imageUrl: "images/gallery/rowing_machine.jpg" },
    { name: "Shoulder Press", description: "Strengthens shoulder muscles and upper body.", imageUrl: "images/gallery/shoulder_press.jpg" },
  ];
  
  const handleSeeMoreClick = (index) => {
    setSelectedEquipmentIndex(index);
  };

  return (
    <div className="main">
      <div className="group">
        <div className="gallery-topic">EQUIPMENTS</div>
        <div className="gallery-body" />
        <div className="gallery-container">
          <div className="gallery-grid">
            {equipmentData.map((equipment, index) => (
              <div key={index} className="mb-8 relative">
                <div className="gallery-card">
                <img
                  className="gallery-img"
                  src={equipment.imageUrl}
                  alt={equipment.name}
                />
                  <div className="p-6">
                    <div className="gallery-title">{equipment.name}</div>
                    <p className="gallery-text">{equipment.description}</p>
                    <button
                      className="gallery-button"
                      onClick={() => handleSeeMoreClick(index)}
                    >
                      See More
                    </button>
                  </div>
                </div>

                {/* Equipment Details */}
                {selectedEquipmentIndex === index && (
                  <div className="absolute top-0 right-0 p-6 bg-gray-200">
                    <h2 className="text-lg font-semibold">{`${equipment.name} Details`}</h2>
                    {/* Add more details here */}
                    <p>Details about the equipment will go here.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;

