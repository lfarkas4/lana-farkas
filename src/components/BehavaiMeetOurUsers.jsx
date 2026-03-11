// src/components/BehavaiMeetOurUsers.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function BehavaiMeetOurUsers() {
  const sectionRef = useReveal();

  const users = [
    {
      badge: "SUPERVISOR",
      icon: "/assets/bcba.png",
      title: "Board Certified Behavior Analyst",
      subtitle: "(BCBA)",
      heading: "Clinical supervisors who oversee treatment plans",
      responsibilities: [
        "Analyze data from multiple RBT sessions",
        "Create progress reports for insurer authorization",
        "Make treatment adjustments based on outcomes"
      ]
    },
    {
      badge: "TECHNICIAN",
      icon: "/assets/rbt.png",
      title: "Registered Behavior Technician",
      subtitle: "(RBT)",
      heading: "Front-line therapists delivering 1:1 ABA sessions",
      responsibilities: [
        "Collect session-by-session behavioral data",
        "Track client progress on specific goals",
        "Document observations and interventions"
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="behavai-users is-light"
      aria-label="BehavAI user personas"
    >
      <div className="behavai-users-inner reveal">
        {/* Header */}
        <header className="behavai-users-header">
          <p className="behavai-users-eyebrow">Meet Our Users</p>
          <h2 className="behavai-users-title">
            Designing for the therapists and supervisors who turn <em>daily session work</em> into <em>life-changing outcomes</em>.
          </h2>
        </header>

        {/* Body */}
        <div className="behavai-users-body">
          <p>
            Our primary focus are <span className="hi">Board Certified Behavior Analysts</span> (BCBAs) and <span className="hi">Registered Behavior Technicians</span> (RBTs), the providers who balance clinical oversight and direct intervention while navigating the operational realities that pull them away from client care.
          </p>
        </div>

        {/* User Cards */}
        <div className="behavai-users-cards">
          {users.map((user, index) => (
            <div key={index} className="behavai-user-card">
              {/* Badge - left aligned */}
              <div className="behavai-user-badge">{user.badge}</div>

              {/* Icon Circle - centered */}
              <div className="behavai-user-icon">
                <img src={user.icon} alt="" />
              </div>

              {/* Title & Subtitle - centered */}
              <div className="behavai-user-title-wrapper">
                <h3 className="behavai-user-title">
                  {user.title}
                  <span className="behavai-user-subtitle">{user.subtitle}</span>
                </h3>
              </div>

              {/* Heading - centered */}
              <p className="behavai-user-heading">{user.heading}</p>

              {/* Divider */}
              <div className="behavai-user-divider"></div>

              {/* Responsibilities - left aligned */}
              <div className="behavai-user-responsibilities">
                <h4 className="behavai-user-responsibilities-title">Responsibilities:</h4>
                <ul className="behavai-user-responsibilities-list">
                  {user.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}