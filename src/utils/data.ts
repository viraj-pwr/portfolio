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
    excerpt: "An in-depth look at transformer architecture and how it revolutionized natural language processing tasks. Learn about attention mechanisms, self-attention, and how transformers have become the foundation of modern NLP systems.",
    tags: ["NLP", "Deep Learning", "Transformers", "Machine Learning", "AI"],
    image: "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: `
# Understanding Transformer Models in NLP

## Introduction

Transformer models have revolutionized the field of Natural Language Processing (NLP) since their introduction in the paper "Attention is All You Need" by Vaswani et al. in 2017. These models have become the foundation for state-of-the-art NLP systems, powering applications like machine translation, text generation, and question answering.

## The Transformer Architecture

The transformer architecture consists of several key components:

1. **Self-Attention Mechanism**
   - Allows the model to weigh the importance of different words in a sequence
   - Enables capturing long-range dependencies in text
   - Computes attention scores between all pairs of words

2. **Multi-Head Attention**
   - Multiple attention heads allow the model to focus on different aspects of the input
   - Each head learns different patterns and relationships
   - Improves the model's ability to capture complex linguistic features

3. **Positional Encoding**
   - Adds information about the position of words in the sequence
   - Enables the model to understand word order
   - Uses sine and cosine functions to create unique position embeddings

4. **Feed-Forward Networks**
   - Processes the output of attention layers
   - Applies non-linear transformations
   - Helps capture complex patterns in the data

## Key Advantages

1. **Parallel Processing**
   - Unlike RNNs, transformers can process all words in parallel
   - Significantly faster training and inference
   - Better utilization of modern hardware

2. **Long-Range Dependencies**
   - Can capture relationships between words regardless of distance
   - Better at understanding context and meaning
   - Improved performance on tasks requiring global understanding

3. **Scalability**
   - Can be scaled up to handle larger datasets
   - Performance improves with model size
   - Enables training on massive amounts of text data

## Applications

1. **Language Translation**
   - State-of-the-art performance on machine translation
   - Can handle multiple languages
   - Better context understanding

2. **Text Generation**
   - Produces coherent and contextually relevant text
   - Used in chatbots and content generation
   - Can be fine-tuned for specific domains

3. **Question Answering**
   - Understands and answers questions about text
   - Can extract relevant information
   - Used in virtual assistants and search engines

## Challenges and Considerations

1. **Computational Resources**
   - Requires significant computing power
   - Large memory footprint
   - High training costs

2. **Data Requirements**
   - Needs massive amounts of training data
   - Quality of training data is crucial
   - Domain-specific fine-tuning may be necessary

3. **Interpretability**
   - Complex internal workings
   - Difficult to understand decision-making process
   - Active area of research

## Future Directions

1. **Efficiency Improvements**
   - Model compression techniques
   - Sparse attention mechanisms
   - Knowledge distillation

2. **Multimodal Applications**
   - Combining text with other modalities
   - Vision-language models
   - Audio-text integration

3. **Ethical Considerations**
   - Bias mitigation
   - Fairness in model outputs
   - Responsible AI development

## Conclusion

Transformer models have fundamentally changed the landscape of NLP, enabling unprecedented performance on various language tasks. As research continues, we can expect further improvements in efficiency, capabilities, and applications. Understanding these models is crucial for anyone working in the field of AI and NLP.

## References

1. Vaswani, A., et al. (2017). "Attention is All You Need"
2. Devlin, J., et al. (2019). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"
3. Brown, T., et al. (2020). "Language Models are Few-Shot Learners"
    `
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
    company: "McCune Management Services Ltd.",
    position: "Data Analyst",
    period: "July 2024 - February 2025",
    description: "Worked as data analyst in Project Management Office team ",
    responsibilities: [
    ],
    technologies: ["Python", "Google Cloud", "Smartsheet", "Looker Studio", "Google Apps Script", "SQL", ""],
    logo: "data:image/jpeg;base64,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lmZmZnd2Z3d2Z3d3JZ3d2JZ3diWZ2JZmJJJJJyKlVfStWmryCatPPWmUFVnqzy1p1ViCyrNA8cqqxVeShwG2G++wyBFc1EEjEL713XLFtxJbs2bkgUoJblme3KEJBKCSxJK4QkAlA3HcDtkRhlQcBTuRxLs186vq81jY2Z7FohemptTzWSsffaJDO8hSIbnaJdkG52UbncMMuxKle6nrU85DWLFiwygIrWJ5rDIgO4jRpncpGpJIjUhF3OwG5yGGodWCEkqzwoJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwi/9k="
  },
  {
    company: "Placeholder",
    position: "Placeholder",
    period: "2019 - 2021",
    description: "Developed and deployed machine learning models for financial forecasting, customer segmentation, and recommendation systems.",
    responsibilities: [
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Docker", "Airflow", "Tableau"],
    logo: "https://images.pexels.com/photos/7563687/pexels-photo-7563687.jpeg?auto=compress&cs=tinysrgb&w=60"
  },
  {
    company: "Placeholder",
    position: "Placeholder",
    period: "Summer 2018",
    description: "Conducted research on deep learning techniques for computer vision applications as part of a summer internship program.",
    responsibilities: [
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Jupyter"],
    logo: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=60"
  },
  {
    company: "Krasny Marine Services",
    position: "Service Engineer",
    period: "2012 - 2013",
    description: "Worked with Bharat Electronics Limited (BEL) team to troubleshoot and repair active and passive radar system for the Indian Navy.",
    responsibilities: [
      "Reduced the cost of maintenance by 30% by performing preventative maintenance on ECM and ESM RADAR on Indian Naval Ship before sea trials.",
      "Repaired and replaced faulty components on the radar system and conducted sea trials to ensure the radar system was working properly on sea trials.",
      "Collaborated with BEL team to troubleshoot complex radar system issues and provided technical support during sea trials.",
      "Communicated with Navy officials to ensure the radar system was working properly and to provide updates on the progress of the repairs.",
      "Documented the repair process and provided a detailed report to the Navy."
    ],
    technologies: ["Electronis Repair", "Troubleshooting", "Preventative maintenance"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPX-goFP_xarhBn1bRr4bBXXwYBHC4oNoOFw&s"
  }

];