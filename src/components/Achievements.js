import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

class Achievements extends Component {
  render() {
    if (this.props.resumeAchievements && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.achievements;
      var achievements = this.props.resumeAchievements.map((achievement, i) => {
        return (
          <div 
            className="achievement-card" 
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="achievement-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="achievement-content">
              <div className="achievement-text-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                {achievement.tags && (
                  <div className="achievement-tags">
                    {achievement.tags.map((tag, index) => (
                      <Badge 
                        pill 
                        className="achievement-badge mr-2 mb-2" 
                        key={index}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              {achievement.image && (
                <div className="achievement-image-wrapper">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="achievement-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder.jpg"; // Fallback image
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      });
    }

    return (
      <section id="achievements" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName || "Achievements"}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <div className="achievements-container">
            {achievements}
          </div>
        </div>
      </section>
    );
  }
}

export default Achievements;