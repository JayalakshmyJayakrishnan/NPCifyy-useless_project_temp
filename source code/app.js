const { useState, useEffect, useRef } = React;

// Sample data from the application requirements
const rpgRoles = [
  {
    name: "The Healer",
    description: "Provides emotional support and encouragement",
    criteria: "Messages containing comfort, advice, and positive reinforcement",
    badge: "💚",
    color: "#4ade80"
  },
  {
    name: "The Rogue",
    description: "Master of late-night chaos and random thoughts",
    criteria: "Late night messages, random topics, impulsive comments",
    badge: "🗡️",
    color: "#8b5cf6"
  },
  {
    name: "The Bard",
    description: "Entertainment specialist and meme connoisseur",
    criteria: "Memes, jokes, song lyrics, entertaining content",
    badge: "🎭",
    color: "#f59e0b"
  },
  {
    name: "The Tank",
    description: "Always online, quick to respond, group backbone",
    criteria: "High message frequency, quick response times",
    badge: "🛡️",
    color: "#ef4444"
  },
  {
    name: "The Sage",
    description: "Wisdom provider and deep thinker",
    criteria: "Thoughtful responses, advice, philosophical content",
    badge: "🧙‍♂️",
    color: "#06b6d4"
  },
  {
    name: "The Warrior",
    description: "Direct communicator and decision maker",
    criteria: "Decisive language, leadership, assertive communication",
    badge: "⚔️",
    color: "#dc2626"
  }
];

const sampleGroups = [
  {
    id: "group1",
    name: "Squad Goals 2024",
    members: ["Alice", "Bob", "Charlie", "Diana"],
    memberCount: 4,
    lastUpdated: "2 hours ago",
    screenshotCount: 47,
    avatar: "🎯"
  },
  {
    id: "group2", 
    name: "Midnight Chaos Crew",
    members: ["Eve", "Frank", "Grace"],
    memberCount: 3,
    lastUpdated: "1 day ago",
    screenshotCount: 23,
    avatar: "🌙"
  }
];

const sampleUser = {
  id: "user1",
  username: "ChatMaster",
  email: "user@example.com",
  avatar: "😎",
  rpgRole: "The Bard",
  stats: {
    totalUploads: 156,
    groupsJoined: 5,
    flipbooksGenerated: 3,
    favoriteEmoji: "😂"
  }
};

// Animated Title Component
const AnimatedTitle = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'NPCify';
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <h1 className="hero-title animate-slide-up">
      {displayText}
      <span style={{opacity: displayText.length < fullText.length ? 1 : 0}}>|</span>
    </h1>
  );
};

