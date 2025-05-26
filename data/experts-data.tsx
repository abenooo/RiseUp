export type ExpertType = {
  id: string;
  name: string;
  image: string;
  title: string;
  categories: string[];
  specialties: string[];
  rating: number;
  reviewCount: number;
  pricePerHour: number;
  sessionLength: number;
  experience: number;
  location: string;
  availableToday: boolean;
  verified: boolean;
  sessionTypes: ("video" | "chat" | "in-person")[];
  successRate: number;
  bio?: string;
  credentials?: string[];
};

// Featured Experts
export const featuredExpertsData: ExpertType[] = [
  {
    id: "exp-001",
    name: "Dr. Michael Chen",
    image: "https://images.pexels.com/photos/5952645/pexels-photo-5952645.jpeg",
    title: "Licensed Therapist",
    categories: ["therapist", "counselor"],
    specialties: ["Anxiety", "Depression", "Stress Management", "Trauma"],
    rating: 4.9,
    reviewCount: 127,
    pricePerHour: 120,
    sessionLength: 50,
    experience: 12,
    location: "New York, USA",
    availableToday: true,
    verified: true,
    sessionTypes: ["video", "chat", "in-person"],
    successRate: 94,
    bio: "Dr. Chen has over 12 years of experience helping individuals overcome anxiety, depression, and stress. His approach combines cognitive-behavioral therapy with mindfulness techniques to provide holistic care.",
    credentials: ["Ph.D. in Clinical Psychology", "Licensed Psychotherapist", "Certified in CBT"]
  },
  {
    id: "exp-002",
    name: "Dr. Lisa Peterson",
    image: "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg",
    title: "Clinical Psychologist",
    categories: ["psychologist", "therapist"],
    specialties: ["Depression", "Anxiety", "Relationships", "Self-Esteem"],
    rating: 4.8,
    reviewCount: 98,
    pricePerHour: 140,
    sessionLength: 50,
    experience: 15,
    location: "Los Angeles, USA",
    availableToday: false,
    verified: true,
    sessionTypes: ["video", "chat"],
    successRate: 92,
    bio: "Dr. Peterson specializes in treating depression and anxiety with a compassionate, evidence-based approach. She creates a safe space for clients to explore their emotions and develop effective coping strategies."
  },
  {
    id: "exp-003",
    name: "Mark Williams",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    title: "Life Coach",
    categories: ["coach"],
    specialties: ["Career Transition", "Work-Life Balance", "Goal Setting", "Motivation"],
    rating: 4.7,
    reviewCount: 65,
    pricePerHour: 90,
    sessionLength: 60,
    experience: 8,
    location: "Chicago, USA",
    availableToday: true,
    verified: true,
    sessionTypes: ["video", "chat"],
    successRate: 89
  },
  {
    id: "exp-004",
    name: "Dr. Sophia Rodriguez",
    image: "https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg",
    title: "Relationship Coach",
    categories: ["relationship", "coach"],
    specialties: ["Marriage Counseling", "Communication Skills", "Conflict Resolution"],
    rating: 4.9,
    reviewCount: 112,
    pricePerHour: 130,
    sessionLength: 60,
    experience: 10,
    location: "Miami, USA",
    availableToday: true,
    verified: true,
    sessionTypes: ["video", "in-person"],
    successRate: 95
  },
  {
    id: "exp-005",
    name: "Dr. James Wilson",
    image: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg",
    title: "Counseling Psychologist",
    categories: ["psychologist", "counselor"],
    specialties: ["Trauma", "Grief", "PTSD", "Anxiety"],
    rating: 4.8,
    reviewCount: 87,
    pricePerHour: 150,
    sessionLength: 50,
    experience: 20,
    location: "Boston, USA",
    availableToday: false,
    verified: true,
    sessionTypes: ["video", "in-person"],
    successRate: 93
  }
];

