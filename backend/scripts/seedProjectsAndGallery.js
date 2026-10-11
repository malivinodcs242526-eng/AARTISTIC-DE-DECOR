require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('../models/Project');
const GalleryImage = require('../models/GalleryImage');

const projectsData = [
  // Commercial Projects
  {
    title: 'Andheri Corporate Headquarters',
    description: 'Bespoke corporate workstation and collaborative office interior tailored for high-productivity teams with modern glass partitions and ergonomic styling.',
    category: 'commercial',
    location: 'Andheri East, Mumbai',
    tags: ['Corporate', 'Office', 'Modern'],
    images: ['/Images/Andheri Office.jpg']
  },
  {
    title: 'Specialty Healthcare & Clinic Interior',
    description: 'Soothing, hygienic, and modern clinic design combining patient comfort with functional clinical workflow and warm illumination.',
    category: 'commercial',
    location: 'Navi Mumbai',
    tags: ['Healthcare', 'Clinic', 'Commercial'],
    images: ['/Images/Comerrcial hospital.jpg']
  },
  {
    title: 'Luxe Retail & Commercial Hub',
    description: 'High-end retail storefront and showroom space featuring strategic display lighting, premium finishes, and customer-first circulation.',
    category: 'commercial',
    location: 'Vashi, Navi Mumbai',
    tags: ['Retail', 'Commercial', 'Showroom'],
    images: ['/Images/Commercial 2.jpg']
  },
  {
    title: 'Executive Boardroom & Conference Suite',
    description: 'Sophisticated acoustic conference room and executive lounge featuring luxury wood panelling, integrated AV wiring, and leadership boardroom setup.',
    category: 'commercial',
    location: 'BKC, Mumbai',
    tags: ['Executive', 'Conference', 'Boardroom'],
    images: ['/Images/Cmmercial 3.jpg']
  },
  {
    title: 'Prime Commercial Complex & Reception',
    description: 'Striking commercial entrance lobby and reception area creating an impactful first impression for visitors and clients.',
    category: 'commercial',
    location: 'Panvel, Navi Mumbai',
    tags: ['Reception', 'Commercial', 'Panvel'],
    images: ['/Images/Commercial 4.jpg']
  },
  {
    title: 'Creative Studio & Collaborative Workspace',
    description: 'Dynamic open-plan workspace designed with ergonomic zoning, natural light optimization, and contemporary artistic styling.',
    category: 'commercial',
    location: 'Airoli, Navi Mumbai',
    tags: ['Workspace', 'Studio', 'Modern'],
    images: ['/Images/Office 2.jpg', '/Images/Office 3.jpg']
  },
  {
    title: 'Private Executive Chambers & Meeting Suites',
    description: 'Tailored managerial suites with customized executive desks, bookshelf accents, and ambient recessed lighting.',
    category: 'commercial',
    location: 'Panvel, Navi Mumbai',
    tags: ['Executive', 'Office', 'Panvel'],
    images: ['/Images/Office 4.jpg', '/Images/Office 5.jpg']
  },

  // Residential Projects
  {
    title: 'Contemporary Luxury Living Hall',
    description: 'Spacious living room concept featuring bespoke false ceiling lights, textured accent wall styling, and plush comfortable seating.',
    category: 'residential',
    location: 'Shraddha Sankul, Panvel',
    tags: ['Living Room', 'Luxury', 'Panvel'],
    images: ['/Images/Living room 1.jpg']
  },
  {
    title: 'Minimalist Grand Living Suite',
    description: 'Open living and lounge space designed with soothing neutral palettes, subtle warm tones, and contemporary decor elements.',
    category: 'residential',
    location: 'Kharghar, Navi Mumbai',
    tags: ['Living Room', 'Minimalist', 'Modern'],
    images: ['/Images/Living room 2.jpg']
  },
  {
    title: 'Bespoke Family Living & Media Lounge',
    description: 'Warm family living room with integrated entertainment unit, custom millwork, cove lighting, and welcoming texture harmony.',
    category: 'residential',
    location: 'Seawoods, Navi Mumbai',
    tags: ['Living Room', 'Family', 'Ambient'],
    images: ['/Images/Living room 3.jpg', '/Images/Living room 4.jpg']
  },
  {
    title: 'Chic Urban Living & Dining Space',
    description: 'Modern apartment living space with seamless indoor flow, dining nook, and artful decorative accents tailored for urban lifestyle.',
    category: 'residential',
    location: 'Nerul, Navi Mumbai',
    tags: ['Living Room', 'Apartment', 'Urban'],
    images: ['/Images/Living room 5.jpg']
  },
  {
    title: 'Signature Modular Kitchen',
    description: 'High-efficiency modular kitchen equipped with quartz countertops, soft-close hardware, chimney ventilation, and optimized pantry storage.',
    category: 'residential',
    location: 'Panvel, Navi Mumbai',
    tags: ['Kitchen', 'Modular', 'Storage'],
    images: ['/Images/Kitchen 1.jpg']
  },
  {
    title: 'Chef\'s Parallel Modular Kitchen',
    description: 'Parallel kitchen layout designed for effortless food preparation with integrated appliances, scratch-resistant cabinets, and task lighting.',
    category: 'residential',
    location: 'Kharghar, Navi Mumbai',
    tags: ['Kitchen', 'Parallel', 'Lighting'],
    images: ['/Images/Kitchen 2 4.jpg', '/Images/kitchen 3.jpg']
  },
  {
    title: 'L-Shaped Designer Kitchen & Breakfast Counter',
    description: 'Sleek L-shaped modular kitchen featuring glossy anti-scratch finishes, smart pull-out organizers, and durable granite surfaces.',
    category: 'residential',
    location: 'Belapur, Navi Mumbai',
    tags: ['Kitchen', 'L-Shaped', 'Designer'],
    images: ['/Images/Kitchen 4.jpg', '/Images/Kitchen 5.jpg']
  }
];

