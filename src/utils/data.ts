export type ProjectType = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: string;
  featured: boolean;
};

export const projectsData: ProjectType[] = [
  {
    id: "sales-forecasting",
    title: "Sales Forecasting Model",
    description: "Developed a time-series forecasting model that predicts sales with 94% accuracy, saving the client an estimated $2M annually.",
    image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Time Series", "Python", "Prophet", "Pandas", "Scikit-learn"],
    github: "https://github.com/virajpawar/sales-forecasting",
    demo: "https://salesforecast-demo.virajpawar.com",
    category: "machine-learning",
    featured: true
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation Analysis",
    description: "Created an unsupervised learning model to identify distinct customer segments for targeted marketing campaigns.",
    image: "https://images.pexels.com/photos/8867430/pexels-photo-8867430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Clustering", "Python", "Scikit-learn", "Matplotlib", "K-means"],
    github: "https://github.com/virajpawar/customer-segmentation",
    category: "data-analysis",
    featured: true
  },
  {
    id: "nlp-sentiment",
    title: "NLP Sentiment Analysis",
    description: "Built a sentiment analysis pipeline for customer reviews using state-of-the-art NLP techniques and transformer models.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["NLP", "PyTorch", "Transformers", "BERT", "Hugging Face"],
    github: "https://github.com/virajpawar/nlp-sentiment",
    demo: "https://nlp-sentiment.virajpawar.com",
    category: "nlp",
    featured: true
  },
  {
    id: "covid-dashboard",
    title: "COVID-19 Data Dashboard",
    description: "Interactive visualization dashboard tracking COVID-19 statistics globally with predictive analytics capabilities.",
    image: "https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["D3.js", "React", "Python", "Flask", "Pandas"],
    github: "https://github.com/virajpawar/covid-dashboard",
    demo: "https://covid-dashboard.virajpawar.com",
    category: "visualization",
    featured: false
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    description: "Implemented a machine learning system to identify fraudulent credit card transactions with high precision and recall.",
    image: "https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "XGBoost", "Scikit-learn", "Imbalanced-learn", "Feature Engineering"],
    github: "https://github.com/virajpawar/fraud-detection",
    category: "machine-learning",
    featured: false
  },
  {
    id: "stock-prediction",
    title: "Stock Price Prediction",
    description: "Developed a deep learning model using LSTM networks to forecast stock prices based on historical data and market indicators.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Deep Learning", "LSTM", "TensorFlow", "Keras", "Financial Analysis"],
    github: "https://github.com/virajpawar/stock-prediction",
    category: "machine-learning",
    featured: false
  },
  {
    id: "image-classification",
    title: "Medical Image Classification",
    description: "Built a CNN-based system for classifying medical images to assist in early disease detection and diagnosis.",
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["CNN", "TensorFlow", "Transfer Learning", "Medical Imaging", "Healthcare AI"],
    github: "https://github.com/virajpawar/medical-imaging",
    category: "machine-learning",
    featured: false
  },
  {
    id: "recommender-system",
    title: "Product Recommendation Engine",
    description: "Created a collaborative filtering-based recommendation system for an e-commerce platform to increase user engagement.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Recommendation Systems", "Python", "Collaborative Filtering", "Matrix Factorization"],
    github: "https://github.com/virajpawar/recommender-system",
    category: "machine-learning",
    featured: false
  },
  {
    id: "data-pipeline",
    title: "Automated ETL Data Pipeline",
    description: "Designed and implemented an automated ETL pipeline for processing large-scale datasets in a distributed environment.",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Apache Airflow", "Python", "SQL", "AWS", "Data Engineering"],
    github: "https://github.com/virajpawar/etl-pipeline",
    category: "data-analysis",
    featured: false
  }
];

