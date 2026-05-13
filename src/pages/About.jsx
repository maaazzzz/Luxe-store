import { Sparkles, Heart, Award, Leaf } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <div className="about-page fade-in">
      <section className="about-hero">
        <div className="container">
          <h1>Our <span className="gradient-text">Story</span></h1>
          <p>Modern fashion crafted with intention, designed for the way you actually live.</p>
        </div>
      </section>

      <section className="container about-section">
        <div className="about-grid">
          <div className="about-text">
            <h2>Founded in 2024</h2>
            <p>
              LUXE was born from a simple frustration: too many fashion brands either chase trends without
              thinking about quality, or charge ridiculous prices for basics. We thought there had to be
              a better way.
            </p>
            <p>
              We design timeless pieces that look beautiful and feel even better. Every item passes through
              the hands of skilled craftspeople in family-run workshops. We focus on natural materials,
              ethical sourcing, and details that make a difference.
            </p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800" alt="Atelier" />
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 48 }}>What we stand for</h2>
          <div className="values-grid">
            <div className="value-card">
              <Sparkles size={28} />
              <h3>Quality first</h3>
              <p>We use natural fibers and craft each piece to last for years, not seasons.</p>
            </div>
            <div className="value-card">
              <Heart size={28} />
              <h3>Made with care</h3>
              <p>Every garment is made in workshops that treat their workers fairly.</p>
            </div>
            <div className="value-card">
              <Leaf size={28} />
              <h3>Sustainable</h3>
              <p>Minimal waste production, organic materials wherever possible.</p>
            </div>
            <div className="value-card">
              <Award size={28} />
              <h3>Honestly priced</h3>
              <p>Direct from atelier to you, no inflated markups.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div><strong>50K+</strong><span>Happy customers</span></div>
            <div><strong>120+</strong><span>Designs</span></div>
            <div><strong>4.8</strong><span>Average rating</span></div>
            <div><strong>15</strong><span>Countries</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}