const galleryData = [
  // Living Room
  { filename: '/Images/Living room 1.jpg', category: 'Living Room', title: 'Luxury Living Room with Cove Lighting' },
  { filename: '/Images/Living room 2.jpg', category: 'Living Room', title: 'Minimalist Modern Living Lounge' },
  { filename: '/Images/Living room 3.jpg', category: 'Living Room', title: 'Warm Family Lounge with Custom Millwork' },
  { filename: '/Images/Living room 4.jpg', category: 'Living Room', title: 'Spacious Open-Concept Living Room' },
  { filename: '/Images/Living room 5.jpg', category: 'Living Room', title: 'Urban Apartment Living & Dining Styling' },

  // Kitchen
  { filename: '/Images/Kitchen 1.jpg', category: 'Kitchen', title: 'Contemporary Modular Kitchen with Quartz Counter' },
  { filename: '/Images/Kitchen 2 4.jpg', category: 'Kitchen', title: 'Open-Concept Designer Kitchen' },
  { filename: '/Images/kitchen 3.jpg', category: 'Kitchen', title: 'Parallel Layout Kitchen with Task Lighting' },
  { filename: '/Images/Kitchen 4.jpg', category: 'Kitchen', title: 'Minimalist Kitchen Cabinets & Storage' },
  { filename: '/Images/Kitchen 5.jpg', category: 'Kitchen', title: 'L-Shaped Luxury Modular Kitchen' },

  // Office
  { filename: '/Images/Andheri Office.jpg', category: 'Office', title: 'Corporate Workstations & Glass Cabins' },
  { filename: '/Images/Office 2.jpg', category: 'Office', title: 'Creative Studio Office Interior' },
  { filename: '/Images/Office 3.jpg', category: 'Office', title: 'Executive Management Cabin' },
  { filename: '/Images/Office 4.jpg', category: 'Office', title: 'Collaborative Open Office Space' },
  { filename: '/Images/Office 5.jpg', category: 'Office', title: 'Private Consultation & Meeting Room' },

  // Commercial
  { filename: '/Images/Cmmercial 3.jpg', category: 'Commercial', title: 'Executive Conference Room & Boardroom' },
  { filename: '/Images/Comerrcial hospital.jpg', category: 'Commercial', title: 'Healthcare Clinic Interior Design' },
  { filename: '/Images/Commercial 2.jpg', category: 'Commercial', title: 'Boutique Commercial & Retail Space' },
  { filename: '/Images/Commercial 4.jpg', category: 'Commercial', title: 'Modern Commercial Reception & Lobby' }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding projects & gallery...');

    // Clear existing projects and gallery
    await Project.deleteMany({});
    await GalleryImage.deleteMany({});
    console.log('Cleared existing projects and gallery records.');

    // Seed projects
    const createdProjects = await Project.insertMany(projectsData);
    console.log(`Successfully seeded ${createdProjects.length} Projects.`);

    // Seed gallery
    const createdGallery = await GalleryImage.insertMany(galleryData);
    console.log(`Successfully seeded ${createdGallery.length} Gallery images.`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seed();
