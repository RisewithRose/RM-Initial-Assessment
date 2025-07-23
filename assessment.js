const { useState } = React;

const ReadinessAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const questions = [
    {
      id: 'primaryFocus',
      title: 'Primary Focus',
      question: 'Which statement best describes your primary focus right now?',
      options: [
        { text: "I'm in crisis and need immediate support to stabilize my life", points: 1 },
        { text: "I'm working through significant trauma or addiction issues", points: 2 },
        { text: "I'm healing from past wounds and building self-worth", points: 4 },
        { text: "I'm ready to create a bigger version of myself beyond current limitations", points: 8 },
        { text: "I'm actively embodying my highest potential and want advanced consciousness work", points: 10 }
      ]
    },
    {
      id: 'currentStability',
      title: 'Current Stability',
      question: 'How would you describe your current life stability?',
      options: [
        { text: "In active crisis (substance abuse, suicidal thoughts, psychotic episodes)", points: 1 },
        { text: "Major life disruption in last 3 months (divorce, death, job loss, mental health crisis)", points: 2 },
        { text: "Some instability but managing day-to-day responsibilities", points: 4 },
        { text: "Generally stable with normal life challenges", points: 7 },
        { text: "Very stable and thriving in most life areas", points: 10 }
      ]
    },
    {
      id: 'relationshipStatus',
      title: 'Relationship Status & Challenges',
      question: 'What best describes your relationship situation?',
      options: [
        { text: "Single and struggling with severe self-worth issues, can't maintain relationships", points: 2 },
        { text: "Single and working on building self-worth and healthy boundaries", points: 4 },
        { text: "In relationship/marriage with significant struggles around boundaries and self-worth", points: 4 },
        { text: "In relationship/marriage, generally healthy but ready for deeper growth", points: 7 },
        { text: "Single or partnered and confident in my self-worth, ready for identity expansion", points: 10 }
      ]
    },
    {
      id: 'transformationMotivation',
      title: 'Transformation Motivation',
      question: 'What\'s driving your interest in transformation work?',
      options: [
        { text: "I'm desperate and will try anything to stop my pain", points: 1 },
        { text: "I need to fix what's broken in my life", points: 3 },
        { text: "I want to heal my wounds and build better boundaries", points: 5 },
        { text: "I'm curious about becoming a bigger version of myself", points: 8 },
        { text: "I'm excited to embody my highest potential even if it's uncomfortable", points: 10 }
      ]
    },
    {
      id: 'previousGrowth',
      title: 'Previous Growth Experience',
      question: 'Think of your most recent significant personal growth experience. How did it go?',
      options: [
        { text: "I can't think of any successful growth experiences", points: 1 },
        { text: "I tried but gave up when it got difficult", points: 2 },
        { text: "I made some progress but struggled with self-sabotage", points: 4 },
        { text: "I successfully navigated challenges and learned from discomfort", points: 8 },
        { text: "I consistently grow through challenges and seek growth edges", points: 10 }
      ]
    },
    {
      id: 'responsibility',
      title: 'Responsibility & Ownership',
      question: 'When things go wrong in your life, what\'s typically true?',
      options: [
        { text: "It's usually other people's fault or circumstances beyond my control", points: 1 },
        { text: "I sometimes see my role but often blame external factors", points: 3 },
        { text: "I'm learning to take more responsibility for my part", points: 5 },
        { text: "I generally take ownership while acknowledging external factors", points: 8 },
        { text: "I consistently own my role and focus on what I can control", points: 10 }
      ]
    },
    {
      id: 'voiceComfort',
      title: 'Voice Comfort',
      question: 'How do you feel about using your voice expressively?',
      options: [
        { text: "I hate my voice and rarely speak up", points: 2 },
        { text: "I'm very shy and uncomfortable with vocal expression", points: 3 },
        { text: "I'm working on finding my voice and setting boundaries", points: 5 },
        { text: "I'm fairly comfortable expressing myself vocally", points: 7 },
        { text: "I love using my voice and am curious about vocal transformation", points: 10 }
      ]
    },
    {
      id: 'identityFlexibility',
      title: 'Identity Flexibility',
      question: 'Can you imagine being significantly different than you are now while still being authentically you?',
      options: [
        { text: "No, I am who I am and that won't change", points: 1 },
        { text: "I'm scared of losing myself if I change too much", points: 3 },
        { text: "I'm learning that I can grow while staying true to myself", points: 5 },
        { text: "Yes, I believe I can evolve while maintaining my core authenticity", points: 8 },
        { text: "I'm excited about identity evolution and see it as my natural path", points: 10 }
      ]
    },
    {
      id: 'discomfortTolerance',
      title: 'Discomfort Tolerance',
      question: 'How do you typically handle emotional or psychological discomfort?',
      options: [
        { text: "I avoid it at all costs or become completely overwhelmed", points: 1 },
        { text: "I struggle significantly and often need rescue", points: 2 },
        { text: "I'm learning to tolerate discomfort with support", points: 5 },
        { text: "I can work through discomfort and usually find my way", points: 8 },
        { text: "I see discomfort as information and growth opportunity", points: 10 }
      ]
    },
    {
      id: 'futureSelfVision',
      title: 'Future Self Vision',
      question: 'When you imagine your highest potential self, what happens?',
      options: [
        { text: "I can't imagine being different than I am now", points: 1 },
        { text: "I have vague hopes but no clear vision", points: 3 },
        { text: "I can see some improvements but focused mainly on fixing problems", points: 5 },
        { text: "I have a clear vision of my evolved self that excites me", points: 8 },
        { text: "I can viscerally feel my future self and am ready to embody that identity", points: 10 }
      ]
    },
    {
      id: 'learningStyle',
      title: 'Learning Style Preference',
      question: 'Which approach most appeals to you for transformation work?',
      options: [
        { text: "I need someone to rescue me and fix my problems", points: 1 },
        { text: "I want traditional therapy to process my past", points: 3 },
        { text: "I prefer focusing on healing wounds and building self-worth", points: 5 },
        { text: "I'm drawn to creating new possibilities while honoring challenges", points: 8 },
        { text: "I want cutting-edge consciousness technology for rapid identity transformation", points: 10 }
      ]
    },
    {
      id: 'commitmentReadiness',
      title: 'Commitment Readiness',
      question: 'How ready are you for consistent daily practice and potential discomfort?',
      options: [
        { text: "I can't commit to anything right now", points: 1 },
        { text: "I struggle with consistency and often give up", points: 2 },
        { text: "I'm working on building better habits and commitment", points: 4 },
        { text: "I'm generally good at following through on commitments", points: 7 },
        { text: "I'm excited about daily practice and ready for transformation challenges", points: 10 }
      ]
    }
  ];

  const handleAnswer = (questionId, points) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: points
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const score = Object.values(answers).reduce((sum, points) => sum + points, 0);
    setTotalScore(score);
    setShowResults(true);
  };

  const getResultsContent = () => {
    if (totalScore <= 35) {
      return {
        category: "Crisis Support Needed",
        color: "bg-red-100 border-red-500 text-red-800",
        headerColor: "bg-red-600 text-white",
        recommendation: "Immediate stabilization and crisis support",
        description: "You're dealing with significant challenges that require immediate professional support. Please reach out to appropriate crisis resources. The Rose Method will be here when you're in a more stable place.",
        nextSteps: [
          "Contact crisis support immediately if experiencing suicidal thoughts: National Suicide Prevention Lifeline: 988",
          "Consider 12-Step Programs if addiction is present",
          "Seek crisis counseling or psychiatric support",
          "Focus on stabilization first",
          "Consider reassessing in 6-12 months after establishing stability"
        ],
        programs: [],
        actionText: "If you're in immediate crisis, please contact emergency services or the crisis resources listed above."
      };
    } else if (totalScore <= 59) {
      return {
        category: "Healing & Foundation Building",
        color: "bg-orange-100 border-orange-500 text-orange-800",
        headerColor: "bg-orange-600 text-white",
        recommendation: "Self-worth building, boundary work, and emotional healing",
        description: "You're in a beautiful place of growth and healing. Led by Love will give you the foundation of self-worth and emotional mastery that will prepare you for bigger identity transformation work later.",
        nextSteps: [
          "Apply for Led by Love Program",
          "Focus on building emotional mastery and boundaries",
          "Work on rewriting limiting beliefs about yourself",
          "Consider Rose Method assessment after 6-12 months of Led by Love work"
        ],
        programs: [
          {
            name: "LED BY LOVE PROGRAM",
            features: [
              "Rewritten Inner Script: Transform limiting beliefs about yourself",
              "Emotional Mastery: Learn to regulate emotions and respond vs. react",
              "Feminine Embodiment: Connect with your feminine power and intuition (women only)",
              "Black Belt Boundaries: Master healthy boundaries in all relationships"
            ],
            perfectFor: [
              "Single women working on self-worth",
              "Women in relationships/marriages struggling with boundaries",
              "Anyone needing to heal before creating"
            ]
          }
        ],
        actionText: "Ready to build your foundation? Application links for Led by Love will be available here soon."
      };
    } else if (totalScore <= 79) {
      return {
        category: "Ready with Support",
        color: "bg-yellow-100 border-yellow-500 text-yellow-800",
        headerColor: "bg-yellow-600 text-white",
        recommendation: "Identity growth with additional nervous system support",
        description: "You're ready for growth work and have great potential for the Rose Method. Starting with some foundation building will ensure your transformation is sustainable and powerful.",
        nextSteps: [
          "Start with Led by Love for 3-6 months to build foundation",
          "Transition to Rose Method with modifications (slower pacing, extra nervous system regulation)",
          "Consider combination approach for optimal results"
        ],
        programs: [
          {
            name: "COMBINATION APPROACH",
            features: [
              "Begin with Led by Love foundation building",
              "Transition to Rose Method after 3-6 months",
              "Modified Rose Method with slower pacing",
              "Extra nervous system regulation support",
              "Additional integration support"
            ],
            perfectFor: [
              "People ready to grow but need more grounding",
              "Those with some trauma history but good stability",
              "Anyone wanting identity transformation with extra support"
            ]
          }
        ],
        actionText: "Ready to begin your combination approach? Application links will be available here soon."
      };
    } else if (totalScore <= 95) {
      return {
        category: "Rose Method Ready",
        color: "bg-green-100 border-green-500 text-green-800",
        headerColor: "bg-green-600 text-white",
        recommendation: "Identity creation and consciousness expansion",
        description: "You're beautifully aligned for the Rose Method! Your readiness for identity creation work combined with your growth orientation makes you an ideal candidate for this consciousness-based transformation.",
        nextSteps: [
          "Apply for Rose Method Full Program",
          "Schedule strategy session to discuss your readiness",
          "Begin with REVEAL Phase prophetic fiction creation",
          "Prepare for intensive voice embodiment work"
        ],
        programs: [
          {
            name: "ROSE METHOD FULL PROGRAM",
            features: [
              "REVEAL Phase: AI Oracle prophetic fiction creation",
              "ORACLE Phase: Voice embodiment mastery",
              "SPEAK Phase: Neural pathway installation",
              "EMBODY Phase: Living integration"
            ],
            perfectFor: [
              "Growth-oriented individuals ready for identity expansion",
              "People with sufficient nervous system capacity",
              "Those excited about cutting-edge transformation technology"
            ]
          }
        ],
        actionText: "Ready to transform? Rose Method application links will be available here soon."
      };
    } else {
      return {
        category: "Advanced Readiness",
        color: "bg-purple-100 border-purple-500 text-purple-800",
        headerColor: "bg-purple-600 text-white",
        recommendation: "Advanced consciousness work and mastery-level transformation",
        description: "You're operating at a high level of consciousness and readiness. The Rose Method will be both transformative for you personally and potentially prepare you to guide others in this work.",
        nextSteps: [
          "Apply for Rose Method with Advanced Options",
          "Consider facilitator training track",
          "Explore advanced consciousness research participation",
          "Prepare for potential leadership/teaching opportunities"
        ],
        programs: [
          {
            name: "ROSE METHOD + ADVANCED OPTIONS",
            features: [
              "Full Rose Method program",
              "Potential facilitator training track",
              "Advanced consciousness research participation",
              "Leadership/teaching preparation"
            ],
            perfectFor: [
              "Experienced practitioners ready for next-level work",
              "Natural teachers and healers",
              "Those called to serve others' transformation"
            ]
          }
        ],
        actionText: "Ready for advanced work? Rose Method application and facilitator track links will be available here soon."
      };
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setTotalScore(0);
  };

  if (showResults) {
    const results = getResultsContent();
    
    return React.createElement('div', { className: "max-w-4xl mx-auto p-6 bg-white" },
      React.createElement('div', { className: `rounded-lg border-2 ${results.color} overflow-hidden shadow-lg` },
        React.createElement('div', { className: `${results.headerColor} px-6 py-4` },
          React.createElement('h2', { className: "text-2xl font-bold" }, "Your Assessment Results"),
          React.createElement('p', { className: "text-lg opacity-90" }, `Score: ${totalScore}/120 - ${results.category}`)
        ),
        
        React.createElement('div', { className: "p-6" },
          React.createElement('div', { className: "mb-6" },
            React.createElement('h3', { className: "text-xl font-semibold mb-2" }, "Your Current Need"),
            React.createElement('p', { className: "font-medium" }, results.recommendation)
          ),
          
          React.createElement('div', { className: "mb-6" },
            React.createElement('h3', { className: "text-xl font-semibold mb-2" }, "Assessment Overview"),
            React.createElement('p', { className: "leading-relaxed" }, results.description)
          ),
          
          results.programs.length > 0 && React.createElement('div', { className: "mb-6" },
            React.createElement('h3', { className: "text-xl font-semibold mb-4" }, "Recommended Programs"),
            ...results.programs.map((program, index) =>
              React.createElement('div', { key: index, className: "bg-white rounded-lg border border-gray-200 p-4 mb-4" },
                React.createElement('h4', { className: "text-lg font-semibold mb-3 text-gray-800" }, program.name),
                
                React.createElement('div', { className: "mb-3" },
                  React.createElement('h5', { className: "font-medium text-gray-700 mb-2" }, "Program Features:"),
                  React.createElement('ul', { className: "list-disc pl-5 space-y-1" },
                    ...program.features.map((feature, i) =>
                      React.createElement('li', { key: i, className: "text-gray-600" }, feature)
                    )
                  )
                ),
                
                React.createElement('div', null,
                  React.createElement('h5', { className: "font-medium text-gray-700 mb-2" }, "Perfect For:"),
                  React.createElement('ul', { className: "list-disc pl-5 space-y-1" },
                    ...program.perfectFor.map((item, i) =>
                      React.createElement('li', { key: i, className: "text-gray-600" }, item)
                    )
                  )
                )
              )
            )
          ),
          
          React.createElement('div', { className: "mb-6" },
            React.createElement('h3', { className: "text-xl font-semibold mb-2" }, "Next Steps"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-2" },
              ...results.nextSteps.map((step, index) =>
                React.createElement('li', { key: index, className: "leading-relaxed" }, step)
              )
            )
          ),
          
          React.createElement('div', { className: "bg-gray-50 rounded-lg p-4 mb-6" },
            React.createElement('h3', { className: "text-lg font-semibold mb-2" }, "Take Action"),
            React.createElement('div', { className: "space-y-2" },
              React.createElement('p', { className: "text-gray-700" },
                React.createElement('strong', null, results.actionText)
              ),
              React.createElement('p', { className: "text-sm text-gray-600" },
                "Note: This assessment is for guidance only and doesn't replace professional mental health evaluation."
              )
            )
          ),
          
          React.createElement('div', { className: "flex gap-4" },
            React.createElement('button', {
              onClick: resetAssessment,
              className: "px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            }, "Take Assessment Again")
          )
        )
      )
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return React.createElement('div', { className: "max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg" },
    React.createElement('div', { className: "mb-6" },
      React.createElement('div', { className: "flex justify-between items-center mb-2" },
        React.createElement('h1', { className: "text-2xl font-bold text-gray-800" }, "Rose Method Readiness Assessment"),
        React.createElement('span', { className: "text-sm text-gray-600" },
          `Question ${currentQuestion + 1} of ${questions.length}`
        )
      ),
      React.createElement('div', { className: "w-full bg-gray-200 rounded-full h-2" },
        React.createElement('div', { 
          className: "bg-rose-500 h-2 rounded-full transition-all duration-300",
          style: { width: `${progress}%` }
        })
      )
    ),

    React.createElement('div', { className: "bg-gray-50 rounded-lg p-6 mb-6" },
      React.createElement('h2', { className: "text-xl font-semibold mb-2 text-gray-800" }, currentQ.title),
      React.createElement('p', { className: "text-lg text-gray-700 mb-6" }, currentQ.question),
      
      React.createElement('div', { className: "space-y-3" },
        ...currentQ.options.map((option, index) =>
          React.createElement('label', { 
            key: index, 
            className: "flex items-start p-4 border border-gray-200 rounded-lg hover:bg-white cursor-pointer transition-colors"
          },
            React.createElement('input', {
              type: "radio",
              name: currentQ.id,
              value: option.points,
              checked: answers[currentQ.id] === option.points,
              onChange: () => handleAnswer(currentQ.id, option.points),
              className: "mt-1 mr-3 text-rose-500"
            }),
            React.createElement('span', { className: "text-gray-700 leading-relaxed" }, option.text)
          )
        )
      )
    ),

    React.createElement('div', { className: "flex justify-between" },
      React.createElement('button', {
        onClick: prevQuestion,
        disabled: currentQuestion === 0,
        className: "px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      }, "Previous"),
      
      React.createElement('button', {
        onClick: nextQuestion,
        disabled: !answers[currentQ.id],
        className: "px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      }, currentQuestion === questions.length - 1 ? 'Get Results' : 'Next')
    ),
    
    React.createElement('div', { className: "mt-8 text-center text-sm text-gray-500" },
      React.createElement('p', null, "This assessment helps determine if the Rose Method's identity-creation approach aligns with your current needs and readiness level.")
    )
  );
};

// Render the component
ReactDOM.render(React.createElement(ReadinessAssessment), document.getElementById('root'));