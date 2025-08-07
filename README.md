# AFOLABI - Portfolio Website

A modern, responsive portfolio website for Afolabi Praise Ifekristi, built with React.js and featuring a dark theme design inspired by Victor Eke's portfolio.

## 🚀 Features

- **Modern Dark Theme**: Beautiful dark color scheme with cyan accents
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Interactive Components**: Hover effects, loading animations, and smooth transitions
- **EmailJS Integration**: Contact form with direct email functionality
- **Professional Sections**: Hero, About, Skills, Experience, Projects, and Contact
- **Custom Logo**: "AFOLABI" branding throughout the site
- **Profile Photo Section**: Dedicated area for your photo with placeholder

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **EmailJS** - Email service integration
- **CSS3** - Custom styling with dark theme
- **HTML5** - Semantic markup

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn package manager

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my_portfolio_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 📧 EmailJS Setup

To enable the contact form functionality, you need to set up EmailJS:

1. **Sign up for EmailJS** at [emailjs.com](https://www.emailjs.com/)

2. **Create an Email Service** (Gmail, Outlook, etc.)

3. **Create an Email Template** with variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message

4. **Update the Contact component** in `src/components/Contact.js`:
   ```javascript
   const result = await emailjs.sendForm(
     'YOUR_SERVICE_ID', // Replace with your service ID
     'YOUR_TEMPLATE_ID', // Replace with your template ID
     formRef.current,
     'YOUR_USER_ID' // Replace with your user ID
   );
   ```

## 🎨 Customization

### Colors
The main color scheme uses:
- Primary: `#00d4ff` (Cyan)
- Background: `#0a0a0a` (Dark)
- Text: `#ffffff` (White)
- Secondary Text: `#cccccc` (Light Gray)

### Profile Photo
Replace the placeholder in the Hero section with your actual photo:
1. Add your photo to the `public` folder
2. Update the `src/components/Hero.js` file
3. Replace the placeholder div with an `<img>` tag

### Content
Update the following files with your information:
- `src/components/Hero.js` - Main introduction
- `src/components/About.js` - Personal information
- `src/components/Skills.js` - Technical skills
- `src/components/Experience.js` - Work experience
- `src/components/Projects.js` - Portfolio projects
- `src/components/Contact.js` - Contact information

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js           # Hero section with photo
│   ├── About.js          # About section
│   ├── Skills.js         # Skills with progress bars
│   ├── Experience.js     # Work experience timeline
│   ├── Projects.js       # Portfolio projects
│   ├── Contact.js        # Contact form with EmailJS
│   ├── Footer.js         # Footer with social links
│   └── *.css            # Component styles
├── App.js               # Main app component
├── App.css              # App styles
├── index.js             # Entry point
└── index.css            # Global styles
```

## 🎯 Key Features

### Hero Section
- Professional introduction
- Profile photo placeholder
- Social media links
- Call-to-action buttons

### About Section
- Personal information
- Professional summary
- Contact details
- Certifications

### Skills Section
- Categorized skills (Frontend, Backend, etc.)
- Progress bars with animations
- Technology icons
- Additional skills tags

### Experience Section
- Timeline design
- Company information
- Role descriptions
- Technology tags

### Projects Section
- Filterable project cards
- Technology icons
- GitHub and live links
- Feature descriptions

### Contact Section
- EmailJS integration
- Contact information
- Social media links
- Form validation

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Afolabi Praise Ifekristi**
- Email: ifepraise2004@gmail.com
- GitHub: [github.com/Ife0404](https://github.com/Ife0404)
- Phone: 07082780906, 09134136130

## 🙏 Acknowledgments

- Design inspiration from [Victor Eke's portfolio](https://victoreke.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Email functionality by [EmailJS](https://www.emailjs.com/)

---

**Note**: Remember to replace the EmailJS credentials with your own before deploying the contact form functionality. 