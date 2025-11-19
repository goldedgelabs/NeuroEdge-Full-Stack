export const mockUser = {
  id: 'u_1001',
  name: 'Olunde Omondi',
  email: 'olunde@example.com',
  avatar: '/neuroedge-logo.png',
  plan: 'trial'
};

export const mockMessages = [
  { id: 1, role: 'bot', text: 'Welcome back, Olunde — your NeuroEdge assistant.' },
  { id: 2, role: 'user', text: 'Summarize my project status.' },
  { id: 3, role: 'bot', text: 'You have 3 active workspaces, 12 messages in the last 24 hours, and 2 pending agent runs.' }
];

export const mockAgents = [
  { id: 'a1', name: 'Data Cleaner', description: 'Cleans dataset and standardizes columns', status: 'idle' },
  { id: 'a2', name: 'Weekly Reporter', description: 'Generates weekly summary reports and emails stakeholders', status: 'idle' },
  { id: 'a3', name: 'Market Monitor', description: 'Watches market feeds and raises alerts', status: 'running' }
];

export const mockWorkspaces = [
  { id: 'w1', name: 'Product Launch' },
  { id: 'w2', name: 'Research' },
  { id: 'w3', name: 'Personal Projects' }
];

export const mockMarketplace = [
  { id: 'm1', title: 'Agent: Sales Summary', author: 'AIShop', price: 9.99, desc: 'Generates weekly sales summaries.' },
  { id: 'm2', title: 'Agent: Social Media Planner', author: 'SocialAI', price: 14.99, desc: 'Creates content calendar and captions.' },
  { id: 'm3', title: 'Prompt Pack: Growth', author: 'PromptHub', price: 4.99, desc: 'High-converting prompts for growth.' }
];

export const mockMemories = [
  { id: 'mem1', text: 'Prefers concise summaries.' },
  { id: 'mem2', text: 'Interested in marketing automation.' }
];