export const blogPostsData = [
  {
    id: "transformer-models",
    title: "Understanding Transformer Models in NLP",
    date: "May 15, 2023",
    readTime: "8 min read",
    excerpt: "An in-depth look at transformer architecture and how it revolutionized natural language processing tasks.",
    tags: ["NLP", "Deep Learning", "Transformers"],
    image: "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "time-series-forecasting",
    title: "Advanced Time Series Forecasting Techniques",
    date: "April 2, 2023",
    readTime: "12 min read",
    excerpt: "Exploring modern approaches to time series forecasting including Prophet, ARIMA, and deep learning models.",
    tags: ["Time Series", "Forecasting", "Machine Learning"],
    image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "feature-engineering",
    title: "The Art of Feature Engineering in Machine Learning",
    date: "March 10, 2023",
    readTime: "10 min read",
    excerpt: "Why feature engineering matters and techniques to transform raw data into meaningful features for ML models.",
    tags: ["Feature Engineering", "Machine Learning", "Data Preprocessing"],
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "responsible-ai",
    title: "Building Responsible AI Systems",
    date: "February 18, 2023",
    readTime: "15 min read",
    excerpt: "Ethical considerations and practical approaches to developing AI systems that are fair, transparent, and accountable.",
    tags: ["Ethics", "AI", "Responsible ML"],
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "clustering-techniques",
    title: "Comparing Clustering Algorithms: K-means vs. DBSCAN vs. Hierarchical",
    date: "January 5, 2023",
    readTime: "11 min read",
    excerpt: "A comprehensive comparison of popular clustering algorithms with real-world applications and code examples.",
    tags: ["Clustering", "Unsupervised Learning", "K-means"],
    image: "https://images.pexels.com/photos/8867430/pexels-photo-8867430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "deploying-ml-models",
    title: "From Jupyter to Production: Deploying ML Models at Scale",
    date: "December 12, 2022",
    readTime: "14 min read",
    excerpt: "Best practices for taking machine learning models from development to production with containerization and CI/CD.",
    tags: ["MLOps", "Deployment", "Production"],
    image: "https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const experienceData = [
  {
    company: "TechCorp Inc.",
    position: "Senior Data Scientist",
    period: "2021 - Present",
    description: "Leading the development of AI solutions for healthcare and financial services clients, focusing on predictive analytics and natural language processing.",
    responsibilities: [
      "Led a team of 5 data scientists in developing an NLP system for medical record analysis, resulting in 40% reduction in processing time",
      "Architected and implemented a risk assessment model for loan approval that increased accuracy by 15% and reduced default rates",
      "Developed a real-time anomaly detection system for fraud prevention using a combination of supervised and unsupervised learning techniques",
      "Presented findings and insights to executive stakeholders and translated technical concepts to business value"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "AWS", "Kubernetes", "SQL", "Spark"],
    logo: "https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=60"
  },
  {
    company: "DataViz Solutions",
    position: "Machine Learning Engineer",
    period: "2019 - 2021",
    description: "Developed and deployed machine learning models for financial forecasting, customer segmentation, and recommendation systems.",
    responsibilities: [
      "Developed a time-series forecasting model that predicted sales with 94% accuracy, saving the client an estimated $2M annually",
      "Created a customer segmentation model using unsupervised learning techniques that increased marketing campaign ROI by 35%",
      "Built and optimized data pipelines for processing large-scale datasets (10TB+) using Spark and Airflow",
      "Collaborated with UI/UX designers to create interactive data visualizations for complex datasets"
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Docker", "Airflow", "Tableau"],
    logo: "https://images.pexels.com/photos/7563687/pexels-photo-7563687.jpeg?auto=compress&cs=tinysrgb&w=60"
  },
  {
    company: "AIResearch Lab",
    position: "Data Science Intern",
    period: "Summer 2018",
    description: "Conducted research on deep learning techniques for computer vision applications as part of a summer internship program.",
    responsibilities: [
      "Implemented and evaluated various CNN architectures for image classification tasks",
      "Contributed to a research paper on transfer learning applications in medical imaging",
      "Created a dataset augmentation pipeline that improved model performance by 12%",
      "Presented research findings at the lab's summer symposium"
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Jupyter"],
    logo: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=60"
  },
  {
    company: "Elico",
    position: "Data Science Intern",
    period: "Summer 2018",
    description: "Conducted research on deep learning techniques for computer vision applications as part of a summer internship program.",
    responsibilities: [
      "Implemented and evaluated various CNN architectures for image classification tasks",
      "Contributed to a research paper on transfer learning applications in medical imaging",
      "Created a dataset augmentation pipeline that improved model performance by 12%",
      "Presented research findings at the lab's summer symposium"
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Jupyter"],
    logo: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=60"
  }

];