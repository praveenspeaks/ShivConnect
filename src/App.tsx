import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Database,
  Workflow,
  Globe,
  ArrowRight,
  Bot,
  Smartphone,
  Zap,
  ChevronRight
} from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background Orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <div className="logo">
            <div className="logo-icon">
              <Workflow size={20} color="#050505" />
            </div>
            <span>Shiv<span className="text-gradient">Connect</span></span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#workflow">How it Works</a>
            <a href="#platforms">Platforms</a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Connect AI Agents to <span className="text-gradient">Any Channel</span></h1>
            <p>
              Build custom AI agents, connect them to your Vector Knowledge Base, and deploy seamlessly across WhatsApp, Telegram, and more. Let your agents communicate with each other to solve complex workflows.
            </p>
            <div className="hero-actions">
              <a href="#get-started" className="btn btn-primary">
                Start Building <ArrowRight size={18} />
              </a>
              <a href="#features" className="btn btn-secondary">
                Explore Features
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-graphic"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mockup-header">
              <div className="mockup-dot"></div>
              <div className="mockup-dot"></div>
              <div className="mockup-dot"></div>
            </div>
            <div className="mockup-body">
              <div className="mockup-sidebar">
                <div className="mockup-sidebar-item" style={{ width: '80%' }}></div>
                <div className="mockup-sidebar-item" style={{ width: '60%' }}></div>
                <div className="mockup-sidebar-item" style={{ width: '90%' }}></div>
                <div className="mockup-sidebar-item" style={{ width: '70%' }}></div>
              </div>
              <div className="mockup-main">
                <div className="mockup-sidebar-item" style={{ height: '40px', background: 'rgba(255,255,255,0.02)' }}></div>
                <div className="mockup-canvas glass">
                  <motion.div
                    className="node"
                    style={{ top: '20%', left: '10%' }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="node-icon"><MessageSquare size={18} /></div>
                    <div className="node-info">
                      <h4>WhatsApp Input</h4>
                      <p>Trigger Message</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="node"
                    style={{ top: '40%', left: '40%' }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="node-icon"><Bot size={18} /></div>
                    <div className="node-info">
                      <h4>Support Agent</h4>
                      <p>RAG Processing</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="node"
                    style={{ bottom: '15%', right: '15%' }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="node-icon"><Zap size={18} /></div>
                    <div className="node-info">
                      <h4>Telegram Reply</h4>
                      <p>Auto-Response</p>
                    </div>
                  </motion.div>

                  {/* Connecting Lines */}
                  <div className="connection-line" style={{ top: '35%', left: '25%', width: '18%', transform: 'rotate(20deg)' }}></div>
                  <div className="connection-line" style={{ top: '60%', left: '60%', width: '25%', transform: 'rotate(30deg)' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className="container">
          <div className="section-header">
            <h2>Supercharge Your Communications</h2>
            <p>Everything you need to build intelligent, interconnected workflows between your users and your data.</p>
          </div>

          <div className="features-grid">
            <motion.div
              className="feature-card glass"
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon-wrapper">
                <Smartphone size={28} />
              </div>
              <h3>Multi-Channel Integration</h3>
              <p>Connect seamlessly with WhatsApp, Telegram, Slack, and other unified channels. Send and receive messages automatically.</p>
            </motion.div>

            <motion.div
              className="feature-card glass"
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon-wrapper">
                <Database size={28} />
              </div>
              <h3>Vector Knowledge Base</h3>
              <p>Plug in your proprietary data using vector databases. Empower your agents to provide highly contextual, accurate answers.</p>
            </motion.div>

            <motion.div
              className="feature-card glass"
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon-wrapper">
                <Workflow size={28} />
              </div>
              <h3>Agent-to-Agent Logic</h3>
              <p>Chain multiple specialized agents together. Have a research agent pass data to a writer agent, before replying to the user.</p>
            </motion.div>

            <motion.div
              className="feature-card glass"
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon-wrapper">
                <Globe size={28} />
              </div>
              <h3>Deploy Anywhere</h3>
              <p>Deploy your intelligent agents to various platforms instantly, scaling your customer support and business operations effortlessly.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="workflow" className="workflow-section">
        <div className="container">
          <div className="section-header">
            <h2>How ShivConnect Works</h2>
            <p>Go from idea to deployed multi-agent workflow in a matter of minutes.</p>
          </div>

          <div className="workflow-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Connect Your Channels</h3>
                <p>Authenticate your WhatsApp Business API, Telegram Bot token, or other messaging channels directly on our platform to start listening for incoming customer queries.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Configure Knowledge Base</h3>
                <p>Upload your company documents, FAQs, and product specs into our managed Vector Database, ensuring your agents have the exact context they need.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Design Agent Logic</h3>
                <p>Use our visual builder to orchestrate how agents interact. Set up an initial triage agent that hands off complex queries to specialized technical agents.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Automate Replies</h3>
                <p>Once processing is complete, route the final response back to the same channel the user initiated the conversation on, instantly solving their problem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box glass">
            <h2>Ready to transform your communication?</h2>
            <p>Join businesses that are automating their workflows and providing instant, intelligent support using custom AI agents.</p>
            <a href="#" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Create Your First Agent Pipeline <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="logo" style={{ fontSize: '1.25rem' }}>
              <div className="logo-icon" style={{ width: 24, height: 24 }}>
                <Workflow size={14} color="#050505" />
              </div>
              <span>Shiv<span className="text-gradient">Connect</span></span>
            </div>

            <div className="footer-links">
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
              <a href="#">Pricing</a>
              <a href="#">Privacy</a>
            </div>

            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              &copy; {new Date().getFullYear()} ShivConnect. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
