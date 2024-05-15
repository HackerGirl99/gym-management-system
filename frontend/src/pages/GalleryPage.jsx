import React, { useState } from "react";

  const GalleryPage = () => {
    const [selectedEquipmentIndex, setSelectedEquipmentIndex] = useState(null);
  
    const equipmentData = [
      { name: "Cross Trainer", description: "Cardio machine mimicking walking, running, and climbing.", imageUrl: "images/gallery/cross_trainer.jpg", details:"Cross trainers, also known as elliptical machines, offer a low-impact full-body workout suitable for all fitness levels. They engage both upper and lower body muscles simultaneously, promoting cardiovascular health and calorie burning. With adjustable settings, monitoring features, and safety measures, they provide versatility, convenience, and effectiveness in achieving fitness goals. Their compact design and user-friendly nature make them popular for home and gym use alike."},
      { name: "Decline Bench", description: "Weight bench for lower chest exercises.", imageUrl: "images/gallery/decline_bench.jpg",details:"The decline bench is an exercise equipment angled downward, targeting the lower chest muscles effectively. It enhances muscle activation in this area compared to flat benches, offering versatility for exercises like bench press and flyes. Proper form and stability are crucial for safety. It complements other chest exercises and can be adjustable for individual needs, contributing to a well-rounded chest workout routine." },
      { name: "Dip Machine", description: "Strengthens triceps and chest muscles.", imageUrl: "images/gallery/dip_machine.jpg",details:"The dip machine is a piece of fitness equipment designed for upper body exercises, particularly targeting the chest, shoulders, and triceps muscles. It offers variations in hand positioning and grip width, utilizes bodyweight resistance, and emphasizes proper form for safety. Complementing other upper body exercises, it enhances muscle strength and endurance, making it a versatile tool for a well-rounded upper body workout routine."},
      { name: "Flat Bench", description: "Versatile weight bench for various exercises.", imageUrl: "images/gallery/flat_bench.jpg",details:"The flat bench is a fundamental piece of exercise equipment used for a variety of upper body strength training exercises. Its simple design and padded surface provide stability and comfort during workouts. Versatile and accessible, it allows for exercises like bench presses, dumbbell flyes, and tricep dips, targeting muscles in the chest, shoulders, and arms. Essential for progressive overload and muscle growth, it serves as a foundational tool in both commercial gyms and home workout spaces." },
      { name: "Incline Bench", description: "Targets upper chest muscles during weightlifting.", imageUrl: "images/gallery/incline_bench.jpg",details:"The incline bench is a fitness equipment featuring an angled surface, targeting the upper chest, shoulders, and triceps. It provides a variation of exercises compared to flat benches, such as incline bench press and incline dumbbell flyes. With adjustable settings, it accommodates different fitness levels and goals. Proper form and stability are crucial for safety. Incorporating incline bench exercises promotes muscle balance and strength in the upper body." },
      { name: "Lat Pulldown", description: "Strengthens upper back and shoulder muscles.", imageUrl: "images/gallery/lat_pulldown.jpg" ,details:"The lat pulldown machine is a piece of fitness equipment designed to target the muscles of the upper back, primarily the latissimus dorsi. It involves pulling a bar attached to a cable pulley system towards the chest while seated. With adjustable resistance and various grip positions, it offers versatility for users of different fitness levels. Proper form and technique are crucial for safety and effectiveness. Complementing other back exercises, it helps build strength and muscle mass in the upper back."},
      { name: "Leg Curl", description: "Works hamstrings at the back of the thighs.", imageUrl: "images/gallery/leg_curl.jpg" ,details:"The leg curl machine is designed to target the hamstrings, the muscles at the back of the thigh. Users lie face down on the machine and bend their knees to curl the lower legs towards the buttocks. Adjustable resistance makes it suitable for users of all levels, while proper form ensures safety and effectiveness. Leg curls complement other lower body exercises, contributing to balanced leg strength and stability."},
      { name: "Leg Extension", description: "Isolates and targets the quadriceps muscles.", imageUrl: "images/gallery/leg_extension.jpg",details:"The leg extension machine isolates and strengthens the quadriceps muscles of the thigh. Users sit on the machine and extend their lower legs against resistance, primarily targeting the front of the thigh. Adjustable resistance settings accommodate users of different strength levels. Proper form is important to prevent injury. Leg extensions can complement other lower body exercises for balanced leg strength and development." },
      { name: "Leg Press", description: "Strengthens the quadriceps, hamstrings, and glutes.", imageUrl: "images/gallery/leg_press.jpg" ,details:"The leg press machine targets the lower body muscles, primarily the quadriceps, hamstrings, and glutes. Users push a platform away from the body, mimicking a squat motion. With adjustable resistance and various machine designs, it offers versatility in training. Safety features ensure proper form and stability during exercises. Leg press exercises can be complemented by other lower body workouts for comprehensive leg strength and development."},
      { name: "Multi Station", description: "Combines multiple workout stations for full-body training.", imageUrl: "images/gallery/multi_station.png" ,details:"A multi-station gym is a versatile fitness equipment combining various exercise stations into one machine. It offers options for upper body, lower body, and core workouts, making it suitable for comprehensive full-body routines. With adjustable resistance, safety features, and space efficiency, it's popular for home gyms. Users of different fitness levels can customize workouts, making it a cost-effective and convenient choice for achieving fitness goals."},
      { name: "Treadmill", description: "Cardio equipment for walking, running, or jogging indoors.", imageUrl: "images/gallery/treadmill.jpg",details:"Treadmills are versatile fitness machines designed for indoor walking, jogging, or running. They provide effective cardiovascular workouts, offering adjustable speed and incline settings to match users' fitness levels and goals. Equipped with monitoring features, safety mechanisms, and various workout options, treadmills offer a convenient and accessible way to improve fitness indoors." },
      { name: "Pec Deck", description: "Targets the pectoral muscles with controlled resistance.", imageUrl: "images/gallery/pec_deck.jpg" ,details:"The pec deck, also known as the chest fly machine, is designed to target the chest muscles, primarily the pectoralis major and minor. Users sit on the machine, gripping handles attached to moving arms, and bring the arms together in front of the chest. It's an isolation exercise, focusing solely on the chest muscles. With adjustable resistance settings, proper form is crucial to prevent injury. Pec deck exercises can be complemented by other chest workouts for balanced development."},
      { name: "Preacher Curl Bench", description: "Isolates and strengthens the biceps.", imageUrl: "images/gallery/preacher_curl_bench.jpg" ,details:"The preacher curl bench is designed to target the biceps muscles effectively. Users sit or stand with their upper arms resting on the angled padded surface, isolating the biceps. It's an isolation exercise that helps develop bicep strength and size. Adjustable settings accommodate different user preferences. Proper form and technique are crucial for safety and effectiveness. Preacher curls can be complemented by other arm exercises for balanced arm development."},
      { name: "Rowing Machine", description: "Simulates the action of rowing for a full-body workout.", imageUrl: "images/gallery/rowing_machine.jpg" ,details:"Rowing machines offer a full-body workout with minimal joint impact, making them suitable for all fitness levels. They provide cardiovascular benefits, adjustable resistance, and monitoring features. Proper technique is important for effectiveness and safety. With their compact design and versatility, they are popular for both home and gym use."},
      { name: "Shoulder Press", description: "Strengthens shoulder muscles and upper body.", imageUrl: "images/gallery/shoulder_press.jpg",details:"The shoulder press, also known as the overhead press, targets the deltoid muscles primarily. It's a compound exercise engaging multiple muscle groups simultaneously. Variations include using barbells, dumbbells, or machines. Proper form and technique are crucial to prevent injury. Complementing exercises such as lateral raises can provide balanced shoulder development. Progressive overload is key for continued progress in strength and muscle growth." },
    ];
    
    const handleSeeMoreClick = (index) => {
      setSelectedEquipmentIndex(index);
    };

    
  const handleClick = (index) => {
    setSelectedEquipmentIndex();
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
                    <h1 className="text-lg font-semibold">{`${equipment.name} Details`}</h1><br/>
                    
                    <h3 className="" onClick={()=>handleClick(index)}>{`${equipment.details} `}</h3>
                    
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
  
  export default GalleryPage;
  