// All Experts
export const expertData: ExpertType[] = [
  ...featuredExpertsData,
  {
    id: "exp-006",
    name: "Emily Johnson",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    title: "Mindfulness Coach",
    categories: ["coach"],
    specialties: ["Mindfulness", "Meditation", "Stress Reduction", "Anxiety"],
    rating: 4.6,
    reviewCount: 42,
    pricePerHour: 85,
    sessionLength: 45,
    experience: 6,
    location: "Seattle, USA",
    availableToday: true,
    verified: true,
    sessionTypes: ["video", "chat"],
    successRate: 87
  },
  {
    id: "exp-007",
    name: "Dr. Robert Kim",
    image: "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg",
    title: "Psychiatrist",
    categories: ["psychiatrist"],
    specialties: ["Depression", "Anxiety Disorders", "Bipolar Disorder", "Medication Management"],
    rating: 4.9,
    reviewCount: 76,
    pricePerHour: 200,
    sessionLength: 30,
    experience: 15,
    location: "San Francisco, USA",
    availableToday: false,
    verified: true,
    sessionTypes: ["video"],
    successRate: 91
  },
  {
    id: "exp-008",
    name: "Sarah Thompson",
    image: "https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg",
    title: "Career Counselor",
    categories: ["counselor", "coach"],
    specialties: ["Career Planning", "Job Search Strategy", "Work Stress", "Career Transitions"],
    rating: 4.7,
    reviewCount: 53,
    pricePerHour: 95,
    sessionLength: 60,
    experience: 9,
    location: "Denver, USA",
    availableToday: true,
    verified: true,
    sessionTypes: ["video", "chat"],
    successRate: 88
  },
  {
    id: "exp-009",
    name: "Dr. David Martinez",
    image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg",
    title: "Family Therapist",
    categories: ["therapist"],
    specialties: ["Family Dynamics", "Parenting", "Adolescent Issues", "Blended Families"],
    rating: 4.8,
    reviewCount: 89,
    pricePerHour: 125,
    sessionLength: 60,
    experience: 14,
    location: "Austin, USA",
    availableToday: false,
    verified: true,
    sessionTypes: ["video", "in-person"],
    successRate: 90
  },
  {
    id: "exp-010",
    name: "Rebecca Clark",
    image: "https://images.pexels.com/photos/4498220/pexels-photo-4498220.jpeg",
    title: "Grief Counselor",
    categories: ["counselor", "therapist"],
    specialties: ["Grief & Loss", "Bereavement", "Life Transitions", "Emotional Processing"],
    rating: 4.9,
    reviewCount: 61,
    pricePerHour: 110,
    sessionLength: 50,
    experience: 11,
    location: "Portland, USA",
    availableToday: true,
    verified: true,
    sessionTypes: ["video", "chat", "in-person"],
    successRate: 94
  },
  {
    id: "exp-011",
    name: "Alex Turner",
    image: "https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg",
    title: "Addiction Specialist",
    categories: ["therapist", "counselor"],
    specialties: ["Substance Abuse", "Recovery", "Addiction", "Behavioral Addictions"],
    rating: 4.7,
    reviewCount: 47,
    pricePerHour: 115,
    sessionLength: 50,
    experience: 8,
    location: "Philadelphia, USA",
    availableToday: false,
    verified: true,
    sessionTypes: ["video", "in-person"],
    successRate: 86
  },
  {
    id: "exp-012",
    name: "Dr. Michelle Lee",
    image: "https://images.pexels.com/photos/6968631/pexels-photo-6968631.jpeg",
    title: "Child Psychologist",
    categories: ["psychologist"],
    specialties: ["Child Development", "ADHD", "Autism", "Behavioral Issues", "Parenting"],
    rating: 4.9,
    reviewCount: 93,
    pricePerHour: 160,
    sessionLength: 45,
    experience: 16,
    location: "San Diego, USA",
    availableToday: true,
    verified: true,
    sessionTypes: ["video", "in-person"],
    successRate: 95
  },
  {
    id: "exp-013",
    name: "Jonathan Patel",
    image: "https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg",
    title: "Stress Management Coach",
    categories: ["coach"],
    specialties: ["Workplace Stress", "Burnout Prevention", "Work-Life Balance", "Anxiety Management"],
    rating: 4.6,
    reviewCount: 38,
    pricePerHour: 80,
    sessionLength: 45,
    experience: 7,
    location: "Atlanta, USA",
    availableToday: true,
    verified: true,
    sessionTypes: ["video", "chat"],
    successRate: 85
  },
  {
    id: "exp-014",
    name: "Dr. Emma Wright",
    image: "https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg",
    title: "Trauma Specialist",
    categories: ["therapist", "psychologist"],
    specialties: ["PTSD", "Trauma Recovery", "Anxiety", "Emotional Regulation"],
    rating: 4.9,
    reviewCount: 104,
    pricePerHour: 170,
    sessionLength: 60,
    experience: 18,
    location: "Washington DC, USA",
    availableToday: false,
    verified: true,
    sessionTypes: ["video"],
    successRate: 94
  },
  {
    id: "exp-015",
    name: "Dr. Thomas Brown",
    image: "https://images.pexels.com/photos/6334771/pexels-photo-6334771.jpeg",
    title: "Couples Therapist",
    categories: ["therapist", "relationship"],
    specialties: ["Couples Therapy", "Communication Skills", "Intimacy Issues", "Conflict Resolution"],
    rating: 4.8,
    reviewCount: 79,
    pricePerHour: 145,
    sessionLength: 60,
    experience: 13,
    location: "Dallas, USA",
    availableToday: true,
    verified: true,
    sessionTypes: ["video", "in-person"],
    successRate: 92
  }
];