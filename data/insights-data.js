import {
  BarChart3,
  Clock,
  CreditCard,
  Globe,
  PhoneCall,
  PieChart,
  Receipt,
  ShieldCheck,
  UserSquare,
  Zap,
} from "lucide-react";

export const statsData = [
  {
    value: "50k+",
    label: "Active Users",
  },
  {
    value: "1B+",
    label: "Transactions Tracked",
  },
  {
    value: "1M+",
    label: "Receipts Scanned",
  },
  {
    value: "4.8/5",
    label: "User Satisfaction",
  },
  {
    value: "10k+",
    label: "Budgets Created",
  },
  {
    value: "5M+",
    label: "Reports Generated",
  },
  {
    value: "99.9%",
    label: "Data Accuracy",
  },
  {
    value: "99.9%",
    label: "Uptime Guarantee",
  },
  {
    value: "100%",
    label: "Data Security",
  },
  {
    value: "10+",
    label: "Countries Supported",
  },
];

export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Extract data from receipts effortlessly with our OCR technology.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Bank-Level Security",
    description:
      "Your data is protected with bank-level encryption and security protocols.",
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Time-Saving Automation",
    description: "Automate bill payments and investment tracking to save time.",
  },
  {
    icon: <PhoneCall className="h-8 w-8 text-blue-600" />,
    title: "24/7 Customer Support",
    description:
      "Get help whenever you need it with our dedicated support team.",
  },
  {
    icon: <UserSquare className="h-6 w-6 text-blue-600" />,
    title: "Community Support",
    description: "Join a community of users to share tips and strategies.",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: CreditCard,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: BarChart3,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: PieChart,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "Welth has transformed how I manage my business finances. The AI insights have helped me identify cost-saving opportunities I never knew existed.",
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "The receipt scanning feature saves me hours each month. Now I can focus on my work instead of manual data entry and expense tracking.",
  },
  {
    name: "Emily Rodriguez",
    role: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote:
      "I recommend Welth to all my clients. The multi-currency support and detailed analytics make it perfect for international investors.",
  },
  {
    name: "David Smith",
    role: "Tech Enthusiast",
    image: "https://randomuser.me/api/portraits/men/73.jpg",
    quote:
      "The user interface is sleek and intuitive. I love how easy it is to navigate through my financial data and insights.",
  },
  {
    name: "Jessica Brown",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/73.jpg",
    quote:
      "Welth has made budgeting a breeze. The app provides personalized recommendations that have helped me save more each month.",
  },
  {
    name: "Chris Evans",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/74.jpg",
    quote:
      "I love the community support feature. It's great to connect with other users and share tips and strategies for better financial management.",
  },
];
