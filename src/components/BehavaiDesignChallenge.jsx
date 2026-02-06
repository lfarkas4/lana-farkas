// src/components/BehavaiDesignChallenge.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function BehavaiDesignChallenge() {
  const challengeRef = useReveal();
  const iterationsRef = useReveal();

  const constraints = [
    {
      number: "1",
      title: "Legacy Systems",
      description: "Built for billing and compliance, not modern workflows or AI integration.",
      icon: "/assets/zcomputer.png"
    },
    {
      number: "2",
      title: "Therapist Skepticism",
      description: "AI-generated reports feel robotic and risk losing the therapist's authentic voice.",
      icon: "/assets/skeptic.png"
    },
    {
      number: "3",
      title: "HIPAA & Privacy",
      description: "Client data must stay protected, and public AI tools aren't an option.",
      icon: "/assets/lockandkey.png"
    },
    {
      number: "4",
      title: "Fragmented Data",
      description: "Session notes, goals, and progress live scattered across different systems and formats.",
      icon: "/assets/swwoparrows.png"
    }
  ];

  const iterations = [
    {
      number: "1",
      label: "Iteration 1",
      title: "Live preview side-by-side AI generation",
      image: "/assets/iteration1.webp",
      pros: [
        "Instant visibility into what AI is generating",
        "Therapists can see and edit in real-time"
      ],
      cons: [
        "Providers felt like passive observers, watching AI work without being able to guide the output",
        "Clinical narratives lost their authentic voice and felt generic",
        "No way for BCBAs to emphasize specific client progress or concerns"
      ],
      chosen: false
    },
    {
      number: "2",
      label: "Iteration 2",
      title: "Copilot for drafting and polishing reports",
      image: "/assets/iteration2.webp",
      pros: [
        "Gave therapists more agency, so they could ask for help when needed",
        "Flexible support without taking over the document"
      ],
      cons: [
        "Context-switching between chat and document created cognitive overhead for BCBAs",
        "Difficult to prompt AI for the specific clinical language providers needed",
        "Reports still required substantial editing to match their professional voice"
      ],
      chosen: false
    },
    {
      number: "3",
      label: "Iteration 3",
      title: "Dynamic modular cards with AI assist for creation and editing",
      image: "/assets/iteration3.webp",
      pros: [
        "Clear division of control: AI suggests structure, provider decides content",
        "Section-by-section editing helps BCBAs maintain their clinical voice",
        "Flexible layout lets providers emphasize what matters for each unique client",
        "Drag-and-drop structure gives full layout flexibility",
      ],
      cons: [
        "Requires more upfront setup compared to automatic generation",
        "Slightly steeper learning curve for providers new to the platform"
      ],
      chosen: true
    }
  ];

  return (
    <>
      {/* ===== DESIGN CHALLENGE SECTION ===== */}
      <section
        ref={challengeRef}
        className="behavai-challenge is-light"
        aria-label="BehavAI design challenge"
      >
        <div className="behavai-challenge-inner reveal">
          {/* Header */}
          <header className="behavai-challenge-header">
            <p className="behavai-challenge-eyebrow">Design Constraints</p>
            <h2 className="behavai-challenge-title">
              Understanding the <em>constraints</em> of integrating AI into workflows that needed structure <em>before automation</em>.
            </h2>
          </header>

          {/* Body */}
          <div className="behavai-challenge-body">
            <p>
              ABA workflows are <span className="hi">messy by necessity</span>. Therapists juggle legacy systems, paper notes, and strict compliance rules while protecting client privacy.
            We needed to <span className="hi">understand these constraints</span> deeply before designing anything.
            </p>
          </div>

          {/* Constraint Cards */}
          <div className="behavai-constraint-cards reveal">
            {constraints.map((constraint, index) => (
              <div 
                key={index} 
                className="behavai-constraint-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="constraint-card-label">Constraint {constraint.number}</div>
                <div className="constraint-card-header">
                  <h3 className="constraint-card-title">{constraint.title}</h3>
                  <img 
                    src={constraint.icon} 
                    alt="" 
                    className="constraint-card-icon"
                  />
                </div>
                <p className="constraint-card-description">
                  {constraint.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY ITERATIONS SECTION ===== */}
      <section
        ref={iterationsRef}
        className="behavai-iterations is-light"
        aria-label="BehavAI key iterations"
      >
        <div className="behavai-iterations-inner reveal">
          {/* Header */}
          <header className="behavai-iterations-header">
            <p className="behavai-iterations-eyebrow">Key Iterations</p>
            <h2 className="behavai-iterations-title">
              We explored different approaches to find the right balance between <em>AI assistance</em> and <em>provider control</em>.
            </h2>
          </header>

          {/* Body */}
          <div className="behavai-iterations-body">
            <p>
              Each iteration explored a different level of AI involvement in the documentation process. We tested approaches ranging from <span className="hi">AI-led automation</span> to <span className="hi">provider-led collaboration</span>, learning how much control therapists actually wanted.
            </p>
          </div>

          {/* Iterations */}
          <div className="behavai-iterations-list">
            {iterations.map((iteration, index) => (
              <div 
                key={index} 
                className={`behavai-iteration ${iteration.chosen ? 'behavai-iteration--chosen' : ''} reveal`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="behavai-iteration-header">
                  <h3 className="behavai-iteration-title">
                    <span className="behavai-iteration-label">{iteration.label}:</span>
                    {" "}{iteration.title}
                  </h3>
                  {iteration.chosen && (
                    <span className="behavai-iteration-badge">Chosen Design</span>
                  )}
                </div>

                <div className="behavai-iteration-media">
                  <img 
                    src={iteration.image} 
                    alt={`${iteration.label}: ${iteration.title}`}
                    className="behavai-iteration-image"
                  />
                </div>

                <div className="behavai-iteration-feedback">
                  {/* Pros Column (Left) */}
                  <div className="behavai-feedback-column">
                    {iteration.pros.map((pro, i) => (
                      <div key={`pro-${i}`} className="behavai-feedback-card behavai-feedback-card--pro">
                        <img src="/assets/pro.png" alt="" className="feedback-icon" />
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>

                  {/* Cons Column (Right) */}
                  <div className="behavai-feedback-column">
                    {iteration.cons.map((con, i) => (
                      <div key={`con-${i}`} className="behavai-feedback-card behavai-feedback-card--con">
                        <img src="/assets/con.png" alt="" className="feedback-icon" />
                        <span>{con}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}