export interface DonationCardData {
   id: number;
   title: string;
   description: string;
   donationTarget: number;
   amount: number;
}

const cards: DonationCardData[] = [
   {
      id: 1,
      title: 'Save the Whales',
      description: `Join our mission to save endangered whale species across the globe. 
             Every donation contributes to oceanic conservation efforts, 
             research initiatives to understand whale migration and health patterns, 
             anti-poaching patrols, and educational programs aimed at raising awareness about the 
             importance of biodiversity and marine habitats. 
             Our dedicated team works tirelessly to protect these majestic creatures from the threats 
             posed by commercial whaling, climate change, and habitat destruction. With your support, 
             we can expand our efforts to track and monitor whale populations, enforce anti-poaching 
             laws, and rehabilitate injured whales. We also work with local communities to promote 
             sustainable practices that benefit both people and whales. Your generous donation can 
             help us make a real impact, ensuring that future generations will have the opportunity 
             to experience the wonder of these incredible animals in their natural habitats.`,
      donationTarget: 5000000,
      amount: Math.random() * 5000000,
   },
   {
      id: 2,
      title: 'Support Local Education',
      description: `Your contribution can change the educational landscape in underfunded communities. 
             Funds are directly used to enhance learning environments by providing essential resources 
             like books, educational technology, and classroom equipment. Additionally, your support 
             helps to offer professional development and training programs for teachers, ensuring that 
             they are equipped with the tools and knowledge to deliver high-quality education. 
             Help us create opportunities for students in need to thrive academically and reach their 
             full potential. In many communities, lack of funding means that schools cannot provide 
             the basic necessities for effective teaching and learning. Your donation will help bridge 
             this gap, allowing us to supply modern educational tools, renovate outdated facilities, 
             and introduce innovative programs that engage students and foster a love for learning. 
             By supporting teacher development, we ensure that educators have access to the latest 
             pedagogical strategies and resources, empowering them to inspire and motivate their students. 
             Together, we can build a brighter future for all children, regardless of their socioeconomic background.`,
      donationTarget: 3000000,
      amount: Math.random() * 3000000,
   },
   {
      id: 3,
      title: 'Feed the Hungry',
      description: `Help us fight hunger and provide nutritious meals to those in need. 
             Your donation will support local food banks, community kitchens, and emergency food programs. 
             Together, we can ensure that no one goes to bed hungry. Hunger is a pervasive issue that affects 
             millions of people worldwide, including many in our own communities. By contributing to our cause, 
             you are helping to alleviate this suffering and provide a lifeline to individuals and families who 
             are struggling to make ends meet. Our programs focus not only on immediate relief but also on 
             long-term solutions to food insecurity. We work with local farmers to source fresh produce, 
             partner with organizations to distribute meals efficiently, and offer nutrition education to 
             help people make healthier food choices. Your support enables us to expand our reach and serve 
             more people in need, creating a stronger, healthier community for everyone.`,
      donationTarget: 2000000,
      amount: Math.random() * 2000000,
   },
   {
      id: 4,
      title: 'Plant a Billion Trees',
      description: `Join our reforestation efforts and help us plant a billion trees worldwide. 
             Trees are vital for the environment, providing oxygen, improving air quality, 
             and supporting wildlife. Your donation will help us restore forests and combat climate change.`,
      donationTarget: 10000000,
      amount: Math.random() * 10000000,
   },
   {
      id: 5,
      title: 'Support Animal Shelters',
      description: `Help provide shelter, food, and medical care for abandoned and abused animals. 
             Your contribution will support local animal shelters and rescue organizations, 
             giving animals a second chance at life and finding them loving homes.`,
      donationTarget: 1500000,
      amount: Math.random() * 1500000,
   },
];

export default cards;
