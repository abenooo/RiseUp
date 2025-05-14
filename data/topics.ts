export interface Topic {
    id: string
    title: string
    description: string
    imageUrl: string
    category: string
    slug: string
  }
  
  export const mentalHealthTopics: Topic[] = [
    {
      id: "anxiety",
      title: "Anxiety",
      description:
        "Learn about anxiety disorders, symptoms, and effective coping strategies to manage anxious thoughts and feelings.",
      imageUrl: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "anxiety",
    },
    {
      id: "stress",
      title: "Stress",
      description:
        "Discover techniques to reduce stress and build resilience in your daily life, from mindfulness to lifestyle changes.",
      imageUrl: "https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "stress",
    },
    {
      id: "sadness",
      title: "Sadness",
      description:
        "Explore healthy ways to process sadness and grief, and learn when temporary sadness might indicate depression.",
      imageUrl: "https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "sadness",
    },
    {
      id: "confusion",
      title: "Confusion",
      description:
        "Navigate periods of uncertainty and mental fog with clarity-building practices and cognitive support strategies.",
      imageUrl: "https://images.unsplash.com/photo-1562280963-8a5475740a10?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "confusion",
    },
    {
      id: "feeling-lost",
      title: "Feeling Lost",
      description:
        "Find direction and purpose when you're feeling adrift, with guidance on self-discovery and goal setting.",
      imageUrl: "https://images.unsplash.com/photo-1499336315816-097655dcfbda?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "feeling-lost",
    },
    {
      id: "feeling-alone",
      title: "Feeling Alone",
      description:
        "Combat loneliness and isolation with connection-building strategies and community engagement approaches.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "feeling-alone",
    },
    {
      id: "trauma",
      title: "Trauma",
      description:
        "Understand trauma responses and explore healing pathways, including therapy options and self-care practices.",
      imageUrl: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "trauma",
    },
    {
      id: "burnout",
      title: "Burnout",
      description:
        "Recognize the signs of burnout and learn recovery strategies to restore energy and prevent future exhaustion.",
      imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "burnout",
    },
    {
      id: "societal-pressure",
      title: "Societal Pressure",
      description:
        "Navigate external expectations and develop resilience against harmful social pressures and standards.",
      imageUrl: "https://images.unsplash.com/photo-1529651737248-dad5e287768e?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "societal-pressure",
    },
    {
      id: "inferiority-complex",
      title: "Inferiority Complex",
      description:
        "Build self-worth and overcome feelings of inadequacy with evidence-based approaches to self-perception.",
      imageUrl: "https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "inferiority-complex",
    },
    {
      id: "exam-anxiety",
      title: "Exam Anxiety",
      description:
        "Manage test-related stress with proven techniques for preparation, focus, and performance anxiety reduction.",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "exam-anxiety",
    },
    {
      id: "panic-attacks",
      title: "Panic Attacks",
      description:
        "Understand panic attack triggers and symptoms, and learn immediate coping strategies and long-term management.",
      imageUrl: "https://images.unsplash.com/photo-1559029881-7cfd01bc1c83?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "panic-attacks",
    },
    {
      id: "peer-pressure",
      title: "Peer Pressure",
      description:
        "Develop assertiveness and boundary-setting skills to navigate social influences while staying true to yourself.",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "peer-pressure",
    },
    {
      id: "toxic-workplace",
      title: "Toxic Workplace",
      description:
        "Identify unhealthy work environments and learn strategies for coping, setting boundaries, or making changes.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "toxic-workplace",
    },
    {
      id: "imposter-syndrome",
      title: "Imposter Syndrome",
      description:
        "Overcome feelings of fraudulence and self-doubt with techniques to recognize your genuine accomplishments.",
      imageUrl: "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "imposter-syndrome",
    },
    {
      id: "lack-of-confidence",
      title: "Lack Of Confidence",
      description:
        "Build self-assurance and overcome self-doubt with practical exercises and mindset shifts for lasting confidence.",
      imageUrl: "https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=1000&auto=format&fit=crop",
      category: "Mental Health",
      slug: "lack-of-confidence",
    },
  ]
  
  export const therapyTopics: Topic[] = [
    {
      id: "mental-wellness",
      title: "Therapy for Mental Wellness",
      description:
        "Explore how therapy can support overall mental health and emotional well-being through various approaches.",
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
      category: "Therapy",
      slug: "mental-wellness",
    },
    {
      id: "marriage-counseling",
      title: "Marriage Counseling",
      description:
        "Learn how couples therapy can strengthen relationships, improve communication, and resolve conflicts.",
      imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000&auto=format&fit=crop",
      category: "Therapy",
      slug: "marriage-counseling",
    },
    {
      id: "relationship-counseling",
      title: "Relationship Counseling",
      description:
        "Discover approaches to healing and strengthening all types of relationships through therapeutic guidance.",
      imageUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1000&auto=format&fit=crop",
      category: "Therapy",
      slug: "relationship-counseling",
    },
    {
      id: "depression-counseling",
      title: "Depression Counseling",
      description:
        "Understand how therapy can help manage depression symptoms and build resilience through evidence-based approaches.",
      imageUrl: "https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=1000&auto=format&fit=crop",
      category: "Therapy",
      slug: "depression-counseling",
    },
    {
      id: "individual-therapy",
      title: "Individual Therapy",
      description:
        "Explore one-on-one therapeutic approaches tailored to your unique needs, goals, and personal growth journey.",
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
      category: "Therapy",
      slug: "individual-therapy",
    },
  ]
  
  export const coachingTopics: Topic[] = [
    {
      id: "self-improvement",
      title: "Coaching For Self-Improvement",
      description:
        "Discover how coaching can help you identify strengths, overcome obstacles, and achieve personal growth goals.",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      category: "Coaching",
      slug: "self-improvement",
    },
    {
      id: "life-coaching",
      title: "Life Coaching",
      description:
        "Learn how life coaching can provide structure, accountability, and guidance for achieving your life goals.",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
      category: "Coaching",
      slug: "life-coaching",
    },
    {
      id: "mindfulness-coaching",
      title: "Mindfulness Coaching",
      description:
        "Explore techniques for developing present-moment awareness and integrating mindfulness into daily life.",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
      category: "Coaching",
      slug: "mindfulness-coaching",
    },
    {
      id: "positivity-coaching",
      title: "Positivity Coaching",
      description: "Develop a more optimistic outlook with techniques to recognize opportunities and build resilience.",
      imageUrl: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=1000&auto=format&fit=crop",
      category: "Coaching",
      slug: "positivity-coaching",
    },
    {
      id: "career-coaching",
      title: "Career Coaching",
      description:
        "Get guidance on career development, job transitions, and achieving professional fulfillment and success.",
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
      category: "Coaching",
      slug: "career-coaching",
    },
  ]
  
  // Combined topics for easy access
  export const allTopics: Topic[] = [...mentalHealthTopics, ...therapyTopics, ...coachingTopics]
  
  // Function to get a topic by slug
  export function getTopicBySlug(slug: string): Topic | undefined {
    return allTopics.find((topic) => topic.slug === slug)
  }
  
  // Function to get topics by category
  export function getTopicsByCategory(category: string): Topic[] {
    return allTopics.filter((topic) => topic.category === category)
  }
  