// Navigation Component
const Navigation = ({ currentPage, onNavigate, user, onLogout }) => {
  const handleNavClick = (e, page) => {
    e.preventDefault();
    e.stopPropagation();
    onNavigate(page);
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onLogout();
  };

  return (
    <nav className="navbar">
      <div className="logo">NPCify</div>
      <div className="nav-links">
        {user ? (
          <>
            <button 
              className={`nav-link ${currentPage === 'dashboard' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'dashboard')}
              style={{background: 'none', border: 'none', cursor: 'pointer'}}
            >
              🏠 Dashboard
            </button>
            <button 
              className={`nav-link ${currentPage === 'profile' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'profile')}
              style={{background: 'none', border: 'none', cursor: 'pointer'}}
            >
              👤 Profile
            </button>
            <button className="btn-secondary" onClick={handleLogoutClick}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button 
              className={`nav-link ${currentPage === 'login' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'login')}
              style={{background: 'none', border: 'none', cursor: 'pointer'}}
            >
              Login
            </button>
            <button 
              className={`nav-link ${currentPage === 'signup' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'signup')}
              style={{background: 'none', border: 'none', cursor: 'pointer'}}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

// Landing Page Component
const LandingPage = ({ onNavigate }) => {
  const handleNavigateClick = (e, page) => {
    e.preventDefault();
    e.stopPropagation();
    onNavigate(page);
  };

  return (
    <div className="manga-bg">
      <section className="hero scroll-section">
        <AnimatedTitle />
        <p className="hero-subtitle animate-slide-up">
          Your chats. Your lore. Your squad, RPG'd.
        </p>
        <div className="hero-cta animate-slide-up">
          <button 
            className="btn-primary"
            onClick={(e) => handleNavigateClick(e, 'signup')}
          >
            Start Your Quest
          </button>
          <button 
            className="btn-secondary"
            onClick={(e) => handleNavigateClick(e, 'login')}
          >
            Continue Adventure
          </button>
        </div>
      </section>
      
      <section className="scroll-section p-8">
        <div className="container">
          <h2 className="text-center mb-8" style={{fontSize: '2.5rem', fontWeight: '700'}}>
            Transform Your Group Chats
          </h2>
          <div className="grid grid-3">
            <div className="manga-card text-center">
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📱</div>
              <h3 className="mb-4">Upload Screenshots</h3>
              <p>Drag and drop your favorite chat moments into secure group rooms.</p>
            </div>
            <div className="manga-card text-center">
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎭</div>
              <h3 className="mb-4">Get RPG Roles</h3>
              <p>Our AI analyzes your chat patterns and assigns epic RPG personas to each friend.</p>
            </div>
            <div className="manga-card text-center">
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📖</div>
              <h3 className="mb-4">Create Flipbooks</h3>
              <p>Generate beautiful manga-style memory books of your group's adventures.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Auth Forms Component
const AuthForm = ({ mode, onSubmit, onToggleMode }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleMode();
  };

  return (
    <div className="hero">
      <div className="form-container animate-slide-up">
        <h2 className="text-center mb-8">
          {mode === 'login' ? 'Welcome Back' : 'Join the Adventure'}
        </h2>
        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <input
              type="text"
              name="username"
              placeholder="Choose your username"
              className="form-input"
              value={formData.username}
              onChange={handleChange}
              required
              autoComplete="username"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
          />
          <button type="submit" className="btn-primary w-full mb-4">
            {mode === 'login' ? 'Enter the Realm' : 'Start Quest'}
          </button>
        </form>
        <p className="text-center">
          {mode === 'login' ? "New to NPCify? " : "Already have an account? "}
          <button 
            onClick={handleToggle}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--neon-cyan)',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            {mode === 'login' ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = ({ user, groups, onNavigate, onCreateGroup }) => {
  const handleCreateGroup = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onCreateGroup();
  };

  const handleGroupClick = (e, group) => {
    e.preventDefault();
    e.stopPropagation();
    onNavigate('group', group);
  };

  return (
    <div className="manga-bg" style={{paddingTop: '80px', minHeight: '100vh'}}>
      <div className="container p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="animate-slide-left">Welcome back, {user.username}!</h1>
            <div className="rpg-badge bard mt-4">
              🎭 {user.rpgRole}
            </div>
          </div>
          <div className="text-right animate-slide-right">
            <div className="mb-4">
              <strong>{user.stats.totalUploads}</strong> uploads
            </div>
            <div>
              <strong>{user.stats.groupsJoined}</strong> groups joined
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2>Your Groups</h2>
          <button className="btn-primary" onClick={handleCreateGroup}>
            ➕ Create Group
          </button>
        </div>

        <div className="grid grid-2">
          {groups.map(group => (
            <div 
              key={group.id} 
              className="group-card animate-slide-up"
              onClick={(e) => handleGroupClick(e, group)}
            >
              <div className="group-avatar">{group.avatar}</div>
              <div className="group-name">{group.name}</div>
              <div className="group-stats">
                <span>{group.memberCount} members</span>
                <span>{group.screenshotCount} screenshots</span>
              </div>
              <div style={{fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem'}}>
                Last active: {group.lastUpdated}
              </div>
            </div>
          ))}
        </div>

        {groups.length === 0 && (
          <div className="text-center p-8">
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🎯</div>
            <h3 className="mb-4">No groups yet!</h3>
            <p className="mb-8">Create your first group to start building your digital memory vault.</p>
            <button className="btn-primary" onClick={handleCreateGroup}>
              Create Your First Group
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Group Room Component
const GroupRoom = ({ group, onBack, onUpload }) => {
  const [uploads, setUploads] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const [processing, setProcessing] = useState(false);
  const fileInputRef = useRef();

  const handleBackClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onBack();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  };

  const handleFileSelect = (e) => {
    e.stopPropagation();
    const files = Array.from(e.target.files);
    processFiles(files);
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const processFiles = async (files) => {
  setProcessing(true);

  for (let file of files) {
    if (file.type.startsWith("image/")) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("prompt", "Turn this chat screenshot into exaggerated, fantastical RPG-style lore.");

      try {
        const response = await fetch("http://localhost:8000/analyze-image-gemini", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        const newUpload = {
          id: Date.now() + Math.random(),
          filename: file.name,
          uploadedBy: "You",
          timestamp: new Date().toLocaleString(),
          analyzed: true,
          extractedText: data.gemini_analysis,
        };

        setUploads((prev) => [...prev, newUpload]);
      } catch (error) {
        console.error("Upload failed:", error);
        alert("Something went wrong while analyzing the image.");
      } finally {
        setProcessing(false);
      }
    }
  }
};


  const memberRoles = group.members.map((member, index) => ({
    name: member,
    role: rpgRoles[index % rpgRoles.length]
  }));

  return (
    <div className="manga-bg" style={{paddingTop: '80px', minHeight: '100vh'}}>
      <div className="container p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <button className="btn-secondary" onClick={handleBackClick}>
              ← Back
            </button>
            <div>
              <h1>{group.avatar} {group.name}</h1>
              <p style={{color: 'var(--color-text-secondary)'}}>
                {group.memberCount} members • {group.screenshotCount + uploads.length} screenshots
              </p>
            </div>
          </div>
          <button className="btn-primary">
            📖 Generate Flipbook
          </button>
        </div>

        <div className="grid grid-2 mb-8">
          <div>
            <h3 className="mb-4">Upload Screenshots</h3>
            <div 
              className={`upload-zone ${dragOver ? 'dragover' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleUploadClick}
            >
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📱</div>
              <p style={{fontSize: '1.25rem', marginBottom: '0.5rem'}}>
                {processing ? 'Processing...' : 'Drop screenshots here'}
              </p>
              <p style={{color: 'var(--color-text-secondary)'}}>
                or click to browse files
              </p>
              {processing && <div className="loading mt-4"></div>}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              style={{display: 'none'}}
            />
          </div>

          <div>
            <h3 className="mb-4">Group Members</h3>
            <div className="grid" style={{gap: '1rem'}}>
              {memberRoles.map((member, index) => (
                <div key={index} className="manga-card">
                  <div className="flex items-center gap-4">
                    <div style={{fontSize: '2rem'}}>{member.role.badge}</div>
                    <div>
                      <div style={{fontWeight: '600'}}>{member.name}</div>
                      <div 
                        className="rpg-badge" 
                        style={{
                          color: member.role.color,
                          marginTop: '0.5rem',
                          fontSize: '0.75rem'
                        }}
                      >
                        {member.role.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {uploads.length > 0 && (
          <div>
            <h3 className="mb-4">Recent Uploads</h3>
            <div className="grid grid-3">
             {uploads.map(upload => (
  <div key={upload.id} className="lore-card">
    <div style={{fontWeight: '600', marginBottom: '0.5rem'}}>
      {upload.filename}
    </div>
    <div style={{fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem'}}>
      Uploaded by {upload.uploadedBy} • {upload.timestamp}
    </div>
    {upload.analyzed && (
      <>
        <div className="rpg-badge" style={{color: '#4ade80', fontSize: '0.75rem'}}>
          ✓ Lore Generated
        </div>
        <p style={{marginTop: '1rem', fontFamily: 'var(--font-handwritten)', fontSize: '1rem'}}>
          “{upload.extractedText}”
        </p>
      </>
    )}
  </div>
))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Profile Component
const Profile = ({ user, onBack }) => {
  const userRole = rpgRoles.find(role => role.name === user.rpgRole);

  const handleBackClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onBack();
  };

  return (
    <div className="manga-bg" style={{paddingTop: '80px', minHeight: '100vh'}}>
      <div className="container p-8">
        <button className="btn-secondary mb-8" onClick={handleBackClick}>
          ← Back to Dashboard
        </button>

        <div className="grid grid-2">
          <div className="manga-card text-center">
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>{user.avatar}</div>
            <h2 className="mb-4">{user.username}</h2>
            <div 
              className="rpg-badge"
              style={{
                color: userRole?.color || '#4ade80',
                marginBottom: '2rem',
                justifyContent: 'center'
              }}
            >
              {userRole?.badge} {user.rpgRole}
            </div>
            <p style={{color: 'var(--color-text-secondary)'}}>
              {userRole?.description}
            </p>
          </div>

          <div className="manga-card">
            <h3 className="mb-4">Your Stats</h3>
            <div className="grid" style={{gap: '1rem'}}>
              <div className="flex justify-between">
                <span>Total Uploads:</span>
                <strong>{user.stats.totalUploads}</strong>
              </div>
              <div className="flex justify-between">
                <span>Groups Joined:</span>
                <strong>{user.stats.groupsJoined}</strong>
              </div>
              <div className="flex justify-between">
                <span>Flipbooks Generated:</span>
                <strong>{user.stats.flipbooksGenerated}</strong>
              </div>
              <div className="flex justify-between">
                <span>Favorite Emoji:</span>
                <strong>{user.stats.favoriteEmoji}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="manga-card mt-8">
          <h3 className="mb-4">RPG Role Details</h3>
          <div className="grid grid-2">
            <div>
              <h4 className="mb-2">Description</h4>
              <p className="mb-4">{userRole?.description}</p>
              <h4 className="mb-2">Criteria</h4>
              <p>{userRole?.criteria}</p>
            </div>
            <div>
              <h4 className="mb-2">All Available Roles</h4>
              <div className="grid" style={{gap: '0.5rem'}}>
                {rpgRoles.map((role, index) => (
                  <div 
                    key={index}
                    className={`rpg-badge ${role.name === user.rpgRole ? 'current' : ''}`}
                    style={{
                      color: role.color,
                      opacity: role.name === user.rpgRole ? 1 : 0.6,
                      fontSize: '0.75rem'
                    }}
                  >
                    {role.badge} {role.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Create Group Modal Component
const CreateGroupModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    avatar: '🎯'
  });

  const avatarOptions = ['🎯', '🌙', '⭐', '🔥', '💎', '🎮', '🎨', '🎪', '🎭', '🎪'];

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit(formData);
    setFormData({ name: '', avatar: '🎯' });
  };

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleChange = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleAvatarSelect = (e, emoji) => {
    e.preventDefault();
    e.stopPropagation();
    setFormData(prev => ({...prev, avatar: emoji}));
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>×</button>
        <h2 className="mb-4">Create New Group</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Group name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div className="mb-4">
            <label className="form-label">Choose Avatar</label>
            <div className="flex gap-2 flex-wrap">
              {avatarOptions.map(emoji => (
                <button
                  key={emoji}
                  type="button"
                  className={`btn-secondary ${formData.avatar === emoji ? 'active' : ''}`}
                  style={{
                    padding: '0.5rem',
                    fontSize: '1.5rem',
                    background: formData.avatar === emoji ? 'var(--squid-red)' : 'transparent'
                  }}
                  onClick={(e) => handleAvatarSelect(e, emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
          <button type="submit" className="btn-primary w-full">
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [user, setUser] = useState(null);
  const [groups, setGroups] = useState(sampleGroups);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showCreateGroup, setShowCreateGroup] = useState(false);

  const handleLogin = (formData) => {
    // Simulate login
    setUser(sampleUser);
    setCurrentPage('dashboard');
  };

  const handleSignup = (formData) => {
    // Simulate signup
    const newUser = {
      ...sampleUser,
      username: formData.username,
      email: formData.email
    };
    setUser(newUser);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
  };

  const handleNavigate = (page, data = null) => {
    if (page === 'group') {
      setSelectedGroup(data);
    }
    setCurrentPage(page);
  };

  const handleCreateGroup = (formData) => {
    const newGroup = {
      id: `group_${Date.now()}`,
      name: formData.name,
      avatar: formData.avatar,
      members: [user.username],
      memberCount: 1,
      lastUpdated: 'just now',
      screenshotCount: 0
    };
    setGroups([...groups, newGroup]);
    setShowCreateGroup(false);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'login':
        return (
          <AuthForm 
            mode="login" 
            onSubmit={handleLogin}
            onToggleMode={() => setCurrentPage('signup')}
          />
        );
      case 'signup':
        return (
          <AuthForm 
            mode="signup" 
            onSubmit={handleSignup}
            onToggleMode={() => setCurrentPage('login')}
          />
        );
      case 'dashboard':
        return (
          <Dashboard 
            user={user}
            groups={groups}
            onNavigate={handleNavigate}
            onCreateGroup={() => setShowCreateGroup(true)}
          />
        );
      case 'group':
        return (
          <GroupRoom 
            group={selectedGroup}
            onBack={() => setCurrentPage('dashboard')}
          />
        );
      case 'profile':
        return (
          <Profile 
            user={user}
            onBack={() => setCurrentPage('dashboard')}
          />
        );
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="App">
      <Navigation 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        user={user}
        onLogout={handleLogout}
      />
      {renderCurrentPage()}
      <CreateGroupModal 
        isOpen={showCreateGroup}
        onClose={() => setShowCreateGroup(false)}
        onSubmit={handleCreateGroup}
      />
    </div>
  );
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
